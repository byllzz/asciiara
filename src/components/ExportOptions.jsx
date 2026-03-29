import React  from 'react'

import {Copy , Share, Image } from 'lucide-react'
import {copyOutputResult} from '../utils/transformers';

export default function ExportOptions({ output, onDownload, setShowToast }) {
  const shareText = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Asciiara Art',
        text: output,
        url: window.location.href,
      });
    } else {
      alert('Sharing not supported on this browser, use Copy instead!');
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => {
          copyOutputResult(output);
          setShowToast(true);
        }}
        className="flex items-center justify-center text-[14px] gap-2 cursor-pointer border border-white/70 rounded-[8px] py-[5px]
        px-2.5 border-zinc-700 bg-zinc-900/40 text-white"
      >
        <span className="">
          <Copy size={15} />
        </span>
        Copy
      </button>
      <button
        onClick={onDownload}
        className="flex items-center justify-center gap-2
        text-[14px] cursor-pointer border border-white/70  rounded-[8px] py-[5px] px-2.5 border-zinc-700 bg-zinc-900/40 text-white"
      >
        <span className="">
          <Image size={15} />
        </span>
        Save as Image
      </button>
      <button
        onClick={shareText}
        className="flex items-center justify-center gap-2 text-[14px] cursor-pointer border border-white/70  rounded-[8px] py-[5px]
        px-2.5 border-zinc-700 bg-zinc-900/40 text-white"
      >
        <span className="">
          <Share size={15} />
        </span>
        Share
      </button>
    </div>
  );
}

