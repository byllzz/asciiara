import React from 'react';
import { renderFormattedText } from '../utils/transformers';
import { ArrowLeft } from 'lucide-react';

export default function TestAll({ inputTxt, setShowSection }) {
  // options here
  const allOptions = ['uppercase', 'lowercase'];

  return (
    <div className="p-6 text-white bg-[#111] h-full overflow-y-auto">
      <button
        onClick={() => setShowSection('main')}
        className="flex items-center gap-2 mb-6 text-gray-400 hover:text-white transition-colors"
      >
        <ArrowLeft size={20} /> Back to Editor
      </button>

      <h2 className="text-2xl font-bold mb-6">Preview All Formats</h2>

      <div className="grid gap-4">
        {allOptions.map((opt) => (
          <div key={opt} className="border border-white/10 p-4 rounded-lg bg-black/50">
            <span className="text-xs uppercase text-blue-400 font-mono">{opt}</span>
            <pre className="mt-2 text-xl whitespace-pre-wrap break-all font-mono">
              {renderFormattedText(opt, inputTxt)}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
