import React, { useState, useEffect } from 'react';
import Header from './layouts/Header';
import MainLayout from './layouts/MainLayout';
import About from './sections/About';
import Settings from './sections/Settings';
import TestAll from './sections/TestAll';
import { renderFormattedText } from './utils/transformers';
import { Plus } from 'lucide-react';

// useLocalStorage hook
import useLocalStorage from './hooks/useLocalStorage';

export default function App() {
  // saving to local storage all settings
  const [settings, setSettings] = useLocalStorage('asciiara_settings', {
    fontSize: 54,
    mono: true,
    autoCopy: true,
    watermark: false,
    themeToggle: true,
  });

  const [inputTxt, setInputText] = useLocalStorage('asciiara_draft', 'Type Something cool.');
  const [options, setOptions] = useLocalStorage('asciiara_last_filter', 'uppercase');

  // all states
  const [showSection, setShowSection] = useLocalStorage('asciiara_section', 'main');
  const [filters, setFilters] = useLocalStorage('asciiara_filters', 'none');
  const [showToast, setShowToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);




  // transforming text based on selected options
  let textWithOptions = renderFormattedText(options, inputTxt);

  // toast
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  // loading animation time
  useEffect(() => {
    if (showSection === 'main') {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, [showSection]);

  return (
    <div
      className={`flex flex-col items-center w-full h-screen pt-2 gap-2 overflow-hidden relative transition-colors duration-500 ${
        settings.themeToggle ? 'bg-zinc-800' : 'bg-zinc-200'
      }`}
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
        className={`w-full h-full overflow-hidden transition-colors duration-500 ${
          settings.themeToggle ? 'bg-zinc-950' : 'bg-white'
        }`}
      >
        {/* loading  */}
        {isLoading && (
          <div className="z-50 flex items-center justify-center bg-inherit backdrop-blur-md animate-in fade-in duration-300 w-full h-full">
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 border-4 border-blue-500/20 border-t-blue-600 rounded-full animate-spin"></div>
              <p
                className={`text-sm font-medium animate-pulse ${!settings.themeToggle ? 'text-black' : 'text-white'}`}
              >
                Initialising {showSection}...
              </p>
            </div>
          </div>
        )}

        {/* all section  */}
        {!isLoading && (
          <div className="h-full animate-in fade-in slide-in-from-bottom-2 duration-500">
            {showSection === 'main' && (
              <MainLayout
                output={textWithOptions}
                setOptions={setOptions}
                setShowToast={setShowToast}
                settings={settings}
                filters={filters}
                setFilters={setFilters}

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

      {/* the toast */}
      {showToast && (
        <div className="fixed bottom-5 right-8 bg-white border border-zinc-200 shadow-2xl text-[14px] text-black py-3 px-6 rounded-xl z-[999] animate-in slide-in-from-right-5 duration-300">
          <button
            className="absolute -top-2 -left-2 bg-red-600 h-6 w-6 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
            onClick={() => setShowToast(false)}
          >
            <Plus size={16} className="rotate-45 text-white" />
          </button>
          <h3 className="font-outfit font-medium">🤷‍♂️ Copied to clipboard!</h3>
        </div>
      )}
    </div>
  );
}
