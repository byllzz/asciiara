import React from 'react';
import { useState , useEffect } from 'react';
import Header from './components/Header';
import MainLayout from './layouts/MainLayout';
import About from './components/About'
import Settings from './components/Settings';
import TestAll from './components/TestAll';
import { renderFormattedText } from './utils/transformers'
import { Plus } from 'lucide-react';

export default function App() {
  const [inputTxt, setInputText] = useState('Type Something cool.');
  const [options, setOptions] = useState("uppercase");

  const [showSection , setShowSection] = useState("main");


  const [showToast, setShowToast] = useState(false);




  // from transformers.js
let textWithOptions = renderFormattedText(options , inputTxt);
  console.log(typeof textWithOptions);


  useEffect(() => {
  const timer =   setTimeout(() => {
      setShowToast(false);
  }, 5000);

  return () => clearTimeout(timer)

  }, [showToast])



  // all settings
  const [settings, setSettings] = useState({
    fontSize: 54,
    mono: true,
    autoCopy: true,
    watermark: false,
    themeToggle: true,
  });

  return (
    <div
      className={`${settings.themeToggle === false ? 'bg-zinc-400' : 'bg-zinc-800'} flex flex-col items-center border w-full h-screen pt-2 gap-2 overflow-hidden relative`}
    >
      <Header
        inputTxt={inputTxt}
        setInputText={setInputText}
        options={options}
        setOptions={setOptions}
        setShowSection={setShowSection}
        settings={settings}
      />
      <div
        className={`${settings.themeToggle ? 'bg-zinc-950' : 'bg-white'} w-full h-full overflow-hidden`}
      >
        {showSection === 'main' && (
          <MainLayout
            output={textWithOptions}
            setOptions={setOptions}
            setShowToast={setShowToast}
            settings={settings}
          />
        )}
        {showSection === 'about' && <About setShowSection={setShowSection} settings={settings} />}
        {showSection === 'settings' && (
          <Settings setShowSection={setShowSection} settings={settings} setSettings={setSettings} />
        )}
        {showSection === 'testall' && (
          <TestAll
            setShowSection={setShowSection}
            inputTxt={inputTxt}
            setShowToast={setShowToast}
            setOptions={setOptions}
            settings={settings}
          />
        )}
      </div>

      {showToast && (
        <div className="absolute bottom-5 right-8 bg-white text-[14px] text-black py-2 px-5 rounded-[5px] z-999">
          <button
            className="absolute -top-2 -left-2 bg-[#ff0000] h-5 w-5 rounded-full flex items-center justify-center font-bold cursor-pointer"
            onClick={() => {
              setShowToast(false);
            }}
          >
            <Plus size={15} className="rotate-45 text-white" />
          </button>
          <h3 className="font-outfit">Text was copied to clipboard!</h3>
        </div>
      )}
    </div>
  );
}
