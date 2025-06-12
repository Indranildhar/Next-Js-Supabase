'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { SiSupabase } from 'react-icons/si'
import { PiUserCircleCheckFill } from "react-icons/pi";

function Navbar() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <nav className='bg-white/30 backdrop-blur-md w-full sticky top-0 start-0 z-20 shadow-sm'>
      <div className='max-w-screen-xl mx-auto flex items-center justify-between p-4'>
          <ul className='flex items-center justify-start '>
            <li className='flex items-center justify-start gap-2 '>
              <SiSupabase className="text-4xl text-green-700" />
              <p className="text-neutral-100 text-xl font-medium">Supabase</p>
            </li>
          </ul>

          <ul className='flex items-center gap-4'>
            <li>
              
              <Link className='cursor-pointer hover:underline text-xl text-medium text-blue-300' href={'/login'}>login</Link>
            </li>

            {!isLogin.login && (
                <div className="flex lg:ps-4 cursor-pointer gap-2" 
                // onClick={() => setShowLoginModal(true)}
                >
                   <FaUserCircle className="w-7 h-7"/> 
                </div>
              )}
              
              
              {/* <div className="lg:ps-4 cursor-pointer">
                <FaUserCheck className="w-7 h-7"/>
              </div> */}
              {isLogin.login && (
                <div className="flex lg:ps-4 cursor-pointer gap-2">
                  <PiUserCircleCheckFill className="w-8 h-8"/> <span className="cantolight capitalize content-end leading-5">hi, 
                    {/* {isLogin.userName}  */}
                    </span>
                </div>
              )}
          </ul>
      </div>
      
    </nav>
  )
}

export default Navbar
