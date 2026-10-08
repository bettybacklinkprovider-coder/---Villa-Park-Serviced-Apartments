import React, { useState } from 'react';
import { Calendar, Users, BedDouble, Square, Check, Coffee, Bath, ShieldCheck, Heart, Sparkles, Star } from 'lucide-react';
import { APARTMENTS_DATA } from '../data';

interface ApartmentsProps {
  isArabic: boolean;
  onOpenBookingWithRoom: (roomId: string) => void;
}

export default function Apartments({ isArabic, onOpenBookingWithRoom }: ApartmentsProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="relative bg-[#0B0616]">
      <div className="noise-overlay" />

      {/* ================= HERO BANNER ================= */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
            alt="Villa Park Luxury Suite Bedroom"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0616] via-transparent to-black/60" />
        </div>

        <div className="relative z-10 text-center px-4" dir={isArabic ? 'rtl' : 'ltr'}>
          <span className="text-xs font-semibold text-[#D4AF37] tracking-widest uppercase block mb-2 font-luxury">
            {isArabic ? 'إقامة ملوكية استثنائية' : 'Sovereign Luxury Accommodations'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 font-luxury tracking-tight text-wrap-balance leading-tight">
            {isArabic ? 'شققنا وأجنحتنا المخدومة' : 'Our Serviced Apartments'}
          </h1>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-2" />
        </div>
      </section>

      {/* ================= INTRODUCTION SECTION ================= */}
      <section className="py-16 border-b border-[#1C1232]">
        <div className="max-w-4xl mx-auto px-4 text-center" dir={isArabic ? 'rtl' : 'ltr'}>
          <p className="text-slate-300 text-sm sm:text-lg leading-relaxed text-wrap-balance">
            {isArabic
              ? 'تتميز جميع أجنحة وشقق فيلا بارك المخدومة بالخبر بتصاميمها المعمارية العصرية الفسيحة وتشطيباتها الإيطالية الراقية. لقد قمنا بتجهيز كل زاوية بمثالية تامة لتلبي احتياجات الإقامة اليومية، والأسبوعية، والشهرية، لتوفر لكم ملاذاً استثنائياً وراحة متكاملة تفوق الخمس نجوم.'
              : 'All suites and apartments at Villa Park Al Khobar represent spacious architectural layouts and premium Italian interiors. Every residence is fully tailored to cater to daily, weekly, or monthly stays, establishing a luxury oasis that redefines the guest experience.'}
          </p>
        </div>
      </section>

      {/* ================= DETAILED APARTMENTS SHOWCASE ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {APARTMENTS_DATA.map((apt, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={apt.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
                  onMouseEnter={() => setHoveredCard(apt.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  
                  {/* Photo Column - Alternates layout for premium feel */}
                  <div className={`lg:col-span-6 relative group ${isEven ? 'lg:order-first' : 'lg:order-last'}`}>
                    
                    {/* Gold corner design frame indicators */}
                    <div className="absolute -top-2.5 -right-2.5 w-12 h-12 border-t border-r border-[#D4AF37]/40 rounded-tr-lg pointer-events-none" />
                    <div className="absolute -bottom-2.5 -left-2.5 w-12 h-12 border-b border-l border-[#D4AF37]/40 rounded-bl-lg pointer-events-none" />

                    <div className="rounded-xl overflow-hidden border border-[#2A1B4B] shadow-2xl relative">
                      <img
                        src={apt.image}
                        alt={isArabic ? apt.nameAr : apt.nameEn}
                        referrerPolicy="no-referrer"
                        className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-104"
                      />
                      <div className="absolute inset-0 bg-[#0B0616]/10 group-hover:bg-transparent transition-all" />
                      
                      {/* Price Estimate Floating Overlay */}
                      <div className={`absolute top-4 right-4 bg-[#0B0616]/90 border border-[#D4AF37]/50 px-4 py-2.5 rounded-lg backdrop-blur-sm ${isArabic ? 'text-right' : 'text-left'}`} dir={isArabic ? 'rtl' : 'ltr'}>
                        <span className="text-[10px] text-slate-400 block leading-none">{isArabic ? 'ابتداءً من' : 'Rates From'}</span>
                        <span className="text-base font-bold text-[#D4AF37] font-sans-en leading-none block mt-1">
                          {apt.priceEstimate} <span className="text-[10px] text-slate-300 font-normal">/{isArabic ? 'ليلة' : 'Night'}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Information Column */}
                  <div className={`lg:col-span-6 ${isArabic ? 'text-right' : 'text-left'}`}>
                    <div className={`flex items-center gap-2 mb-3 ${isArabic ? 'justify-end' : 'justify-start'}`}>
                      <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                      <span className="text-[10px] tracking-widest text-[#D4AF37] uppercase font-bold font-luxury">
                        {isArabic ? 'تصنيف ممتاز' : 'Elite Category'}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-luxury leading-tight">
                      {isArabic ? apt.nameAr : apt.nameEn}
                    </h2>
                    
                    <span className="text-xs font-semibold text-[#C5A059] block mb-5">
                      {isArabic ? apt.taglineAr : apt.taglineEn}
                    </span>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {isArabic ? apt.descriptionAr : apt.descriptionEn}
                    </p>

                    {/* Room Metadata - Grid of specifications */}
                    <div className="grid grid-cols-3 gap-3 py-4 border-y border-[#2A1B4B]/50 mb-6 text-center">
                      <div className="flex flex-col items-center">
                        <Square className="w-4 h-4 text-[#D4AF37] mb-1" />
                        <span className="text-[10px] text-slate-400 block">{isArabic ? 'المساحة' : 'Size'}</span>
                        <span className="text-xs font-bold text-white font-sans-en mt-0.5" dir="ltr">{apt.size}</span>
                      </div>
                      <div className="flex flex-col items-center border-x border-[#2A1B4B]/30">
                        <Users className="w-4 h-4 text-[#D4AF37] mb-1" />
                        <span className="text-[10px] text-slate-400 block">{isArabic ? 'السعة' : 'Guests'}</span>
                        <span className="text-xs font-bold text-white mt-0.5">{apt.guests}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <BedDouble className="w-4 h-4 text-[#D4AF37] mb-1" />
                        <span className="text-[10px] text-slate-400 block">{isArabic ? 'الأسرّة' : 'Bedding'}</span>
                        <span className="text-xs font-bold text-white mt-0.5">{apt.beds}</span>
                      </div>
                    </div>

                    {/* Room amenities details with luxury check list */}
                    <div className="mb-8">
                      <h4 className="text-xs font-bold text-slate-200 mb-3 uppercase tracking-wider">
                        {isArabic ? 'أبرز تجهيزات الغرفة الفندقية:' : 'Apartment Features:'}
                      </h4>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-slate-300">
                        {(isArabic ? apt.amenitiesAr : apt.amenities).map((amenity, key) => (
                          <div key={key} className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-[#2A1B4B]/50 flex items-center justify-center text-[#D4AF37] shrink-0 text-[10px]">
                              ✓
                            </div>
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => onOpenBookingWithRoom(apt.id)}
                        className="flex-1 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-bold text-sm rounded-xl transition-all hover:shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:scale-101 active:scale-99 text-center cursor-pointer"
                      >
                        {isArabic ? 'احجز هذا الجناح الآن' : 'Book This Apartment'}
                      </button>
                      <a
                        href="tel:+966566043568"
                        className="px-5 py-3.5 bg-[#170E2B] border border-[#2A1B4B] hover:border-[#D4AF37]/50 rounded-xl text-slate-300 hover:text-white transition-all font-sans-en text-sm flex items-center justify-center gap-2"
                        dir="ltr"
                      >
                        <span>+966 56 604 3568</span>
                      </a>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FINAL BOOKING CTA PANEL ================= */}
      <section className="py-20 bg-[#110A21] border-t border-[#2A1B4B]/30">
        <div className="max-w-4xl mx-auto px-4 text-center" dir={isArabic ? 'rtl' : 'ltr'}>
          <div className="inline-flex justify-center mb-4">
            <Sparkles className="w-8 h-8 text-[#D4AF37]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-luxury">
            {isArabic ? 'هل تريد مساعدة في اختيار الشقة الملائمة؟' : 'Need Assistance Finding the Right Suite?'}
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-8">
            {isArabic
              ? 'يسعد فريق الضيافة لدينا بمساعدتك في اختيار الفئة المثالية وتنسيق كافة متطلبات إقامتكم الخاصة بالخبر.'
              : 'Our guest care representatives are available 24 hours a day to assist in matching the right suite to your itinerary.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-sm mx-auto">
            <button
              onClick={() => onOpenBookingWithRoom('suite')}
              className="w-full sm:flex-1 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-bold text-xs rounded-lg transition-all text-center cursor-pointer"
            >
              {isArabic ? 'طلب استشارة حجز' : 'Request Consult'}
            </button>
            <a
              href="https://wa.me/966566043568"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:flex-1 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs rounded-lg transition-all text-center"
            >
              {isArabic ? 'واتساب متاح ٢٤ ساعة' : 'WhatsApp Chat'}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
