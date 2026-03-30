import React from 'react'

export default function Options({options , setOptions , setShowSection , settings , output}) {
  return (
    <div className="flex flex-col items-start gap-1 w-full">
      <label htmlFor="options" className="text-xs">
        ASCII Art font:
      </label>
      <select
        value={options}
        disabled={!output || output.trim() === ''}
        onChange={e => {
          setOptions(e.target.value);
          setShowSection('main');
        }}
        id="options"
        className={`w-full border rounded-[4px] p-2
          ${settings.themeToggle === false ? 'border-zinc-400 bg-white text-black' : 'border-zinc-900 bg-zinc-900/40 text-white'}  text-[14px] ${!output || output.trim() === "" ? 'cursor-not-allowed opacity-80' : "cursor-auto opacity-100"}`}
      >
        <option value="uppercase">Uppercase</option>
        <option value="lowercase">Lowercase</option>
        <option value="sort">Sort</option>
      </select>
    </div>
  );
}

