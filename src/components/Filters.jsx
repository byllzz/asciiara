
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

          <optgroup label="── Color">
            <option value="chromostereopsis1">Chromostereopsis 1</option>
            <option value="chromostereopsis2">Chromostereopsis 2</option>
            <option value="rainbow1">Rainbow 1</option>
            <option value="rainbow2">Rainbow 2</option>
            <option value="rainbow3">Rainbow 3</option>
            <option value="gold">Gold</option>
            <option value="fire">Fire</option>
            <option value="cyanMagenta">Cyan Magenta</option>
            <option value="matrix">Matrix</option>
          </optgroup>

          <optgroup label="── Flip">
            <option value="flipVertically">Flip Vertically</option>
            <option value="flipHorizontally">Flip Horizontally</option>
            <option value="flip">Flip Both</option>
          </optgroup>

          <optgroup label="── Style">
            <option value="sleek">Sleek</option>
            <option value="bold">Bold</option>
            <option value="italic">Italic</option>
            <option value="strike">Strikethrough</option>
            <option value="underline">Underline</option>
          </optgroup>

          <optgroup label="── Code Comments">
            <option value="bashComment">Bash</option>
            <option value="cComment">C</option>
            <option value="cppComment">C++</option>
            <option value="fortranComment">Fortran</option>
            <option value="mysqlComment">MySQL</option>
            <option value="shellEcho">Shell Echo</option>
            <option value="vbComment">Visual Basic</option>
            <option value="pythonDoc">Python Docstring</option>
            <option value="htmlComment">HTML Comment</option>
            <option value="yamlComment">YAML Comment</option>
            <option value="jsonWrap">JSON Wrap</option>
            <option value="sqlPrint">SQL Print</option>
            <option value="luaComment">Lua Comment</option>
            <option value="rubyComment">Ruby Comment</option>
          </optgroup>
        </select>
      </div>
    </div>
  );
}




