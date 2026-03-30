import React from 'react'

export default function OutputArea({ output , settings , reff  }) {
  return (
    <div
      ref={reff}
      className={`${settings.themeToggle === false ? 'bg-white text-black ' : 'bg-zinc-950 text-white '} min-h-30 w-full relative flex items-center justify-start pb-2 pt-4 pr-5`}
    >
      {settings.watermark && (
        <div className="absolute bottom-2 right-2 text-[10px] text-white w-full">
          <p>Generated via Asciiara</p>
        </div>
      )}
      {output ? (
        <h1
          style={{ fontSize: `${settings.fontSize}px` }}
          className="relative bottom-2 left-2.5"
          dangerouslySetInnerHTML={{ __html: output }}
        />
      ) : (
        ''
      )}
    </div>
  );
}
