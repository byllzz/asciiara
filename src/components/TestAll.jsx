import React, { useRef } from 'react';
import { renderFormattedText } from '../utils/transformers';
import { Plus, Copy, Image } from 'lucide-react';
import { toPng } from 'html-to-image';
import testallBanner from '../assets/testall.png'
import { TiTick } from 'react-icons/ti';

import { BsGithub } from 'react-icons/bs';

// previewCard
const PreviewCard = ({ opt, inputTxt, setShowToast , setOptions , setShowSection  , settings}) => {
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
        <pre className={`text-xl whitespace-pre-wrap break-all font-mono ${settings.themeToggle === false ? "text-black " : "text-white"}`}>
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
export default function TestAll({ inputTxt, setShowSection, setShowToast , setOptions , settings}) {
  // Add any new formats you create in transformers.js to this list
  const allOptions = ['uppercase', 'lowercase'];


  // later note: move this to global so everyone use this
      const socialLinks = [
        {
          id: 1,
          href: 'https://github.com/byllzz',
          icon: <BsGithub />,
        },
      ];

      const handleToMain = () => {
        setShowSection('main');
      };
  return (
    <div className="w-full h-137 overflow-y-auto relative text-white flex flex-col items-center pt-4 pb-30">
      <button
        className={`${settings.themeToggle === false ? 'text-black' : 'text-white'}  rounded-full cursor-pointer fixed top-53 right-10`}
        onClick={() => setShowSection('main')}
      >
        <Plus className="rotate-45" size={20} />
      </button>

      <div className="flex flex-col items-center gap-2 max-w-xl mx-auto pt-5">
        <img
          src={testallBanner}
          alt="Asciiara Testall fonts section banner"
          loading="lazy"
          draggable="false"
          className="w-full h-auto max-h-[300px] object-cover  mb-8 select-none"
        />
        <h3 className="mt-4 text-[15px] font-outfit tracking-wide">
          Number of fonts : &nbsp; {allOptions.length}{' '}
        </h3>
      </div>

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
            settings={settings}
          />
        ))}
      </div>

      <section className="pt-4 mt-6 flex flex-col items-center justify-center">
        {socialLinks.map(item => {
          const IconComponent = item.icon;
          return (
            <ul className="flex items-center justify-center gap-3">
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`text-2xl hover:brightness-150 ${settings.themeToggle === false ? 'text-black' : 'text-white'}`}
                >
                  {IconComponent}
                </a>
              </li>
            </ul>
          );
        })}

        <button
          onClick={handleToMain}
          className="flex items-center justify-center text-[14px] gap-2 border rounded-[8px] py-[5px] px-4 transition-all relative top-10  border-zinc-800 bg-zinc-950 text-zinc-200 cursor-pointer"
        >
          Done
        </button>
      </section>
    </div>
  );
}
