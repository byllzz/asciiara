import React, { useState } from 'react';
import optionsbanner from '../assets/options.png';
import { Info, Plus, RotateCcw } from 'lucide-react';
import { BsGithub } from 'react-icons/bs';

const SettingItem = ({ id, title, description, infoText, children, showInfo, onToggleInfo }) => {
  const isActive = showInfo === id;

  return (
    <div className="flex flex-col gap-4 p-2 rounded-xl transition-all">
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex-1">
          <p className="font-medium text-white text-base">{title}</p>
          <p className="text-xs text-zinc-400 leading-relaxed">{description}</p>
        </div>

        <div className="flex items-center gap-3">
          {children}

          {/* info button */}
          <button
            onClick={() => onToggleInfo(id)}
            className={`flex items-center justify-center rounded-[8px] h-[40px] w-[40px] transition-all cursor-pointer border
              ${isActive
                ? 'border-blue-500 bg-blue-900/30 text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.2)]'
                : 'border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-400 hover:text-white'}`}
          >
            <Info size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Info Panel */}
      {isActive && (
        <div className="bg-blue-950/40 text-blue-100 py-3 px-4 rounded-lg border border-blue-500/30 w-full animate-in fade-in slide-in-from-top-2 duration-300">
          <p className="text-sm leading-relaxed">
            <span className="font-bold text-blue-400">Note:</span> {infoText}
          </p>
        </div>
      )}
    </div>
  );
};

export default function Settings({ setShowSection }) {
  const [showInfo, setShowInfo] = useState('');

  // click logic on infoBtn
  const handleToggleInfo = (id) => {
    setShowInfo((prev) => (prev === id ? '' : id));
  };

  // data
   const data = [
      {
        id: 1, href : 'https://github.com/byllzz' ,  icon: <BsGithub />
      }
    ];

  return (
    <div className="w-full h-137 overflow-y-auto relative text-white flex flex-col items-center py-4 bg-transparent scroll-smooth">
      {/* Close Button */}
      <button
        className="text-zinc-300 rounded-full cursor-pointer fixed top-53 right-10 z-50"
        onClick={() => setShowSection('main')}
      >
        <Plus className="rotate-45" size={20} />
      </button>

      {/* Banner */}
      <div className="flex flex-col items-center w-full max-w-xl px-6 pt-5">
        <img
          src={optionsbanner}
          alt="Asciiara Settings Banner"
          loading="lazy"
          draggable="false"
          className="w-full h-auto object-cover max-h-[250px] mb-10 select-none "
        />
      </div>

      {/* Main Settings Container */}
      <div className="w-full max-w-xl px-6 space-y-12 pb-32 font-outfit">
        {/*sec-1 */}
        <section className="space-y-6">
          <h3 className="text-[11px] text-center text-zinc-500 uppercase tracking-[0.2em] font-black">
            Editor Experience
          </h3>

          <SettingItem
            id="fontSize"
            title="Font Size"
            description="Adjust the preview text scale"
            infoText="Higher values (24px+) are great for visual checking, while 16px is standard for Discord/GitHub exports."
            showInfo={showInfo}
            onToggleInfo={handleToggleInfo}
          >
            <input
              type="range"
              min="12"
              max="54"
              defaultValue="18"
              className="w-32 appearance-none bg-transparent cursor-pointer
                [&::-webkit-slider-runnable-track]:h-[6px]
                [&::-webkit-slider-runnable-track]:rounded-full
                [&::-webkit-slider-runnable-track]:bg-white/20
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:h-[16px]
                [&::-webkit-slider-thumb]:w-[16px]
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-blue-500
                [&::-webkit-slider-thumb]:mt-[-5px]
                "
            />
          </SettingItem>

          <SettingItem
            id="mono"
            title="Monospace Editor"
            description="Force fixed-width font alignment"
            infoText="ASCII Art requires monospace fonts to keep characters perfectly aligned. Turning this off may 'break' complex art."
            showInfo={showInfo}
            onToggleInfo={handleToggleInfo}
          >
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-zinc-800 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5"></div>
            </label>
          </SettingItem>
        </section>

        {/* sec-2 */}
        <section className="space-y-6">
          <h3 className="text-[11px] text-center text-zinc-500 uppercase tracking-[0.2em] font-black">
            Export & Workflow
          </h3>

          <SettingItem
            id="autoCopy"
            title="Auto-Copy on Export"
            description="Copy to clipboard when saving image"
            infoText="Enabling this will automatically put the raw text into your clipboard the moment you hit the 'Save Image' button."
            showInfo={showInfo}
            onToggleInfo={handleToggleInfo}
          >
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-zinc-800 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5"></div>
            </label>
          </SettingItem>

          <SettingItem
            id="watermark"
            title="Include Watermark"
            description="Add a small brand tag to images"
            infoText="This adds 'Generated via Asciiara' to the bottom right of your PNG exports. Great for supporting the project!"
            showInfo={showInfo}
            onToggleInfo={handleToggleInfo}
          >
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-zinc-800 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5"></div>
            </label>
          </SettingItem>
        </section>

        {/* FOOTER */}
        <footer className="pt-10 border-t border-zinc-900 flex flex-col items-center gap-6">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm hover:text-red-400 hover:border-red-900/50 transition-all cursor-pointer group">
            <RotateCcw size={16} className="group-hover:rotate-[-90deg] transition-transform" />
            Reset Defaults
          </button>

          <div className="text-center space-y-1">
            <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-[0.3em]">
              Asciiara Engine v1.0.4
            </p>
            <p className="text-[9px] text-zinc-700 font-mono uppercase">
              Handcrafted for the 2026 Web
            </p>
          </div>
        </footer>

        <section className="pt-4 mt-6 flex flex-col items-center justify-center">
          {data.map(item => {
            const IconComponent = item.icon;
            return (
              <ul className="flex items-center justify-center gap-3">
                <li key={item.id}>
                  <a href={item.href} className="text-2xl hover:brightness-150">
                    {IconComponent}
                  </a>
                </li>
              </ul>
            );
          })}

          <button
            onClick={()=> setShowSection('main')}
            className="flex items-center justify-center text-[14px] gap-2 border rounded-[8px] py-[5px] px-4 transition-all relative top-10  border-zinc-800 bg-zinc-950 text-zinc-200 cursor-pointer"
          >
            Done
          </button>
        </section>
      </div>
    </div>
  );
}
