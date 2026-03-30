import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import MainLayout from './layouts/MainLayout';
import About from './components/About';
import Settings from './components/Settings';
import TestAll from './components/TestAll';
import { renderFormattedText } from './utils/transformers';
import { Plus } from 'lucide-react';

export default function App() {
  const [inputTxt, setInputText] = useState('Type Something cool.');
  const [options, setOptions] = useState('uppercase');

  const [showSection, setShowSection] = useState('main');

  const [showToast, setShowToast] = useState(false);

  // from transformers.js
  let textWithOptions = renderFormattedText(options, inputTxt);
  console.log(typeof textWithOptions);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [showToast]);

  // all settings
  const [settings, setSettings] = useState({
    fontSize: 54,
    mono: true,
    autoCopy: true,
    watermark: false,
    themeToggle: true,
  });


  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (showSection === 'main') {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [showSection]);
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
        output={textWithOptions}
      />
      <div
        className={`${settings.themeToggle ? 'bg-zinc-950' : 'bg-white'} w-full h-full overflow-hidden`}
      >
        {isLoading && (
          <div className=" z-50 flex items-center justify-center bg-inherit backdrop-blur-md animate-in fade-in duration-300 w-full h-full">
            <div className="flex flex-col items-center gap-3">
              {/* Modern CSS Spinner */}
              <div className="w-10 h-10 border-4 border-blue-500/20 border-t-blue-600 rounded-full animate-spin"></div>
              <p className="text-sm font-medium animate-pulse text-white">
                Loading {showSection}...
              </p>
            </div>
          </div>
        )}

        {!isLoading && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            {showSection === 'main' && (
              <MainLayout
                output={textWithOptions}
                setOptions={setOptions}
                setShowToast={setShowToast}
                settings={settings}
              />
            )}
            {showSection === 'about' && (
              <About setShowSection={setShowSection} settings={settings} />
            )}
            {showSection === 'settings' && (
              <Settings
                setShowSection={setShowSection}
                settings={settings}
                setSettings={setSettings}
              />
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
