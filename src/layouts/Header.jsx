import React from 'react';
import Options from '../components/Options';
import TextInput from '../components/TextInput';
import Controls from '../components/Controls';

export default function Header({
  inputTxt,
  setInputText,
  options,
  setOptions,
  setShowSection,
  settings,
  output,
}) {
  // theme colors
  const bgColor = settings.themeToggle
    ? 'bg-zinc-700 border-zinc-700'
    : 'bg-slate-700 border-slate-300';
  const textColor = settings.themeToggle ? 'text-white' : 'text-white';

  return (
    <header
      className={`font-outfit flex flex-col items-center w-full max-w-[525px] rounded-[8px] border  px-4 transition-all duration-500 ${bgColor} ${textColor} shadow-xl`}
    >
      <div className="text-center mb-2 ">
        <h3 className="text-lg font-bold font-outfit tracking-tight">Asciiara Engine</h3>
        <p className="text-[14px] capitalize font-outfit text-slate-200">
          Text to ASCII Art Transformer
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 w-full relative bottom-1">
        {/* left side */}
        <div className="flex flex-col gap-2">
          <Options
            options={options}
            setOptions={setOptions}
            setShowSection={setShowSection}
            settings={settings}
            output={output}
          />
          <Controls setShowSection={setShowSection} settings={settings} output={output} />
        </div>

        {/* right side */}

          <TextInput
            textInput={inputTxt}
            setInputText={setInputText}
            setShowSection={setShowSection}
            settings={settings}
          />
       
      </div>
    </header>
  );
}
