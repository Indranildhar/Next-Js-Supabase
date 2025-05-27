'use client'
import React from 'react'
import { motion } from 'framer-motion'
export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col md:flex-row bg-gray-900 text-white md:p-20'>
        <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className='text-4xl md:text-6xl font-bold leading-tight'> Hello, I’m <span className='text-indigo-400'>Indranil Dhar</span></h1>
        </motion.div>
      
    </div>
  )
}


