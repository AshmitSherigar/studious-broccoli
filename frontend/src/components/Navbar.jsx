import React, { useEffect, useState } from 'react'
import useKeySound from '../hooks/useKeySound'

const Navbar = () => {

  return (
    <nav className='h-[8vh] w-full bg-[#1a1a40] flex items-center justify-between'>
      <h1 className='text-[#ff00ff] text-shadow-[0_0_6px_#ff00ff] text-3xl'>TypeStats</h1>

      <div className='text-2xl bg-gradient-to-r from-[#ff00ff] to-[#00ffff] bg-clip-text text-transparent'>00 : 00</div>
      <button className='px-4 py-3 bg-[#131313] rounded-2xl text-[#00ffff] active:scale-95'>Mute</button>

    </nav>
  )
}

export default Navbar