import React from 'react'

export default function About({setShowSection}) {
  return (
    <div className='text-white'>About

 <button className='border bg-[#111] text-white py-2 px-4 rounded-xl cursor-pointer' onClick={() => setShowSection("main")}>Go to home page</button>
    </div>
  )
}

