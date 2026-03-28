import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import MainLayout from './layouts/MainLayout';
import About from './components/About'
import Extras from './components/Extras';
import TestAll from './components/TestAll';
import {renderFormattedText} from './utils/transformers'

export default function App() {
  const [inputTxt, setInputText] = useState('Type Something cool.');
  const [options, setOptions] = useState("uppercase");

  const [showSection , setShowSection] = useState("main");



  // from transformers.js
let textWithOptions = renderFormattedText(options , inputTxt);
console.log(typeof textWithOptions);

  return (
    <div className="flex flex-col items-center border w-full h-screen pt-2">
      <Header
        inputTxt={inputTxt}
        setInputText={setInputText}
        options={options}
        setOptions={setOptions}
        setShowSection={setShowSection}
      />
      <div className="bg-black w-full h-full">
        {showSection === 'main' && (
          <MainLayout output={textWithOptions} setOptions={setOptions} />
        )}
        {showSection === 'about' && <About setShowSection={setShowSection} />}
        {showSection === 'extrasOptions' && <Extras setShowSection={setShowSection} />}
        {showSection === 'testall' && <TestAll setShowSection={setShowSection} inputTxt={inputTxt} />}
      </div>
    </div>
  );
}
