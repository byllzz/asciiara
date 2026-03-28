import React from 'react'

import {Copy , Image , Share} from 'lucide-react'

export default function ExportOptions({output , onDownload}) {
   const copyOutputResult = ()=> {
  navigator.clipboard.writeText(output);
  }

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
    <div className='flex items-center gap-3'>
      <button onClick={copyOutputResult} className='flex items-center justify-center gap-2 cursor-pointer border border-white/70 rounded-xl py-2 px-6 bg-[#111] text-white'>
        <span className=''>
          <Copy size={18} />
        </span>
        Copy
      </button>
      <button onClick={onDownload} className='flex items-center justify-center gap-2 cursor-pointer border border-white/70 rounded-xl py-2 px-6 bg-[#111] text-white'>
        <span className=''>
          <Image size={18} />
        </span>
        Save as Image
      </button>
      <button onClick={shareText} className='flex items-center justify-center gap-2 cursor-pointer border border-white/70 rounded-xl py-2 px-6 bg-[#111] text-white'>
        <span className=''>
          <Share size={18} />
        </span>
        Share
      </button>
    </div>
  )
}

