import React from 'react'
import optionsbanner from '../assets/options.png'
import { Plus } from 'lucide-react';
export default function Extras({ setShowSection }) {
  return (
    <div className="w-full h-150 overflow-y-auto relative text-white flex flex-col items-center py-4">
      <button
        className="text-zinc-300 rounded-full cursor-pointer  fixed top-53 right-10"
        onClick={() => setShowSection('main')}
      >
        <Plus className="rotate-45" size={20} />
      </button>

      <img src={optionsbanner} alt="about/faqs banner" />
    </div>
  );
}

