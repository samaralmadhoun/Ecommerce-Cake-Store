import React, { useState } from 'react';
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { AlarmClock } from "lucide-react";
import { motion } from "framer-motion";

function Contact() {
  const [sent, setSent] = useState(false);
  const [phone, setPhone] = useState("");

  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <motion.section id="Contact"
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
      
     className="py-40 bg-[#c8bfba]/20" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-20 md:mt-10 space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#3d2314]">
            اطلب كيكتك المميزة الآن
          </h2>
          <p className="text-base w-70 mr-2 md:mr-15 md:text-xl sm:text-lg text-gray-700">
           لديك استفسار، مناسبة خاصة، أو تريد طلب تصميم معين؟ اترك لنا رسالتك وسنرد عليك فوراً.
          </p>
        </div>


        <div className="fade-up grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          <div className="lg:col-span-5 bg-[#674b3d] p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <p className="text-md md:text-xl sm:text-base text-gray-100 leading-relaxed">
                نسعد بزيارتكم أو تواصلكم معنا لأي استفسار أو طلب خاص.
              </p>

              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <span className="text-2xl"><MapPin className="w-6 h-15 text-gray-200" /></span>
                  <div>
                    <h4 className="text-md md:text-base text-[#f5d9c9] font-bold">العنوان</h4>
                    <p className="text-white md:text-base text-sm font-medium mt-0.3">شارع الحلويات الرئيسي، بجوار الميدان</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <span className="text-2xl"><Phone className="w-6 h-15 text-gray-200" /></span>
                  <div>
                    <h4 className="text-md text-[#f5d9c9] md:text-base font-bold">رقم الهاتف</h4>
                    <p className="text-white md:text-base text-sm font-medium mt-0.3" dir="ltr">+970 000 000</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <span className="text-2xl"><AlarmClock className="w-6 h-15 text-gray-200" /></span>
                  <div>
                    <h4 className="text-md md:text-base text-[#f5d9c9] font-bold">ساعات العمل</h4>
                    <p className="text-white text-sm md:text-base font-medium mt-0.3">يومياً من 9 صباحاً حتى 10 مساءً</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-xs text-gray-400 text-center">
              SweetDelight Bakery © 2026
            </div>
          </div>

         
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-[#3d2314]/10 flex flex-col justify-center">
            {sent ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-20 h-20 bg-[#f5d061] text-[#3d2314] rounded-full flex items-center justify-center text-4xl mx-auto shadow-md">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-[#3d2314]">تم إرسال طلبك بنجاح..</h3>
                <p className="text-gray-600">شكراً لانضمامك لعائلة SweetDelight، سنتواصل معك قريباً .</p>
                <button 
                  onClick={() => setSent(false)}
                  className="mt-6 bg-[#c8bfba] text-[#3d2314] px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#c8bfba]/70 transition-all">
                  إرسال طلب جديد
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="fade-up grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-md md:text-base mr-2 md:mr-2 font-bold text-[#3d2314] mb-2 tracking-wider">الاسم الكامل</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="اكتب اسمك هنا" 
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#c8bfba]/10 border border-[#3d2314]/15 focus:outline-none focus:border-[#3d2314] text-sm text-right transition-all"/>
                  </div>
                  <div>
                    <label className="block text-md mr-2 md:text-base md:mr-2 font-bold text-[#3d2314] mb-2 tracking-wider">رقم الهاتف</label>
                    <input 
                      type="tel" 
                      inputMode="numeric"
                      value={phone}
                      required 
                      placeholder="059xxxxxxx" 
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#c8bfba]/10 border border-[#3d2314]/15 focus:outline-none focus:border-[#3d2314] text-sm text-right transition-all"/>
                  </div>
                </div>

                <div>
                  <label className="block text-md mr-2 md:text-base font-bold md:mr-2 text-[#3d2314] mb-2 tracking-wider">نوع الكيك </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="مثال: كيكة عيد ميلاد بالشوكولاتة" 
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#c8bfba]/10 border border-[#3d2314]/15 focus:outline-none focus:border-[#3d2314] text-sm text-right transition-all"/>
                </div>

                <div>
                  <label className="block text-md mr-2 md:text-base md:mr-2 font-bold text-[#3d2314] mb-2 tracking-wider">ملاحظات إضافية</label>
                  <textarea 
                    rows="4" 
                    required 
                    placeholder="اكتب أي تفاصيل خاصة بالتصميم أو الحجم..." 
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#c8bfba]/10 border border-[#3d2314]/15 focus:outline-none focus:border-[#3d2314] text-sm text-right transition-all resize-none">
                    </textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#f5d061] text-[#3d2314] py-4 rounded-2xl font-bold text-xl shadow-md hover:bg-yellow-400 transition-all transform hover:-translate-y-0.5">
                  إرسال الطلب الآن 
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </motion.section>
  );
}
export default Contact