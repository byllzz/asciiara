import React, { useRef, useState } from 'react'
import OutputArea from '../components/OutputArea'
import ExportOptions from '../components/ExportOptions';
import Filters from '../components/Filters';
import {  Plus } from 'lucide-react';
import { withFilters } from '../utils/transformers';
import { toPng } from 'html-to-image';
import DownloadImage from '../components/DownloadImage';
export default function MainLayout({output , setShowToast , settings}) {

  const [showBtn , setShowBtn] = useState(false);

  const [filters , setFilters] = useState();
  const outputRef = useRef(null);



const [previewUrl, setPreviewUrl] = useState(null);
const [hitDownload, setHitDownload] = useState(false);

const handleOpenPreview = () => {
  if (outputRef.current === null) return;

  // Generate the image but don't download it yet
  toPng(outputRef.current, { cacheBust: true })
    .then(dataUrl => {
      setPreviewUrl(dataUrl); // Save for the preview <img> tag
      setHitDownload(true); // Open the modal
    })
    .catch(err => console.error('Preview generation failed', err));
};

// This function now only handles the actual saving to disk
const saveImageToDisk = () => {
  if (!previewUrl) return;
  const link = document.createElement('a');
  link.download = 'asciiara-art.png';
  link.href = previewUrl;
  link.click();
};

const withFiltersData = withFilters(filters , output);

// for both removes the filters
const handleFilterLogic = () => {
  setFilters("none");
  setShowBtn(false);
}



  return (
    <div className=" w-full h-full py-3 px-5 flex flex-col items-start  text-white mt-1">
      <div className="relative top-9 right-2.5 mb-20">
        <OutputArea output={withFiltersData} settings={settings} reff={outputRef} />
      </div>
      <ExportOptions
        output={withFiltersData}
        setShowToast={setShowToast}
        setHitDownload={handleOpenPreview}
        settings={settings}
      />

      <div className="flex items-center gap-2">
        <Filters
          filters={filters}
          setFilters={setFilters}
          setShowBtn={setShowBtn}
          settings={settings}
          output={withFiltersData}
        />
        {showBtn ? (
          <button
            disabled={!output || output.trim() === ''}
            onClick={handleFilterLogic}
            className={` h-10 flex items-center justify-center gap-1 py-1 font-bold px-2.5 cursor-pointer text-[13px] rounded-full relative top-4 transition-all duration-300  ${
              !output || output.trim() === ''
                ? 'opacity-80 cursor-not-allowed border-zinc-800 bg-blue-900/50 text-zinc-500'
                : 'cursor-pointer border-zinc-800 bg-blue-800 text-white hover:opacity-95'
            }`}
          >
            <span className="rotate-45">
              <Plus />
            </span>
            Remove Filters
          </button>
        ) : (
          ''
        )}
      </div>

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






