import React, { useRef } from 'react';
import { renderFormattedText } from '../utils/transformers';
import { Plus, Copy, Image } from 'lucide-react';
import { toPng } from 'html-to-image';
import testallBanner from '../assets/testall.png'
import { TiTick } from 'react-icons/ti';

// previewCard
const PreviewCard = ({ opt, inputTxt, setShowToast , setOptions , setShowSection }) => {
  const cardRef = useRef(null);
  const textToCopy = renderFormattedText(opt, inputTxt);

  const handleDownload = () => {
    if (cardRef.current === null) return;

    toPng(cardRef.current, { cacheBust: true })
      .then(dataUrl => {
        const link = document.createElement('a');
        link.download = `asciiara-${opt}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch(err => console.error('Image export failed:', err));
  };

  const handleCopy = () => {
    if (!inputTxt || inputTxt.trim() === '') return;
    navigator.clipboard.writeText(inputTxt);
       setShowToast(true);
  };

  const handleUseFont = () => {
    setOptions(opt);
    setShowSection("main");
  }

  return (
    <div className="mx-4 p-4 text-white border-b border-zinc-800 ">
      <span className="text-xs uppercase text-blue-400 font-mono font-bold tracking-wider">
        {opt}
      </span>

      <div ref={cardRef} className="py-6 my-3">
        <pre className="text-xl whitespace-pre-wrap break-all font-mono">
          {textToCopy || 'No input provided'}
        </pre>
      </div>

      <div className="flex items-center gap-3 mt-4 ">
        <button
          onClick={() => {
            handleCopy();
          }}
          className="flex items-center justify-center text-[14px] gap-2 border rounded-[8px] py-[5px] px-2.5 transition-all
           border-zinc-700 bg-zinc-950 text-zinc-200 cursor-pointer hover:bg-zinc-900"
        >
          <Copy size={15} /> Copy
        </button>

        <button
          onClick={handleDownload}
          className="flex items-center justify-center text-[14px] gap-2 border rounded-[8px] py-[5px] px-2.5 transition-all
           border-zinc-700 bg-zinc-950 text-zinc-200 cursor-pointer hover:bg-zinc-900"
        >
          <Image size={15} /> Save Image
        </button>

        <button
          onClick={handleUseFont}
          className="flex items-center justify-center text-[14px] gap-2 border rounded-[8px] py-[5px] px-2.5 transition-all
           border-zinc-700 bg-zinc-950 text-zinc-200 cursor-pointer hover:bg-zinc-900"
        >
          <TiTick size={15} /> Use this font
        </button>
      </div>
    </div>
  );
};

//  TestAll
export default function TestAll({ inputTxt, setShowSection, setShowToast , setOptions }) {
  // Add any new formats you create in transformers.js to this list
  const allOptions = ['uppercase', 'lowercase' , 'sort'];

  return (
    <div className="w-full h-150 overflow-y-auto relative text-white flex flex-col items-center py-4">
      <button
        className="text-zinc-300 rounded-full cursor-pointer  fixed top-53 right-10"
        onClick={() => setShowSection('main')}
      >
        <Plus className="rotate-45" size={20} />
      </button>

      <img src={testallBanner} alt="about/faqs banner" className="h-[120px] mt-6" />

      <h3 className='mt-4 text-[15px] font-outfit tracking-wide'>Number of fonts : &nbsp; {allOptions.length} </h3>

      {/* Grid of Cards */}
      <div className="grid w-full grid-cols-1 ">
        {allOptions.map(opt => (
          <PreviewCard
            key={opt}
            opt={opt}
            inputTxt={inputTxt}
            setShowToast={setShowToast}
            setOptions={setOptions}
            setShowSection={setShowSection}
          />
        ))}
      </div>
    </div>
  );
}
