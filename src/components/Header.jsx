import React from 'react';
import Options from './Options';
import TextInput from './TextInput';
import Controls from './Controls';

export default function Header({ inputTxt, setInputText, options, setOptions, setShowSection , settings , output}) {
  return (
    <div className="font-outfit flex flex-col items-center w-full max-w-[485px] rounded-[8px] p-1 pt-2 bg-zinc-700 text-white">
      <h3 className="text-[17px] font-medium">
        Text to ASCII Art Generator: Create ASCII Art from Text
      </h3>
      <div className="grid grid-cols-2 gap-2 justify-between items-start pt-1 w-full px-2">
        <div className="flex flex-col items-center gap-3">
          <Options options={options} setOptions={setOptions} setShowSection={setShowSection} settings={settings} output={output} />
          <div className='relative right-2 bottom-1'>
            <Controls setShowSection={setShowSection} settings={settings} output={output} />
          </div>
        </div>
        <TextInput textInput={inputTxt} setInputText={setInputText} setShowSection={setShowSection} settings={settings} />
      </div>
    </div>
  );
}
