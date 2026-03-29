import React, { useState } from 'react'

export default function TextInput({ textInput, setInputText }) {
  return (
    <div className="flex flex-col items-start gap-1">
      <label htmlFor="textInput" className='text-xs'>Input text:</label>
      <textarea
        id="textInput"
        placeholder="Type something cool..."
        value={textInput}
        onChange={e => setInputText(e.target.value)}
        className="placeholder:text-white/40  focus-visible:ring-white/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex field-sizing-content min-h-16 rounded-md border border-zinc-900 bg-zinc-900/40 px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-26 w-58 max-sm:w-42"
      />
    </div>
  );
}

