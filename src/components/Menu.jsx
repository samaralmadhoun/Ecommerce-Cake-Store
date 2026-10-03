import React from 'react'
import { motion } from "framer-motion";

function Menu() {

    const cakes = [
    { 
      id: 1, 
      title: 'كيك الشوكولاتة الفاخرة', 
      price: '$30', 
      desc: 'طبقات غنية من الشوكولاتة البلجيكية الداكنة مع صوص الشوكولاتة الذائب.',
      image: '/cake1.jpg'
    },
    { 
      id: 2, 
      title: 'كيك الفراولة ', 
      price: '$20', 
      desc: 'كريمة خفيفة وفانيليا طازجة مع قطع الفراولة الحمراء الطبيعية.',
      image: '/cake2.jpg'
    },
    { 
      id: 3, 
      title: 'كيك أعياد الميلاد ', 
      price: '$35', 
      desc: 'تصميم خاص حسب طلبك وبنكهتك المفضلة لتناسب كافة مناسباتكم السعيدة.',
      image: '/cake3.jpg'
    },
    {
      id: 4, 
      title: 'كيك الفراولة والتوت', 
      price: '$25', 
      desc: 'كريمة خفيفة وفانيليا طازجة مع قطع الفراولة والتوت الطبيعي.',
      image: '/cake4.jpg'
    },
    {
      id: 5, 
      title: ' رول كيك ', 
      price: '$18', 
      desc: 'رول كيك المخمل الأحمر مع كريمة الجبن.',
      image: '/cake5.jpg'
    },
    {
      id: 6, 
      title: ' كيك الكراميل', 
      price: '$25', 
      desc: 'طبقات إسفنجية غارقة في صوص الكراميل',
      image: '/cake6.jpg'
    },
  ];

  return (
    <motion.section id="Menu" 
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

    className="py-20 lg:px-20 bg-[#faf6f0] min-h-[100vh] text-right" dir="rtl">
        <div className="max-w-6xl mx-auto mt-5 space-y-28">
            <div className="text-center ">
                <span className=" text-[#a16207] rounded-full mb-3 mt-10 text-3xl md:text-5xl font-bold inline-block">
                     أجود أنواع الكيك والحلويات
                </span>
                   <p className="text-gray-600 text-xl md:text-2xl max-w-lg -mb-16 mx-auto">لأن لحظاتك الجميلة تستحق الأفضل دائماً</p>
                   </div>


            <div className=" fade-up grid grid-cols-1 p-5 md:p-15 md:grid-cols-3 gap-8">
             {cakes.map((cake) => (

                <div key={cake.id} className="bg-white transform transition-all hover:scale-[1.02] rounded-2xl p-11 md:p-7 shadow-md hover:shadow-xl border flex flex-col justify-between group">
                <div>
              
                <div className="fade-up w-full h-70 rounded-xl mt-3 flex items-center justify-center text-4xl transition-transform">
                  <img 
                    src={cake.image} 
                    alt={cake.title} 
                    className="w-full h-full object-cover" />
                </div>
                
                <h3 className="text-xl font-bold text-[#3d2314] mt-4">{cake.title}</h3>
                <p className="text-gray-600 text-sm mb-6 mt-4 leading-relaxed">{cake.desc}</p>
              </div>

          
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xl font-extrabold text-[#4a2e1b]">{cake.price}</span>
                <a href="#contact" className="bg-[#3d2314] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#5c3a23] transition-colors shadow-sm">
                  اطلب الآن
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Menu