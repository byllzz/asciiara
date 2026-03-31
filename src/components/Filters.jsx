
import React from 'react'
export default function Filters({ filters, setFilters, settings, output }) {

  const handleSelectChange = (e) => {
    setFilters(e.target.value);
  };

  const isOutputEmpty = !output || output.trim() === '';

  return (
    <div className="flex flex-row gap-2 items-center gap-4 mt-2">
      <div className="flex flex-col items-start gap-1">
        <label
          htmlFor="textFilters"
          className={`text-[12px] relative left-1 ${
            settings.themeToggle === false ? 'text-black' : 'text-white'
          }`}
        >
          Filters:
        </label>
        <select
          id="textFilters"
          value={filters || 'none'}
          onChange={handleSelectChange}
          disabled={isOutputEmpty}
          className={`border rounded-[7px] px-3 py-2 outline-none transition-all ${
            settings.themeToggle === false
              ? 'border-zinc-950/20 border-2 font-semibold bg-white text-black'
              : 'border-zinc-800 text-white bg-zinc-950'
          } ${isOutputEmpty ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <option value="none">None</option>
          <option value="chromostereopsis1">Chromostereopsis 1</option>
          <option value="chromostereopsis2">Chromostereopsis 2</option>
          <option value="flipVertically">Flip Vertically</option>
          <option value="flipHorizontally">Flip Horizontally</option>
          <option value="flip">Flip</option>
          <option value="rainbow1">Rainbow 1</option>
          <option value="rainbow2">Rainbow 2</option>
          <option value="rainbow3">Rainbow 3</option>
          <option value="sleek">Sleek</option>
          <option value="bashComment">Bash style comment</option>
          <option value="cComment">C style comment</option>
          <option value="cppComment">C++ style comment</option>
          <option value="fortranComment">Fortran style comment</option>
          <option value="mysqlComment">MySQL style comment</option>
          <option value="shellEcho">Shell Echo Commands</option>
          <option value="vbComment">Visual Basic style comment</option>
        </select>
      </div>
    </div>
  );
}




