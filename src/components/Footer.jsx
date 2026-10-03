import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
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
      
     className="bg-[#452a1b] text-[#c8bfba] pt-16 pb-8 border-t border-[#c8bfba]/10" dir="rtl">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#c8bfba]/15">
            <div className="space-y-4">
                <h3 className="md:text-3xl  text-4xl font-extrabold text-white tracking-tight">
                    SweetDelight 
                </h3>
                <p className="text-base text-gray-400 leading-relaxed md:w-60">
             وجهتك الأولى لأفخر أنواع الكيك والحلويات الطازجة.<br/> نصنع كل قطعة بحب لتضفي على مناسباتكم أروع البصمات وألذ الأطعم.
            </p>
            </div>

            <div className="space-y-4 md:mr-20">
                <h4 className="text-lg font-bold text-white">روابط سريعة</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a href="#Hero" className="hover:text-white transition-colors">الرئيسية</a>
              </li>
              <li>
                <a href="#Menu" className="hover:text-white transition-colors">قائمة الكيك</a>
              </li>
              <li>
                <a href="#About" className="hover:text-white transition-colors">من نحن</a>
              </li>
              <li>
                <a href="#Contact" className="hover:text-white transition-colors">تواصل معنا</a>
              </li>
            </ul>
            </div>

            <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">تابعنا</h4>
            <p className="text-sm text-gray-400">
              كن على إطلاع بكل جديد وعروضنا الموسمية المميزة.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-10 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-[#f5d061] hover:text-[#3d2314] transition-all text-sm">
                <FaFacebook className="w-7 h-8 text-[#252bd3]" />
              </a>
              <a href="#" className="w-10 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-[#f5d061] hover:text-[#3d2314] transition-all text-sm">
                <FaInstagram className="w-6 h-7 text-white bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]" />
              </a>
              <a href="#" className="w-10 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-[#f5d061] hover:text-[#3d2314] transition-all text-sm">
                <FaXTwitter className="w-6 h-6 text-[#e9e5e5]" />
              </a>
            </div>
            </div>
            </div>

            <div className="pt-8 flex md:text-base flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4 text-center sm:text-right">
          <p>جميع الحقوق محفوظة © 2026 SweetDelight Bakery.</p>
        </div>
        </div>
    </motion.footer>
  )
}

export default Footer