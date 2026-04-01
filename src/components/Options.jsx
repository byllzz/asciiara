
import React from 'react';
import {ASCII_FONTS} from '../data/fonts'

export default function Options({ options, setOptions, setShowSection, settings, output }) {
  const isOutputEmpty = !output || output.trim() === '';

  return (
    <div className="flex flex-col items-start gap-1 w-full font-outfit">
      <label htmlFor="options" className={`text-[11px] uppercase tracking-wider font-medium font-outfit mb-0.5 ${settings.themeToggle === false ? 'text-white' : 'text-white'}`}>
        ASCII Art Font:
      </label>

      <select
        value={options}
        disabled={isOutputEmpty}
        onChange={(e) => {
          setOptions(e.target.value);
          setShowSection('main');
        }}
        id="options"
        className={`w-full border-2 rounded-[5px] p-2.5 transition-all outline-none text-[14px]
          ${settings.themeToggle === false
            ? 'border-zinc-200 bg-white text-zinc-900 focus:border-blue-500'
            : 'border-zinc-800 bg-zinc-900/50 text-white focus:border-blue-600'}
          ${isOutputEmpty ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:border-zinc-500'}`}
      >
        {ASCII_FONTS.map((group) => (
          <optgroup key={group.group} label={group.group} className="bg-zinc-900 text-zinc-400">
            {group.items.map((font) => (
              <option key={font.value} value={font.value} className="text-white bg-zinc-900">
                {font.label}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}
