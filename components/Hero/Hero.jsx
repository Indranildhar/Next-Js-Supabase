'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col md:flex-row bg-gray-900 text-white md:p-20'>
        <motion.div
            className="flex-1 space-y-6 px-6 py-10 border border-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* <h1 className='text-4xl md:text-7xl font-bold leading-tight'> Hello, I’m <span className='text-indigo-400'></span></h1> */}
        </motion.div>

        <motion.div
          className="flex-1 mt-20 md:mt-0 flex justify-center border border-red-500 relative md:py-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className='w-64 h-64 md:w-80 md:h-80 xl:w-[500px] xl:h-[500px] rounded-full bg-yellow-500 overflow-hidden relative ring-4 ring-white'>
            

          </div>

          <div className='w-[300px] h-[450px]  md:w-[512px] md:h-[720px] absolute  -translate-y-[10%] bottom-0 '>
            <Image
              src={'/image/hero.png'}
              fill
              sizes="(max-width: 992px) 80vw, 90vw"
              // objectFit="cover"
              className='h-auto w-100'
            />
          </div>
          
          
        </motion.div>
      
    </div>
  )
}


