import React from 'react'

export default function OutputArea({ output , settings , reff  }) {
  return (
    <div
      ref={reff}
      className="bg-zinc-950 text-white min-h-30  relative flex items-center justify-start pb-2 pt-4 $"
    >
      {settings.watermark && (
        <div className="absolute bottom-2 right-2 text-[10px] text-white">
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
        ""
      )}
    </div>
  );
}
