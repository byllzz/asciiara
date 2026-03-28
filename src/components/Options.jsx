import React from 'react'

export default function Options({options , setOptions}) {
  return (
    <div className="flex flex-col items-start gap-2 w-full pr-4">
      <label htmlFor="options">ASCII Art font:</label>
      <select
        value={options}
        onChange={e => setOptions(e.target.value)}
        id="options"
        className="w-full border rounded-[10px] p-2 bg-black text-white"
      >
        <option value="uppercase">Uppercase</option>
        <option value="lowercase">Lowercase</option>
      </select>
    </div>
  );
}

