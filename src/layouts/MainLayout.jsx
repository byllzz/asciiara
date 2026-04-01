import React, { useRef, useState } from 'react';
import OutputArea from '../components/OutputArea';
import ExportOptions from '../components/ExportOptions';
import Filters from '../components/Filters';
import { Plus } from 'lucide-react';
import { withFilters } from '../utils/transformers';
import { toPng } from 'html-to-image';
import DownloadImage from '../components/DownloadImage';
export default function MainLayout({
  output,
  setShowToast,
  settings,
  filters,
  setFilters,
}) {
  const outputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [hitDownload, setHitDownload] = useState(false);

  const showBtn = filters && filters !== 'none';

  // the image preview
  const handleOpenPreview = async () => {
    if (!outputRef.current) return;
    try {
      const dataUrl = await toPng(outputRef.current, { cacheBust: true });
      setPreviewUrl(dataUrl);
      setHitDownload(true);
    } catch (err) {
      console.error('Image export failed:', err);
    }
  };

  const saveImageToDisk = () => {
    if (!previewUrl) return;
    const link = document.createElement('a');
    link.download = `asciiara-${Date.now()}.png`;
    link.href = previewUrl;
    link.click();
  };

  // applying  filters to the text output
  const withFiltersData = withFilters(filters, output);

  const handleFilterReset = () => {
    setFilters('none');
  };

  return (
    <div className="w-full h-full py-6 px-4 md:px-7 flex flex-col items-start overflow-x-auto">
      {/* output area*/}
      <div className=" flex justify-center mb-10 mt-5 relative right-2">
        <OutputArea output={withFiltersData} settings={settings} reff={outputRef} />
      </div>

      {/* exports options */}
      <div className="w-full max-w-2xl ">
        <ExportOptions
          output={withFiltersData}
          setShowToast={setShowToast}
          setHitDownload={handleOpenPreview}
          settings={settings}
        />
      </div>

      {/* filter selector.. */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Filters
          filters={filters}
          setFilters={setFilters}
          settings={settings}
          output={withFiltersData}
        />

        {showBtn && (
          <button
            onClick={handleFilterReset}
            className="h-10 flex items-center justify-center gap-1 py-1 font-bold px-2.5 cursor-pointer text-[13px] rounded-full relative top-4 bg-blue-800 text-white hover:opacity-95 transition-all"
          >
            <Plus className="rotate-45" size={18} />
            Remove Filters
          </button>
        )}
      </div>

      {/* overlay for download image*/}
      {hitDownload && (
        <DownloadImage
          setHitDownload={setHitDownload}
          onDownload={saveImageToDisk}
          imageUrl={previewUrl}
        />
      )}
    </div>
  );
}
