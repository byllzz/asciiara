import React, { useRef } from 'react';
import { renderFormattedText } from '../utils/transformers';
import { ArrowLeft, Copy, Image } from 'lucide-react'; // Added Image icon
import { toPng } from 'html-to-image';

// --- SUB-COMPONENT: PreviewCard ---
// This handles its own Ref and Download logic independently
const PreviewCard = ({ opt, inputTxt }) => {
  const cardRef = useRef(null);
  const textToCopy = renderFormattedText(opt, inputTxt);

  const handleDownload = () => {
    if (cardRef.current === null) return;

    toPng(cardRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `asciiara-${opt}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => console.error("Image export failed:", err));
  };

  return (
    <div className="border border-white/10 p-4 rounded-lg bg-black/50 text-white">
      <span className="text-xs uppercase text-blue-400 font-mono font-bold tracking-wider">
        {opt}
      </span>

      <div ref={cardRef} className="bg-black p-6 my-3 rounded-md border border-white/5">
        <pre className="text-xl whitespace-pre-wrap break-all font-mono">
          {textToCopy || "No input provided"}
        </pre>
      </div>

      <div className="flex items-center gap-3 mt-4">
        <button
          onClick={() => navigator.clipboard.writeText(textToCopy)}
          className="flex items-center gap-2 border border-white/30 hover:border-white rounded-xl py-2 px-6 bg-[#111] transition-all active:scale-95"
        >
          <Copy size={18} /> Copy
        </button>

        <button
          onClick={handleDownload}
          className="flex items-center gap-2 border border-white/30 hover:border-white rounded-xl py-2 px-6 bg-[#111] transition-all active:scale-95"
        >
          <Image size={18} /> Save Image
        </button>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT: TestAll ---
export default function TestAll({ inputTxt, setShowSection }) {
  // Add any new formats you create in transformers.js to this list
  const allOptions = ['uppercase', 'lowercase'];

  return (
    <div className="p-6 text-white bg-[#000] h-full overflow-y-auto">
      {/* Back Header */}
      <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
        <h2 className="text-2xl font-bold">Preview All Formats</h2>
        <button
          onClick={() => setShowSection('main')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-lg"
        >
          <ArrowLeft size={20} /> Back to Editor
        </button>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allOptions.map((opt) => (
          <PreviewCard key={opt} opt={opt} inputTxt={inputTxt} />
        ))}
      </div>
    </div>
  );
}
