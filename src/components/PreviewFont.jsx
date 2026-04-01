import {  Copy, Image, Check } from 'lucide-react';
import { toPng } from 'html-to-image';
import { useRef } from 'react';
import { renderFormattedText } from '../utils/transformers';
export default function PreviewFont({
  opt,
  inputTxt,
  setShowToast,
  setOptions,
  setShowSection,
  settings,
}) {
  const cardRef = useRef(null);

  // this render font art
  const textToCopy = renderFormattedText(opt, inputTxt);

  const handleDownload = async () => {
    if (!cardRef.current) return;
    try {
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        backgroundColor: settings.themeToggle ? '#09090b' : '#ffffff',
        style: { padding: '20px' },
      });
      const link = document.createElement('a');
      link.download = `asciiara-${opt}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Image export failed:', err);
    }
  };

  // this copy
  const handleCopy = () => {
    if (!textToCopy) return;
    navigator.clipboard.writeText(textToCopy);
    setShowToast(true);
  };

  return (
    <div
      className={`mx-4 p-6 transition-colors border-b ${settings.themeToggle ? 'border-white' : 'border-black'}`}
    >
      <span className="text-[10px] uppercase text-blue-500 font-black tracking-[0.2em]">{opt}</span>

      <div
        ref={cardRef}
        className={`my-4 p-6 transition-all ${
          settings.themeToggle ? 'bg-zinc-950 text-white' : 'bg-white  text-black '
        }`}
      >
        <pre className="text-xl md:text-7xl md:max-w-full whitespace-pre-wrap break-words font-mono leading-tight">
          {textToCopy || 'No input provided'}
        </pre>
      </div>

      <div className="flex flex-wrap items-center gap-3 mt-4">
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
          onClick={() => {
            setOptions(opt);
            setShowSection('main');
          }}
          className="flex items-center justify-center text-[14px] gap-2 border rounded-[8px] py-[5px] px-2.5 transition-all

           border-zinc-700 bg-zinc-950 text-zinc-200 cursor-pointer hover:bg-zinc-900"
        >
          <Check size={15} /> Use this font
        </button>
      </div>
    </div>
  );
}
