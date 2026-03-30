import React  from 'react'

import {Copy , Share, Image } from 'lucide-react'
// import {copyOutputResult} from '../utils/transformers';

export default function ExportOptions({ output, onDownload, setShowToast , settings }) {

  // copying to clipboard
const handleCopy = () => {
  if (!output || output.trim() === "") return;
  navigator.clipboard.writeText(output);
  setShowToast(true);
};

// native sharing
const shareText = async () => {
  if (!output || output.trim() === "") return;
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'My Asciiara Art',
        text: output,
      });
    } catch (err) {
      console.log('Error sharing:', err);
    }
  } else {
    handleCopy();
    alert("Share not supported, text copied to clipboard instead!");
  }
};


 const handleBothDownloadCopy = async () => {
   await onDownload();
   if (settings.autoCopy) {
      handleCopy();
   }
  };

  return (
    <div className="flex items-center gap-3">
      {/* copy */}
      <button
        disabled={!output || output.trim() === ''}
        onClick={handleCopy}
        className={`flex items-center justify-center text-[14px] gap-2 border rounded-[8px] py-[5px] px-2.5 transition-all
      ${
        !output || output.trim() === ''
          ? 'opacity-80 cursor-not-allowed border-zinc-800 bg-zinc-950/50 text-zinc-500'
          : 'cursor-pointer border-zinc-800 bg-zinc-950 text-white hover:bg-zinc-800'
      }`}
      >
        <Copy size={15} />
        Copy
      </button>

      {/* download */}
      <button
        disabled={!output || output.trim() === ''}
        onClick={handleBothDownloadCopy}
        className={`flex items-center justify-center gap-2 text-[14px] border rounded-[8px] py-[5px] px-2.5 transition-all
      ${
        !output || output.trim() === ''
          ? 'opacity-80 cursor-not-allowed border-zinc-800 bg-zinc-950/50 text-zinc-500'
          : 'cursor-pointer border-zinc-800 bg-zinc-950 text-white hover:bg-zinc-800'
      }`}
      >
        <Image size={15} />
        Save as Image
      </button>

      {/* share btn */}
      <button
        disabled={!output || output.trim() === ''}
        onClick={shareText}
        className={`flex items-center justify-center gap-2 text-[14px] border rounded-[8px] py-[5px] px-2.5 transition-all
      ${
        !output || output.trim() === ''
          ? 'opacity-80 cursor-not-allowed border-zinc-800 bg-zinc-950/50 text-zinc-500'
          : 'cursor-pointer border-zinc-800 bg-zinc-950 text-white hover:bg-zinc-800'
      }`}
      >
        <Share size={15} />
        Share
      </button>
    </div>
  );
}

