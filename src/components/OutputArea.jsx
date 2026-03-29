import React from 'react'

export default function OutputArea({ output }) {
  return (
    <div className="w-full max-w-full h-auto relative right-3">
      {output ? (
        <h1
          className="text-[52px]"
          dangerouslySetInnerHTML={{ __html: output }}
        />
      ) : (
        <h1 className="text-[52px]">...</h1>
      )}
    </div>
  )
}
