import React, { useRef, useState } from 'react'
import OutputArea from '../components/OutputArea'
import ExportOptions from '../components/ExportOptions';
import Filters from '../components/Filters';
import {  Plus } from 'lucide-react';
import { withFilters } from '../utils/transformers';
import { toPng } from 'html-to-image';
import {useEffect} from 'react'
export default function MainLayout({output}) {

  const [showBtn , setShowBtn] = useState(false);

  const [filters , setFilters] = useState();
  const outputRef = useRef(null);

    const [showToast, setShowToast] = useState(false);

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

useEffect(() => {
const timer =   setTimeout(() => {
    setShowToast(false);
}, 5000);

return () => clearTimeout(timer)

} , [showToast])
  return (
    <div className=" w-full h-full py-3 px-5 flex flex-col items-start gap-3 text-white mt-1">
      <div ref={outputRef} className="bg-zinc-950 p-4 my-4">
        <OutputArea output={withFiltersData} />
      </div>
      <ExportOptions
        output={withFiltersData}
        onDownload={downlaodImage}
        setShowToast={setShowToast}
      />

      <div className="flex items-center gap-2">
        <Filters filters={filters} setFilters={setFilters} setShowBtn={setShowBtn} />
        {showBtn ? (
          <button
            onClick={handleFilterLogic}
            className="bg-[#ff0000] text-white flex items-center justify-center gap-1 py-1.5 font-bold px-3 cursor-pointer text-[13px] rounded-full relative top-4 transition-all duration-300 "
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

      {showToast && (
        <div className="absolute bottom-5 right-8 bg-white text-[14px] text-black py-2 px-5 rounded-[5px]">
          <button className="absolute -top-2 -left-2 bg-[#ff0000] h-5 w-5 rounded-full flex items-center justify-center font-bold cursor-pointer"
          onClick={() => {setShowToast(false)}}>
            <Plus size={15} className="rotate-45 text-white" />
          </button>
          <h3 className="font-outfit">Text was copied to clipboard!</h3>
        </div>
      )}
    </div>
  );
}






