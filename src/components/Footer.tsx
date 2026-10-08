import React from 'react';
import { Phone, MapPin, Mail, Clock, Instagram, Facebook, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
  isArabic: boolean;
  onOpenBooking: () => void;
}

export default function Footer({ onNavigate, isArabic, onOpenBooking }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080411] border-t border-[#2A1B4B] pt-16 pb-8 text-slate-300 relative">
      {/* Decorative top ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-[#1C1232]">
          
          {/* Logo & About Block */}
          <div className={`md:col-span-5 flex flex-col gap-4 ${isArabic ? 'items-start text-right' : 'items-start text-left'}`}>
            <button
              onClick={() => { onNavigate('#/'); scrollToTop(); }}
              className={`flex flex-col focus:outline-none ${isArabic ? 'items-start text-right' : 'items-start text-left'}`}
            >
              <span className="text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059] font-luxury">
                فيلا بارك
              </span>
              <span className="text-[10px] tracking-widest text-[#C5A059] font-luxury uppercase">
                Villa Park Serviced Apartments
              </span>
            </button>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {isArabic
                ? 'ملاذ الفخامة والراحة الفندقية الراقية في قلب الخبر. نقدم باقة من الشقق المخدومة المجهزة بالكامل لنضمن لضيوفنا من العائلات ورجال الأعمال تجربة إقامة استثنائية تسودها الخصوصية التامة والخدمة المتميزة.'
                : 'A sanctuary of luxury and premium hospitality in the heart of Al Khobar. We offer a collection of fully serviced apartments crafted to provide executive comfort, high-end amenities, and ultimate privacy for business and family stays.'}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#170E2B] border border-[#2A1B4B] hover:border-[#D4AF37] text-slate-400 hover:text-[#D4AF37] flex items-center justify-center transition-all duration-300 hover:scale-105"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#170E2B] border border-[#2A1B4B] hover:border-[#D4AF37] text-slate-400 hover:text-[#D4AF37] flex items-center justify-center transition-all duration-300 hover:scale-105"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <h3 className="text-[#D4AF37] font-semibold text-sm tracking-wider mb-6 pb-2 border-b border-[#2A1B4B] inline-block">
              {isArabic ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <button
                  onClick={() => { onNavigate('#/'); scrollToTop(); }}
                  className={`hover:text-[#D4AF37] transition-colors duration-300 text-slate-400 flex items-center gap-1.5 ${isArabic ? 'text-right' : 'text-left'}`}
                >
                  {isArabic ? 'الرئيسية' : 'Home'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('#/apartments'); scrollToTop(); }}
                  className={`hover:text-[#D4AF37] transition-colors duration-300 text-slate-400 flex items-center gap-1.5 ${isArabic ? 'text-right' : 'text-left'}`}
                >
                  {isArabic ? 'الشقق المخدومة' : 'Serviced Apartments'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('#/amenities'); scrollToTop(); }}
                  className={`hover:text-[#D4AF37] transition-colors duration-300 text-slate-400 flex items-center gap-1.5 ${isArabic ? 'text-right' : 'text-left'}`}
                >
                  {isArabic ? 'الخدمات والمرافق' : 'Amenities & Services'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('#/contact'); scrollToTop(); }}
                  className={`hover:text-[#D4AF37] transition-colors duration-300 text-slate-400 flex items-center gap-1.5 ${isArabic ? 'text-right' : 'text-left'}`}
                >
                  {isArabic ? 'اتصل بنا والموقع' : 'Contact & Location'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('#/admin'); scrollToTop(); }}
                  className={`hover:text-[#D4AF37] transition-colors duration-300 text-[#D4AF37] flex items-center gap-1.5 font-semibold ${isArabic ? 'text-right' : 'text-left'}`}
                >
                  {isArabic ? 'لوحة التحكم بالإدارة' : 'Admin Operations Panel'}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className={`md:col-span-4 ${isArabic ? 'text-right' : 'text-left'}`}>
            <h3 className="text-[#D4AF37] font-semibold text-sm tracking-wider mb-6 pb-2 border-b border-[#2A1B4B] inline-block">
              {isArabic ? 'معلومات الاتصال' : 'Contact Details'}
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  {isArabic
                    ? 'طريق الملك فهد، حي التحلية، الخبر ٣٤٧١٦، المملكة العربية السعودية'
                    : 'King Fahd Road, At Tahliyah, Al Khobar 34716, Saudi Arabia'}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <a
                  href="tel:+966566043568"
                  className={`hover:text-[#D4AF37] transition-colors duration-300 font-sans-en ${isArabic ? 'text-right' : 'text-left'}`}
                  dir="ltr"
                >
                  +966 56 604 3568
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <a
                  href="mailto:info@villaparkkhobar.com"
                  className="hover:text-[#D4AF37] transition-colors duration-300 font-sans-en"
                >
                  info@villaparkkhobar.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  {isArabic
                    ? 'خدمة العملاء والاستقبال متوفرة ٢٤ ساعة / طوال أيام الأسبوع'
                    : 'Front desk and room service open 24/7'}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className={`text-center ${isArabic ? 'sm:text-right' : 'sm:text-left'}`}>
            © {currentYear} {isArabic ? 'فيلا بارك للشقق المخدومة. جميع الحقوق محفوظة.' : 'Villa Park Serviced Apartments. All rights reserved.'}
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-3 py-2 bg-[#170E2B] border border-[#2A1B4B] hover:border-[#D4AF37] rounded-lg text-slate-400 hover:text-white transition-all duration-300 cursor-pointer"
            aria-label="Scroll to top"
          >
            <span>{isArabic ? 'العودة للأعلى' : 'Scroll to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
