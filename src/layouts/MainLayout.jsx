import React, { useRef, useState } from 'react'
import OutputArea from '../components/OutputArea'
import ExportOptions from '../components/ExportOptions';
import Filters from '../components/Filters';
import {  Plus } from 'lucide-react';
import { withFilters } from '../utils/transformers';
import { toPng } from 'html-to-image';
export default function MainLayout({output , setShowToast , settings}) {

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

const withFiltersData = withFilters(filters , output);

// for both removes the filters
const handleFilterLogic = () => {
  setFilters("none");
  setShowBtn(false);
}



  return (
    <div className=" w-full h-full py-3 px-5 flex flex-col items-start  text-white mt-1">
      <div className='relative right-2.5'>
        <OutputArea output={withFiltersData} settings={settings} reff={outputRef} />
      </div>
      <ExportOptions
        output={withFiltersData}
        onDownload={downlaodImage}
        setShowToast={setShowToast}
        settings={settings}
      />

      <div className="flex items-center gap-2">
        <Filters filters={filters} setFilters={setFilters} setShowBtn={setShowBtn} settings={settings} />
        {showBtn ? (
          <button
            onClick={handleFilterLogic}
            className="bg-[#ff0000] text-white flex items-center justify-center gap-1 py-1 font-bold px-2.5 cursor-pointer text-[13px] rounded-full relative top-4 transition-all duration-300 "
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






