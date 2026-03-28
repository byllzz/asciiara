import React from 'react'
import { Info  , Option} from 'lucide-react'

export default function Controls({setShowSection}) {
  return (
    <div className=" w-full flex items-center justify-center gap-4">
      <button
        onClick={() => setShowSection('about')}
        className="flex flex-col items-center cursor-pointer "
      >
        <span>
          <Info />
        </span>
        About
      </button>
      <button
        onClick={() => setShowSection('extrasOptions')}
        className="flex flex-col items-center cursor-pointer "
      >
        <span>
          <Option />
        </span>
        Options
      </button>
      <button
        onClick={() => setShowSection('testall')}
        className="flex flex-col items-center cursor-pointer "
      >
        <span>
          <Info />
        </span>
        Test all
      </button>
    </div>
  );
}

