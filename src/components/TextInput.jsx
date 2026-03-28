import React, { useState } from 'react'

export default function TextInput({ textInput, setInputText }) {
  return (
    <div className="flex flex-col items-start gap-1">
      <label htmlFor="textInput">Input text:</label>
      <textarea
        id="textInput"
        placeholder="Type something cool..."
        value={textInput}
        onChange={e => setInputText(e.target.value)}
        className="h-30 w-full border p-3 text-sm rounded-xl"
      />
    </div>
  );
}

