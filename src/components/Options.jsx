import React from 'react'

export default function Options({options , setOptions}) {
  return (
    <div className="flex flex-col items-start gap-1 w-full">
      <label htmlFor="options" className="text-xs">
        ASCII Art font:
      </label>
      <select
        value={options}
        onChange={e => setOptions(e.target.value)}
        id="options"
        className="w-full border rounded-[4px] p-2 border-zinc-900 bg-zinc-900/40 text-white text-[14px]"
      >
        <option value="uppercase">Uppercase</option>
        <option value="lowercase">Lowercase</option>
      </select>
    </div>
  );
}

