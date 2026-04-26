import React from 'react';
import { Plus } from 'lucide-react';
import lightbanner from '../assets/lighttestbanner.png';
import darkbanner from '../assets/darktestbanner.png';
import { ASCII_FONTS } from '../data/fonts';
import PreviewFont from '../components/PreviewFont';
import Footer from '../components/Footer';
export default function TestAll({ inputTxt, setShowSection, setShowToast, setOptions, settings }) {
  // this calculates total fonts in array
  const totalFonts = ASCII_FONTS.reduce((acc, group) => acc + group.items.length, 0);
  return (
    <div
      className={`w-full h-screen pb-100 overflow-y-auto relative flex flex-col items-center  transition-colors ${settings.themeToggle ? 'bg-zinc-950' : 'bg-white'}`}
    >
      {/*close btn */}
      <button
        className={`fixed top-63 right-15 z-50 cursor-pointer ${
          settings.themeToggle ? '  text-white' : '  text-black'
        }`}
        onClick={() => setShowSection('main')}
      >
        <Plus className="rotate-45" size={20} />
      </button>

      {/* banner */}
      <div className="w-full max-w-2xl px-6 pt-10 text-center">
        <img
          src={settings.themeToggle ? darkbanner : lightbanner}
          alt="Banner"
          className="w-full h-48 object-contain mb-5"
        />
        <div className="inline-block px-4 py-1 font-outfit mb-4">
          <p className="text-blue-400 text-xs font-medium tracking-tigth uppercase">
            Number of Fonts:&nbsp; {totalFonts} Fonts
          </p>
        </div>
      </div>

      {/* all fonts  */}
      <div className="w-full max-w-full flex flex-col mt-6">
        {ASCII_FONTS.map(group => (
          <React.Fragment key={group.group}>
            <div
              className={`px-4 py-2 text-xs font-black uppercase font-outfit flex items-center gap-1 ${settings.themeToggle ? 'text-white' : 'text-black'} mt-8`}
            >
              Group<span className="relative bottom-[1.5px]">:</span> {group.group}
            </div>

            {group.items.map(font => (
              <PreviewFont
                key={font.value}
                opt={font.value}
                inputTxt={inputTxt}
                setShowToast={setShowToast}
                setOptions={setOptions}
                setShowSection={setShowSection}
                settings={settings}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
      <Footer settings={settings} setShowSection={setShowSection} />
    </div>
  );
}
