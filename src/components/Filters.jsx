
import React, { useState } from 'react'

export default function Filters({ filters, setFilters, setShowBtn }) {
  const handleSelectChange = e => {
    const selectedValue = e.target.value;
    setFilters(selectedValue);

    if (selectedValue === 'none') {
      setShowBtn(false);
    } else {
      setShowBtn(true);
    }
  };

  return (
    <div className="flex flex-row gap-2 items-center gap-4">
      <div className="flex flex-col items-start gap-2">
        <label htmlFor="textFilters">Filters:</label>
        <select
          value={filters || 'none'}
          onChange={handleSelectChange}
          id="textFilters"
          className=" border border-white/70 rounded-[7px] py-1 px-2 w-40 bg-[#111] outline-none text-white"
          defaultValue="none"
        >
          <option value="none">None</option>
          <option value="reverse">reverse</option>
        </select>
      </div>
    </div>
  );
}

