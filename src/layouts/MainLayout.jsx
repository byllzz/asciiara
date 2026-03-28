import React, { useRef, useState } from 'react'
import OutputArea from '../components/OutputArea'
import ExportOptions from '../components/ExportOptions';
import Filters from '../components/Filters';
import { Plus } from 'lucide-react';
// image generation tool

import { toPng } from 'html-to-image';

export default function MainLayout({output}) {

  const [showBtn , setShowBtn] = useState(false);

  const [filters , setFilters] = useState();
  const outputRef = useRef(null);

  const downlaodImage = () => {
    if(outputRef.current === null) return;

    toPng(outputRef.current, { cacheBust: true })
      .then(dataUrl => {
        const link = document.createElement('a');
        link.download = 'asciiara-art.png';
        link.href = dataUrl;
        link.click();
      })
      .catch(err => console.log(err));
  }


  // for filters
 const withFilters = () => {
  let transformed = output;
  if (filters === 'reverse') {
    transformed = transformed.split('').reverse().join('');
  }
  if (filters === 'spaced') {
    transformed = transformed.split('').join(' ');
  }
  if (filters === 'bracket') {
    transformed = `[ ${transformed} ]`;
  }
  return transformed;
};


// for both removes the filters
const handleFilterLogic = () => {
  setFilters("none");
  setShowBtn(false);
}
  return (
    <div className=" w-full h-full p-3 flex flex-col items-start gap-3 text-white mt-1">
      <div>
        <div ref={outputRef} className="bg-black p-4">
          <OutputArea output={withFilters()} />
        </div>
        <ExportOptions output={withFilters()} onDownload={downlaodImage} />
        <Filters filters={filters} setFilters={setFilters} setShowBtn={setShowBtn} />

        {showBtn ? (
          <button
            onClick={handleFilterLogic}
            className="bg-[#ff0000] text-white flex items-center justify-center gap-1 py-1.5 font-bold px-3 cursor-pointer text-[13px] rounded-full"
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
    </div>
  );
}






