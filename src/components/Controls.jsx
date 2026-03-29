import React from 'react'
import { FlaskConical, Info  ,  Settings} from 'lucide-react'

export default function Controls({setShowSection}) {
  return (
    <div className=" w-full flex items-center justify-center ">
      <button
        onClick={() => setShowSection('about')}
        className="flex  flex-col items-center cursor-pointer
        gap-[6px] hover:bg-zinc-800 p-2 rounded-[8px] transition-colors duration-200"
      >
        <Info size={17} />

        <span className="text-[14px]">About</span>
      </button>
      <button
        onClick={() => setShowSection('extrasOptions')}
        className="flex flex-col items-center cursor-pointer
         gap-[5px] hover:bg-zinc-800 p-2 rounded-[8px] transition-colors duration-200 "
      >
        <Settings size={18} />

        <span className="text-[14px]">Options</span>
      </button>
      <button
        onClick={() => setShowSection('testall')}
        className="flex flex-col items-center cursor-pointer
        gap-[5px] hover:bg-zinc-800 p-2 rounded-[8px] transition-colors duration-200 "
      >
        <FlaskConical size={18} />

        <span className="text-[14px]">Test all</span>
      </button>
    </div>
  );
}

