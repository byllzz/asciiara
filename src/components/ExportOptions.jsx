import React, { useState } from 'react';
import { Copy, Share, Image, Loader2 } from 'lucide-react';

export default function ExportOptions({ output, setShowToast, setHitDownload, settings }) {
  const [isExporting, setIsExporting] = useState(false);

  const isOutputEmpty = !output || output.trim() === '';

  // Copy Logic
  const handleCopy = () => {
    if (isOutputEmpty) return;
    navigator.clipboard.writeText(output);
    setShowToast(true);
  };

  // Share Logic
  const shareText = async () => {
    if (isOutputEmpty) return;
    if (navigator.share) {
      try {
        await navigator.share({ title: 'My Asciiara Art', text: output });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      handleCopy();
    }
  };

  // download with loading
  const handleDownloadClick = async () => {
    if (isOutputEmpty) return;
    setIsExporting(true);
    try {
      await setHitDownload();
    } catch (error) {
      console.error("Export failed", error);
    } finally {
      setIsExporting(false);
    }
  };

  // btn styles
  const btnBase = `flex items-center justify-center text-[14px] gap-2 border rounded-[8px] py-[5px] px-2.5 transition-all duration-200`;
  const themeStyles = settings.themeToggle === false
    ? 'bg-white border-zinc-300 text-black hover:bg-zinc-50 border-2 font-semibold '
    : 'bg-zinc-950 border-zinc-800 text-white hover:bg-zinc-900';
  const disabledStyles = 'opacity-50 cursor-not-allowed grayscale';

  return (
    <div className="flex items-center gap-3">
      {/* copy */}
      <button
        disabled={isOutputEmpty || isExporting}
        onClick={handleCopy}
        className={`${btnBase} ${themeStyles} ${isOutputEmpty ? disabledStyles : 'cursor-pointer'}`}
      >
        <Copy size={15} />
        Copy
      </button>

      {/* downlaod image with preview */}
      <button
        disabled={isOutputEmpty || isExporting}
        onClick={handleDownloadClick}
        className={`${btnBase} ${themeStyles} ${isOutputEmpty ? disabledStyles : 'cursor-pointer'} min-w-[140px]`}
      >
        {isExporting ? (
          <>
            <Loader2 size={15} className="animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Image size={15} />
            Save as Image
          </>
        )}
      </button>

      {/* share */}
      <button
        disabled={isOutputEmpty || isExporting}
        onClick={shareText}
        className={`${btnBase} ${themeStyles} ${isOutputEmpty ? disabledStyles : 'cursor-pointer'}`}
      >
        <Share size={15} />
        Share
      </button>

     {/* loader */}
      {isExporting && (
        <span className="text-[10px] animate-pulse text-blue-500 font-bold uppercase tracking-widest">
          Processing PNG...
        </span>
      )}
    </div>
  );
}
