import React from 'react'
import { FlaskConical, Info  ,  Settings} from 'lucide-react'

export default function Controls({setShowSection , settings , output}) {
  return (
    <div className=" w-full flex items-center justify-center ">
      <button
        onClick={() => setShowSection('about')}
        className={`flex  flex-col items-center cursor-pointer
        gap-[6px] ${settings.themeToggle === false ? 'hover:bg-white hover:text-black' : 'hover:bg-zinc-800'} p-2 rounded-[8px] transition-colors duration-200`}
      >
        <Info size={17} />

        <span className="text-[14px]">About</span>
      </button>
      <button
        disabled={!output || output.trim() === ''}
        onClick={() => setShowSection('settings')}
        className={`flex flex-col items-center
         gap-[5px] ${settings.themeToggle === false ? 'hover:bg-white hover:text-black' : 'hover:bg-zinc-800'}  p-2 rounded-[8px] transition-colors duration-200 ${!output || output.trim() === '' ? 'cursor-not-allowed opacity-80' : 'opacity-100 cursor-pointer'}`}
      >
        <Settings size={18} />

        <span className="text-[14px]">Settings</span>
      </button>
      <button
        disabled={!output || output.trim() === ''}
        onClick={() => setShowSection('testall')}
        className={`flex flex-col items-center
        gap-[5px] ${settings.themeToggle === false ? 'hover:bg-white hover:text-black' : 'hover:bg-zinc-800'}  p-2 rounded-[8px] transition-colors duration-200 ${!output || output.trim() === '' ? 'cursor-not-allowed opacity-80' : 'opacity-100 cursor-pointer'} `}
      >
        <FlaskConical size={18} />

        <span className="text-[14px]">Test all</span>
      </button>
    </div>
  );
}

