import React, { useState } from 'react';
import Options from './Options';
import TextInput from './TextInput';
import Controls from './Controls';

export default function Header({ inputTxt, setInputText, options, setOptions, setShowSection }) {
  return (
    <div className="flex flex-col items-center w-full max-w-xl rounded-xl p-2 bg-[#111] text-white">
      <h3>Text to ASCII Art Generator: Create ASCII Art from Text</h3>
      <div className="grid grid-cols-2 items-start pt-3 w-full px-2">
        <div className="flex flex-col items-center gap-3">
          <Options options={options} setOptions={setOptions} />
          <Controls setShowSection={setShowSection} />
        </div>
        <TextInput textInput={inputTxt} setInputText={setInputText} />
      </div>
    </div>
  );
}
