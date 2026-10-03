import React from 'react'
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section id="Hero" 
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
      
     className="relative fade-up text-white min-h-[100vh] py-28 px-6 lg:px-20 ">
        <div className=" h-auto mx-auto ">
       <img 
        src="/cake.jpg" 
        alt="SweetDelight Cake" 
        className="absolute inset-0 w-full h-full object-cover object-center "/>
      </div>
    <div className="absolute inset-0 bg-[#3d2314]/70 backdrop-brightness-40"></div>




   <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        
        <h1 className="text-[40px] mr-6 sm:text-5xl lg:text-7xl md:text-10xl translate-y-28 md:mt-6 mt-14 font-extralight text-end md:-mr-10 md:mb-40 text-[#fcd04e]">
          طعم السعادة في كل قطعة كيك
        </h1>

        <p className="text-gray-100 text-lg  ml-16 w-60 font-medium translate-y-28 md:translate-y-1 md:w-auto md:-mr-9 md:text-4xl text-end">
          نصنع لك أروع أنواع الكيك والحلويات
         لجميع مناسباتك السعيدة
        </p>

        <div className="pt-4 flex justify-start md:justify-end">
          <button className="bg-[#f5d061] text-[#3d2314] px-6 py-3 -ml-60 rounded-xl  md:mt-10 text-xl font-bold translate-y-40 translate-x-[410px] md:translate-x-[40px] md:translate-y-[30px] text-start hover:bg-[#c8bfba] transition-all shadow-2xl">
            تصفح القائمة
          </button>
        </div>
      </div>
    </motion.section>
  )
}

export default Hero