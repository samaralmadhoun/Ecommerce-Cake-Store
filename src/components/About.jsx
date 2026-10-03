import React from 'react'
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section id="About"
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
       
     className="py-16 md:py-50 bg-[#dedbcf]" dir="rtl">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-5 text-right md:mt-40">
            <span className="inline-block text-[#dab755]  py-2.5 mt-20 sm:translate-y-30 md:-translate-y-40 rounded-full text-4xl lg:text-5xl font-bold">
             من نحن..
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl sm:-translate-y-40 md:-translate-y-40 font-extrabold text-[#3d2314] leading-tight">
              نصنع الشغف بحب، لنجعل كل مناسبة ذكرى لا تُنسى
            </h2>
            
            <p className="text-base font-semibold sm:-translate-y-60 sm:text-lg md:-translate-y-40 text-[#3d2314]/80 leading-relaxed">
              بدأنا رحلتنا في عالم الحلويات من شغف حقيقي بتقديم أجود أنواع الكيك المصنوع من مكونات طازجة وفاخرة.
              <br/><br/> نؤمن بأن كل قطعة كيك تحمل قصة فرح، ولذلك نحرص على تقديمها بأعلى معايير الجودة والذوق الرفيع لتناسب أروع لحظاتكم.
            </p>

          </div>

        
          <div className="relative flex justify-center md:mb-20">
            <div className="relative w-full max-w-md bg-white md:-translate-y-20 md:mt-40 p-8 sm:p-6 rounded-3xl shadow-xl border border-[#3d2314]/10">
              
             
              <div className="overflow-hidden rounded-2xl aspect-[3/3] bg-gray-100 mb-8">
                <img 
                  src="cake7.jpg" 
                  alt="" 
                  className="w-full h-full object-cover"/>
              </div>

              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-[#3d2314]">جودة نثق بها، وطعم لا يُقاوم</h3>
                <p className="text-sm text-gray-600">نعمل بكل حب لنرسم البسمة على وجوهكم في كل طلب.</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </motion.section>
  )
}

export default About