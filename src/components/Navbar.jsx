import React from 'react'
import { useState } from 'react';
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
    initial={{ 
          opacity: 0,
          y: 50 
      }}
      whileInView={{
         opacity: 1,
         y: 0
      }}
      viewport={{
         once: true,
         amount: 0.2 
      }}
      transition={{
        duration: 1.5,
        ease: "easeOut" 
      }}
      
     className="fixed w-full bg-[#c8bfba] text-brown-200 py-4 px-6 lg:px-16 flex items-center justify-between shadow-md top-0 z-50" dir="rtl">
      <div className="flex items-center gap-2">
        <a className="tracking-tight font-black cursor-pointer mr-10 text-4xl text-[#3d2314]">SweetDelight</a>
      </div>

      <nav className="hidden md:flex items-center gap-10 text-lg font-medium cursor-pointer">
        <a href='#Hero' className="hover:text-[#3d2314] hover:underline transition-colors">الرئيسية</a>
        <a href='#Menu' className="hover:text-[#3d2314] hover:underline transition-colors">قائمة الكيك</a>
        <a href='#About' className="hover:text-[#3d2314] hover:underline transition-colors">من نحن</a>
        <a href='#Contact' className="hover:text-[#3d2314] hover:underline transition-colors">تواصل معنا</a>
      </nav>

      <div>
        <a className="bg-[#f5d061] hidden md:flex text-[#3d2314] cursor-pointer px-5 py-2.5 ml-7 text-lg rounded-2xl font-semibold hover:bg-yellow-400 transition-all shadow-sm">
          اطلب الآن 🎂
        </a>
      </div>

      <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-[#3d2314] focus:outline-none p-2 rounded-lg hover:bg-black/5 transition-colors"
        >
          {isOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>


        {isOpen && (
        <div className="fixed inset-x-0 top-[72px] w-72 bg-[#c8bfba] border-t border-[#3d2314]/10 px-6 py-8 flex flex-col animate-fadeIn transition-all duration-500 ease-in-out animate-fadeIn space-y-6 shadow-2xl md:hidden h-screen z-50  ">
          <a href='#Hero' onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition-colors pb-3 border-b border-[#3d2314]/10 text-xl font-medium">الرئيسية</a>
          <a href="#Menu" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition-colors pb-3 border-b border-[#3d2314]/10 text-xl font-medium">قائمة الكيك</a>
          <a href="#About" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition-colors pb-3 border-b border-[#3d2314]/10 text-xl font-medium">من نحن</a>
          <a href="#Contact" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition-colors pb-3 border-b border-[#3d2314]/10 text-xl font-medium">تواصل معنا</a>
          <a href="#Contact" onClick={() => setIsOpen(false)} className="bg-[#f5d061] hover:bg-[#928c89] text-[#3d2314] text-center py-2.5 rounded-xl font-bold text-lg shadow-md mt-4">
            اطلب الآن 🎂
          </a>
        </div>
      )}
    </motion.header>
  )
}

export default Navbar