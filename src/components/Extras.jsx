import React from 'react'

export default function Extras({ setShowSection }) {
  return (
    <div className="text-white">
      Extras
      <button
        className="border bg-[#111] text-white py-2 px-4 rounded-xl cursor-pointer"
        onClick={() => setShowSection('main')}
      >
        Go to home page
      </button>
    </div>
  );
}

