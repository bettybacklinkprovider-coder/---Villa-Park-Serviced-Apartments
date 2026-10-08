import React from 'react';
import { Shield, Sparkles, MapPin, Compass, Clock, Award, Star, Phone, ArrowRight, Heart, Calendar } from 'lucide-react';
import { APARTMENTS_DATA, AMENITIES_DATA } from '../data';

interface HomeProps {
  onNavigate: (path: string) => void;
  isArabic: boolean;
  onOpenBookingWithRoom: (roomId: string) => void;
}

export default function Home({ onNavigate, isArabic, onOpenBookingWithRoom }: HomeProps) {
  
  // Highlight stats for Section 5
  const stats = isArabic
    ? [
        { label: 'موقع استراتيجي', desc: 'على طريق الملك فهد بالخبر بالقرب من مراكز الأعمال والترفيه' },
        { label: 'خصوصية وأمان', desc: 'مجمع مجهز بنظام دخول ذكي وكاميرات حراسة على مدار الساعة' },
        { label: 'راحة تامة', desc: 'شقق مجهزة بالكامل ومجالس عائلية ومطابخ حديثة متكاملة' },
        { label: 'ضيافة متميزة', desc: 'فريق عمل مدرب ومستعد لخدمتك على مدار ٢٤ ساعة طوال الأسبوع' },
      ]
    : [
        { label: 'Prime Location', desc: 'Positioned on King Fahd Road in Al Khobar, near corporate hubs and retail spaces' },
        { label: 'Utmost Privacy', desc: 'Fully secure residence with intelligent smart-locks and 24/7 security cameras' },
        { label: 'Total Comfort', desc: 'Fully realized premium interiors, expansive spaces, and high-end built-in kitchens' },
        { label: 'Elite Hospitality', desc: 'A dedicated, certified team on standby 24 hours a day to assist your stay' },
      ];

  return (
    <div className="relative">
      {/* Background Noise Subtle Effect */}
      <div className="noise-overlay" />

      {/* ================= SECTION 1 — LUXURY HERO ================= */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Full-screen Background with measured dark scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80"
            alt="Villa Park Serviced Apartments Lobby"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover scale-102 filter brightness-[0.4] saturate-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0616] via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        </div>

        {/* Elegant Gold Decorative Elements */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-[#D4AF37] to-transparent hidden md:block" />
        <div className="absolute bottom-12 left-10 w-24 h-24 border-l border-b border-[#D4AF37]/30 rounded-bl-2xl hidden lg:block" />
        <div className="absolute top-28 right-10 w-24 h-24 border-r border-t border-[#D4AF37]/30 rounded-tr-2xl hidden lg:block" />

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center" dir={isArabic ? 'rtl' : 'ltr'}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#170E2B]/80 mb-6 backdrop-blur-sm shadow-md">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs tracking-wider text-slate-200 font-luxury font-medium uppercase">
              {isArabic ? 'شقق مخدومة فاخرة بالخبر' : 'Premium Serviced Apartments in Al Khobar'}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 text-wrap-balance leading-tight">
            <span className="block font-arabic text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059]">
              فيلا بارك للشقق المخدومة
            </span>
            <span className="block text-xl sm:text-2xl font-light font-luxury tracking-widest text-slate-300 mt-4 uppercase">
              Villa Park Serviced Apartments
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-lg text-slate-300 leading-relaxed font-light mb-10 text-wrap-balance">
            {isArabic
              ? 'وجهتكم المثالية لإقامة راقية تجمع بين رحابة المنزل وخدمات الضيافة الفندقية من فئة 5 نجوم على طريق الملك فهد بالخبر.'
              : 'Your premier residence combining the expansive comfort of home with top-tier 5-star hotel services on King Fahd Road, Al Khobar.'}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => onOpenBookingWithRoom('deluxe')}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-bold text-sm rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:scale-103 active:scale-97 whitespace-nowrap cursor-pointer"
            >
              {isArabic ? 'احجز إقامتك الآن' : 'Book Your Stay'}
            </button>
            <button
              onClick={() => onNavigate('#/apartments')}
              className="w-full sm:w-auto px-8 py-4 bg-[#170E2B]/90 border border-[#D4AF37]/40 hover:border-[#D4AF37] text-[#D4AF37] font-semibold text-sm rounded-xl hover:bg-[#2A1B4B]/50 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              {isArabic ? 'استكشف الشقق المتاحة' : 'Explore Apartments'}
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-80">
          <span className="text-[10px] tracking-widest text-[#D4AF37] uppercase font-semibold">
            {isArabic ? 'اسحب للأسفل' : 'Scroll to explore'}
          </span>
          <div className="w-5 h-8 border-2 border-[#D4AF37]/50 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-[#D4AF37] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ================= SECTION 2 — WELCOME TO VILLA PARK ================= */}
      <section className="py-24 bg-[#0B0616] relative border-b border-[#1C1232]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Column - Right side on RTL */}
            <div className="lg:col-span-6 relative group order-last lg:order-first">
              {/* Premium double corner gold border frame */}
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#D4AF37] rounded-tr-xl pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-[#D4AF37] rounded-bl-xl pointer-events-none" />
              
              <div className="rounded-xl overflow-hidden shadow-2xl relative border border-[#2A1B4B]">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
                  alt="Luxury Villa Park interior living room"
                  referrerPolicy="no-referrer"
                  className="w-full h-96 object-cover group-hover:scale-103 transition-transform duration-700"
                />
                {/* Decorative overlay mesh */}
                <div className="absolute inset-0 bg-[#0B0616]/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </div>

            {/* Written Column - Left side on RTL */}
            <div className={`lg:col-span-6 ${isArabic ? 'text-right' : 'text-left'}`}>
              <span className="text-xs font-bold text-[#D4AF37] tracking-widest uppercase block mb-2">
                {isArabic ? 'مرحباً بكم في فيلا بارك الخبر' : 'WELCOME TO VILLA PARK AL KHOBAR'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6 leading-tight">
                {isArabic ? 'مفهوم جديد للفخامة والخصوصية الفندقية' : 'A New Benchmark in Private Hospitality'}
              </h2>
              
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  {isArabic
                    ? 'في فيلا بارك للشقق المخدومة بالخبر، نعيد صياغة أصول الضيافة الفاخرة. نسعى جاهدين لتقديم تجارب إقامة فريدة تجمع بين دفء وخصوصية المنزل، وجودة الخدمة الفندقية الراقية التي تليق بنمط حياتكم الرفيع.'
                    : 'At Villa Park Serviced Apartments, we redefine premium living in Al Khobar. We deliver highly customized experiences matching the serene comfort of your private residence with the meticulous amenities of five-star lodging.'}
                </p>
                <p className="text-slate-400">
                  {isArabic
                    ? 'يتميز مجمعنا الفاخر بموقعه الاستراتيجي على طريق الملك فهد بحي التحلية، ليكون الخيار الأول للعائلات التي تنشد الاسترخاء، ورجال الأعمال الباحثين عن إقامة تجمع بين الإنتاجية والراحة الفائقة.'
                    : 'Our elegant complex resides strategically on King Fahd Road in At Tahliyah district, making it the ideal focal destination for both leisure-focused families and productivity-minded executives.'}
                </p>
              </div>

              {/* Unique Features Row */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#1C1232]">
                <div className="flex items-start gap-2.5">
                  <Shield className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold text-xs">{isArabic ? 'خصوصية مطلقة' : 'Absolute Privacy'}</h4>
                    <span className="text-[11px] text-slate-400">{isArabic ? 'أمان متكامل ومداخل مستقلة' : 'Secure personal entries'}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Award className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold text-xs">{isArabic ? 'مستوى ٥ نجوم' : '5-Star Quality'}</h4>
                    <span className="text-[11px] text-slate-400">{isArabic ? 'أجهزة فاخرة وتشطيبات راقية' : 'Premium appliances'}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 3 — OUR APARTMENTS ================= */}
      <section className="py-24 bg-[#110A21] relative border-b border-[#1C1232]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#D4AF37] tracking-widest uppercase block mb-2">
              {isArabic ? 'أجنحتنا الفاخرة' : 'OUR ELEGANT RESIDENCES'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              {isArabic ? 'اختر المساحة التي تناسب نمط حياتك' : 'Discover Our Serviced Apartments'}
            </h2>
            <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto my-3" />
            <p className="text-slate-400 text-sm">
              {isArabic
                ? 'شقق مجهزة بالكامل ومصممة بعناية فائقة لتوفير تجربة مكوث متميزة واستثنائية.'
                : 'Beautiful spaces meticulously realized to provide exceptional stays and uncompromised comfort.'}
            </p>
          </div>

          {/* Grid of 4 beautiful cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {APARTMENTS_DATA.map((apt) => (
              <div
                key={apt.id}
                className="group bg-[#170E2B] border border-[#2A1B4B] hover:border-[#D4AF37] rounded-xl overflow-hidden transition-all duration-400 shadow-lg hover:shadow-[0_8px_30px_rgba(212,175,55,0.08)] flex flex-col h-full"
              >
                {/* Room Image with subtle dark gradient scrim */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={apt.image}
                    alt={isArabic ? apt.nameAr : apt.nameEn}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#170E2B] via-transparent to-transparent" />
                  
                  {/* Premium floating size badge */}
                  <div className="absolute bottom-3 right-3 bg-[#0B0616]/80 text-[#D4AF37] border border-[#D4AF37]/30 text-xs px-2.5 py-1 rounded font-sans-en font-semibold" dir="ltr">
                    {apt.size}
                  </div>
                </div>

                {/* Card details */}
                <div className={`p-5 flex-1 flex flex-col justify-between ${isArabic ? 'text-right' : 'text-left'}`}>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#D4AF37] transition-colors duration-300">
                      {isArabic ? apt.nameAr : apt.nameEn}
                    </h3>
                    <p className="text-[#C5A059] text-[11px] font-medium mb-3">
                      {isArabic ? apt.taglineAr : apt.taglineEn}
                    </p>
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-3 mb-4">
                      {isArabic ? apt.descriptionAr : apt.descriptionEn}
                    </p>
                  </div>

                  {/* Room metadata - Unboxed text as per Zero-Pill discipline */}
                  <div className="border-t border-[#2A1B4B]/60 pt-3 mt-auto">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-4" dir={isArabic ? 'rtl' : 'ltr'}>
                      <span>{apt.guests}</span>
                      <span aria-hidden="true" className="text-[#D4AF37]">·</span>
                      <span>{apt.beds}</span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => onNavigate('#/apartments')}
                        className="flex-1 py-2 text-xs font-semibold text-center rounded-lg bg-[#2A1B4B] hover:bg-[#D4AF37] hover:text-black text-white border border-[#2A1B4B] transition-all duration-300 whitespace-nowrap cursor-pointer"
                      >
                        {isArabic ? 'عرض التفاصيل' : 'View Details'}
                      </button>
                      <button
                        onClick={() => onOpenBookingWithRoom(apt.id)}
                        className="flex-1 py-2 text-xs font-bold text-center rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black transition-all duration-300 hover:opacity-90 whitespace-nowrap cursor-pointer"
                      >
                        {isArabic ? 'احجز الآن' : 'Book Now'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 4 — PREMIUM AMENITIES ================= */}
      <section className="py-24 bg-[#0B0616] relative border-b border-[#1C1232]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#D4AF37] tracking-widest uppercase block mb-2">
              {isArabic ? 'مرافق وامتيازات متكاملة' : 'PREMIUM AMENITIES & FACILITIES'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              {isArabic ? 'تجربة إقامة متكاملة من فئة الخمس نجوم' : 'Crafted to Perfect Your Hospitality Stay'}
            </h2>
            <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto my-3" />
            <p className="text-slate-400 text-sm">
              {isArabic
                ? 'لقد تم تصميم وتجهيز مجمع فيلا بارك بكافة التفاصيل التي تضمن راحتكم وسلامتكم.'
                : 'Every touchpoint at Villa Park has been refined to elevate comfort, convenience, and safety.'}
            </p>
          </div>

          {/* Grids with Images and Hover Effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AMENITIES_DATA.map((amenity) => (
              <div
                key={amenity.id}
                className={`group bg-[#170E2B] border border-[#2A1B4B] hover:border-[#D4AF37] rounded-xl overflow-hidden shadow-lg hover:shadow-[0_8px_30px_rgba(212,175,55,0.08)] transition-all duration-400 flex flex-col h-full ${isArabic ? 'text-right' : 'text-left'}`}
              >
                {/* Visual Image Banner with Zoom Transition */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={amenity.image}
                    alt={isArabic ? amenity.nameAr : amenity.nameEn}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#170E2B] via-transparent to-transparent" />
                  
                  {/* Floating Luxury Emoji Badge */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-lg bg-[#0B0616]/90 border border-[#D4AF37]/40 flex items-center justify-center text-lg shadow-md">
                    <span>
                      {amenity.id === 'wifi' && '📶'}
                      {amenity.id === 'beds' && '🛌'}
                      {amenity.id === 'kitchen' && '🍳'}
                      {amenity.id === 'parking' && '🅿️'}
                      {amenity.id === 'ac' && '❄️'}
                      {amenity.id === 'support' && '☎️'}
                    </span>
                  </div>
                </div>

                {/* Card Text Information */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                      {isArabic ? amenity.nameAr : amenity.nameEn}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {isArabic ? amenity.descriptionAr : amenity.descriptionEn}
                    </p>
                  </div>

                  {/* Tiny verified footer check */}
                  <div className={`mt-4 pt-3 border-t border-[#2A1B4B]/40 flex items-center gap-1.5 text-[10px] text-slate-500 font-semibold tracking-wider uppercase ${isArabic ? 'justify-end' : 'justify-start'}`}>
                    <span>{isArabic ? 'خدمة متميزة' : 'Sovereign Standard'}</span>
                    <span className="text-[#D4AF37]">✓</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('#/amenities')}
              className="inline-flex items-center gap-2 text-sm text-[#D4AF37] hover:text-white font-semibold transition-colors group cursor-pointer"
            >
              <span>{isArabic ? 'عرض كافة تفاصيل ومزايا الخدمة' : 'View All Premium Facilities & Services'}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </section>

      {/* ================= SECTION 5 — WHY CHOOSE VILLA PARK ================= */}
      <section className="py-24 bg-[#110A21] relative overflow-hidden border-b border-[#1C1232]">
        
        {/* Soft background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/3 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content column on RTL */}
            <div className={`lg:col-span-6 ${isArabic ? 'text-right' : 'text-left'}`}>
              <span className="text-xs font-bold text-[#D4AF37] tracking-widest uppercase block mb-2">
                {isArabic ? 'سر تميزنا بالخبر' : 'WHY THE DISCERNING CHOOSE VILLA PARK'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
                {isArabic ? 'أعلى معايير الرفاهية والراحة الفندقية' : 'The Luxury Standard You Deserve'}
              </h2>
              <p className="text-slate-300 text-sm mb-10 leading-relaxed">
                {isArabic
                  ? 'من التخطيط المعماري الواسع والمحيط الهادئ في حي التحلية بالخبر، إلى الخدمات المخصصة التي نقدمها على مدار الساعة، صممنا فيلا بارك لتكون واحتك المثالية بعيداً عن صخب المدينة مع الحفاظ على مرونة الوصول.'
                  : 'From our expansive physical floor plans and the serene residential environment in At Tahliyah, Al Khobar, to our certified 24/7 client care, we engineered Villa Park to serve as your ultimate personal sanctuary.'}
              </p>

              {/* Grid of highlighted advantages */}
              <div className="space-y-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex gap-4 items-start pb-5 border-b border-[#2A1B4B]/50 last:border-0">
                    <div className="w-8 h-8 rounded-lg bg-[#2A1B4B]/50 flex items-center justify-center text-[#D4AF37] text-sm shrink-0 font-bold font-luxury">
                      {`0${idx + 1}`}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm mb-1">{stat.label}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{stat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Graphics/Image column on RTL */}
            <div className="lg:col-span-6">
              <div className="relative">
                {/* Decorative golden ring element */}
                <div className="absolute -inset-4 border border-[#D4AF37]/10 rounded-2xl pointer-events-none" />
                <div className="absolute top-1/2 -right-12 w-24 h-24 bg-[#D4AF37]/5 blur-xl pointer-events-none" />
                
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
                  alt="Luxury penthouse design in Al Khobar"
                  referrerPolicy="no-referrer"
                  className="rounded-xl object-cover h-[500px] w-full border border-[#2A1B4B]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 6 — LOCATION & BOOKING CTA ================= */}
      <section className="py-24 bg-[#0B0616] relative border-b border-[#2A1B4B]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#170E2B] to-[#0E081C] border border-[#2A1B4B] rounded-2xl p-6 sm:p-12 relative overflow-hidden gold-border-glow">
            
            {/* Golden decorative line overlay */}
            <div className="absolute top-0 right-0 w-48 h-[1px] bg-gradient-to-l from-[#D4AF37] to-transparent" />
            <div className="absolute bottom-0 left-0 w-48 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Location details & CTA - Right Side on RTL */}
              <div className={`lg:col-span-6 order-last lg:order-first ${isArabic ? 'text-right' : 'text-left'}`}>
                <span className="text-xs font-bold text-[#D4AF37] tracking-widest uppercase block mb-2">
                  {isArabic ? 'العنوان والموقع بالخبر' : 'OUR AL KHOBAR ADDRESS'}
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
                  {isArabic ? 'موقع متميز على طريق الملك فهد' : 'Prime Executive Location'}
                </h2>
                
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  {isArabic
                    ? 'يقع مجمع فيلا بارك للشقق المخدومة في حي التحلية بمدينة الخبر على طريق الملك فهد الرئيسي. يمنحكم هذا الموقع سرعة وسهولة التنقل والوصول إلى كافة المجمعات الكبرى، ومناطق الأعمال، وكورنيش الخبر في غضون دقائق معدودة.'
                    : 'Nestled in At Tahliyah district along King Fahd Road, Villa Park lets you reach major business parks, commercial malls, Al Khobar Corniche, and the King Fahd Causeway in minutes.'}
                </p>

                {/* Specific exact address highlighted */}
                <div className="flex items-start gap-3 bg-[#1C1232] p-4 rounded-xl border border-[#2A1B4B] mb-8">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold text-xs mb-1">{isArabic ? 'العنوان الرسمي بالتفصيل' : 'Official Full Address'}</h4>
                    <span className="text-xs text-slate-300">
                      {isArabic 
                        ? 'طريق الملك فهد، حي التحلية، الخبر ٣٤٧١٦، المملكة العربية السعودية' 
                        : 'King Fahd Road, At Tahliyah, Al Khobar 34716, Saudi Arabia'}
                    </span>
                  </div>
                </div>

                {/* Direct CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch gap-4 justify-start">
                  <button
                    onClick={() => onOpenBookingWithRoom('deluxe')}
                    className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-bold text-sm rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:scale-102 active:scale-98 whitespace-nowrap text-center cursor-pointer"
                  >
                    {isArabic ? 'احجز المبيت الآن' : 'Book Your Stay'}
                  </button>
                  
                  <a
                    href="tel:+966566043568"
                    className="px-8 py-4 bg-[#1C1232] border border-[#D4AF37]/40 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] font-semibold text-sm rounded-xl text-center flex items-center justify-center gap-2 transition-all duration-300"
                    dir="ltr"
                  >
                    <Phone className="w-4 h-4 text-[#D4AF37]" />
                    <span>+966 56 604 3568</span>
                  </a>
                </div>
              </div>

              {/* Map presentation - Left Side on RTL */}
              <div className="lg:col-span-6 relative h-72 sm:h-96 rounded-xl overflow-hidden border border-[#2A1B4B]">
                {/* Embed an actual dark-themed premium google maps representation or custom elegant map layout */}
                <iframe
                  title="Villa Park Serviced Apartments Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.7112022839356!2d50.17056027552!3d26.303254585465225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e917d09590cb%3A0xcfe0e3ab087e5052!2sKing%20Fahd%20Rd%2C%20Al%20Khobar%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                
                {/* Visual Location Overlay Badge */}
                <div className={`absolute bottom-4 left-4 right-4 bg-[#0B0616]/95 backdrop-blur-md border border-[#D4AF37]/30 p-3.5 rounded-lg flex items-center justify-between gap-3 ${isArabic ? 'text-right' : 'text-left'}`}>
                  <div>
                    <h5 className="text-white font-bold text-xs mb-0.5">{isArabic ? 'فيلا بارك الخبر' : 'Villa Park Al Khobar'}</h5>
                    <p className="text-[10px] text-slate-400">
                      {isArabic ? 'طريق الملك فهد، حي التحلية' : 'King Fahd Road, At Tahliyah'}
                    </p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=King+Fahd+Road,+At+Tahliyah,+Al+Khobar+Saudi+Arabia"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 bg-[#D4AF37] hover:bg-[#F3E5AB] text-black text-[11px] font-bold rounded transition-colors"
                  >
                    {isArabic ? 'اتجاهات القيادة' : 'Get Directions'}
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
