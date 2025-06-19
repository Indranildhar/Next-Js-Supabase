'use client'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';
function Navbarv2() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-cyberpunk-white-glass'>
        <div className='flex items-center justify-between'>
            <h1 className='text-lg font-bold tracking-widest text-white uppercase'>CyberPort</h1>
            <ul className='hidden'>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>

            <div className='md:hidden'>
                <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}


                </button>

            </div>


        </div>
    </nav>
  )
}

export default Navbarv2
