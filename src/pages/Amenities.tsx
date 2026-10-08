import React from 'react';
import { Sparkles, ArrowLeft, ShieldCheck, Heart, Star, Phone, CheckCircle } from 'lucide-react';

interface AmenitiesProps {
  isArabic: boolean;
  onOpenBooking: () => void;
}

export default function Amenities({ isArabic, onOpenBooking }: AmenitiesProps) {
  
  const amenitiesList = [
    {
      id: 'wifi',
      titleAr: 'إنترنت فائق السرعة وبدون انقطاع',
      titleEn: 'Complimentary High-Speed Wi-Fi',
      descAr: 'اتصال فايبر مخصص فائق السرعة يغطي كافة أرجاء الشقة لتصفح سلس وإدارة سريعة لأعمالكم دون انقطاع.',
      descEn: 'Dedicated high-speed fiber internet coverage across all apartments, tailored for uninterrupted business and streaming.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
      tagAr: 'تقنية متطورة',
      tagEn: 'Advanced Tech'
    },
    {
      id: 'parking',
      titleAr: 'مواقف سيارات آمنة ومراقبة',
      titleEn: 'Secure Free Parking',
      descAr: 'مواقف خاصة ومحمية مخصصة لضيوفنا مع حراسة وكاميرات مراقبة مستمرة لتضمن لسيارتكم الأمان وسهولة الدخول.',
      descEn: 'Dedicated secure spaces under active video surveillance, guaranteeing vehicle security and seamless driveway access.',
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=600&q=80',
      tagAr: 'راحة تامة',
      tagEn: 'Convenient'
    },
    {
      id: 'ac',
      titleAr: 'تكييف مركزي ذكي مخصص لكل غرفة',
      titleEn: 'Smart Air Conditioning',
      descAr: 'تحكم ذكي هادئ في المناخ الداخلي لكل غرفة على حدة بما يتناسب مع تفضيلاتكم للاسترخاء التام.',
      descEn: 'Silent central air cooling systems with local thermostats, ensuring perfect customized climate control in every room.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80',
      tagAr: 'راحة حرارية',
      tagEn: 'Total Comfort'
    },
    {
      id: 'bedrooms',
      titleAr: 'غرف نوم ملكية فاخرة',
      titleEn: 'Royal Comfort Bedrooms',
      descAr: 'مراتب ووسائد طبية فاخرة مغلفة بأجود أنواع القطن الطبيعي لتمنحكم نوماً صحياً وراحة فندقية لا مثيل لها.',
      descEn: 'Anatomical orthopedic mattresses and hypoallergenic natural linens, providing restorative deep sleep nights.',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80',
      tagAr: 'مضاد للحساسية',
      tagEn: 'Hypoallergenic'
    },
    {
      id: 'bathrooms',
      titleAr: 'حمامات رخامية عصرية مجهزة',
      titleEn: 'Modern Marble Bathrooms',
      descAr: 'حمامات فسيحة مكسوة بالرخام الإيطالي الفخم مع أحواض استحمام دافئة، ودش مطري، ومستلزمات عناية فرنسية فاخرة.',
      descEn: 'Italian marble-clad washrooms featuring hot tubs, rain showers, and premium French personal care products.',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&q=80',
      tagAr: 'أناقة الرخام',
      tagEn: 'Elegant design'
    },
    {
      id: 'kitchens',
      titleAr: 'مطابخ مجهزة بالكامل للأسر',
      titleEn: 'Fully Equipped Family Kitchens',
      descAr: 'مطبخ متكامل وعصري مزود بفرن، وميكروويف، وثلاجة، وموقد مدمج، وكامل أدوات الطبخ والطهي لدفء منزلي متكامل.',
      descEn: 'Sleek custom kitchen spaces with built-in appliances, cookware sets, and modern tableware for authentic home cooking.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
      tagAr: 'تجهيز عائلي',
      tagEn: 'Home cooking'
    },
    {
      id: 'housekeeping',
      titleAr: 'تنظيف وتعقيم دوري فائق',
      titleEn: 'Immaculate Housekeeping Service',
      descAr: 'فريق عمل محترف يضمن نظافة وتعقيم كافة الغرف والمفارش يومياً ووفق أعلى معايير النظافة والبروتوكولات الصحية.',
      descEn: 'A certified hygiene crew on call daily, changing linens and keeping all suites perfectly polished to 5-star standards.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      tagAr: 'تعقيم كامل',
      tagEn: 'Sanitized'
    },
    {
      id: 'support',
      titleAr: 'خدمة واستقبال ضيوف على مدار الساعة',
      titleEn: '24/7 Concierge & Desk Support',
      descAr: 'فريق استقبال محترف متاح طوال ٢٤ ساعة لتلبية اتصالاتكم وتسهيل إجراءاتكم وتقديم الإرشادات بالخبر.',
      descEn: 'A warm, professional hospitality desk ready 24/7 to facilitate immediate checking, request processing, and local tips.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
      tagAr: 'خدمة متميزة',
      tagEn: 'Sovereign Care'
    },
    {
      id: 'family',
      titleAr: 'تسهيلات متميزة صديقة للعائلات',
      titleEn: 'Family-Friendly Features',
      descAr: 'مجالس فسيحة ومناطق لتناول الطعام مصممة لتجمع العائلات بأريحية تامة مع حماية مخصصة للأطفال.',
      descEn: 'Generously proportioned family living rooms, childproof locks, and highchairs to assure peace of mind for parents.',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80',
      tagAr: 'بيئة آمنة',
      tagEn: 'Family Safe'
    }
  ];

  return (
    <div className="relative bg-[#0B0616]">
      <div className="noise-overlay" />

      {/* ================= HERO BANNER ================= */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
            alt="Villa Park Luxury Serviced Amenities Background"
            className="w-full h-full object-cover filter brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0616] via-transparent to-black/60" />
        </div>

        <div className="relative z-10 text-center px-4" dir={isArabic ? 'rtl' : 'ltr'}>
          <span className="text-xs font-semibold text-[#D4AF37] tracking-widest uppercase block mb-2 font-luxury">
            {isArabic ? 'خدمات ضيافة ملوكية متكاملة' : 'Sovereign Amenities & Guest Care'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 font-luxury tracking-tight text-wrap-balance leading-tight">
            {isArabic ? 'الخدمات والمرافق الفاخرة' : 'Amenities & Services'}
          </h1>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-2" />
        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className="py-16 border-b border-[#1C1232]">
        <div className="max-w-4xl mx-auto px-4 text-center" dir={isArabic ? 'rtl' : 'ltr'}>
          <p className="text-slate-300 text-sm sm:text-lg leading-relaxed text-wrap-balance">
            {isArabic
              ? 'نهتم بأدق التفاصيل لنوفر لضيوف فيلا بارك بالخبر تجربة إقامة متكاملة تفوق التوقعات. من خدمات التنظيف اليومي وحراسة الأمن ومواقف السيارات الفسيحة، إلى المرافق المجهزة تقنياً وعائلياً بالكامل لتمنحكم الشعور الحقيقي بالرفاهية والاسترخاء المطلق.'
              : 'At Villa Park Al Khobar, we craft every detail to yield a comprehensive guest journey. From our round-the-clock secure parking and professional daily housekeeping to childproof family designs and high-speed enterprise networks.'}
          </p>
        </div>
      </section>

      {/* ================= GRID PRESENTATION ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenitiesList.map((amenity) => (
              <div
                key={amenity.id}
                className={`group bg-[#170E2B] border border-[#2A1B4B] hover:border-[#D4AF37]/50 rounded-xl overflow-hidden shadow-lg hover:shadow-[0_4px_25px_rgba(212,175,55,0.06)] transition-all duration-400 flex flex-col h-full ${isArabic ? 'text-right' : 'text-left'}`}
              >
                {/* Amenity Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={amenity.image}
                    alt={isArabic ? amenity.titleAr : amenity.titleEn}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 filter brightness-[0.85] saturate-[0.9]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#170E2B] via-transparent to-transparent" />
                  
                  {/* Category tag - Unboxed metadata as per Zero-Pill discipline */}
                  <div className="absolute bottom-3 right-3 text-white text-[11px] font-semibold bg-black/60 px-2.5 py-1 rounded">
                    {isArabic ? amenity.tagAr : amenity.tagEn}
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                      {isArabic ? amenity.titleAr : amenity.titleEn}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {isArabic ? amenity.descAr : amenity.descEn}
                    </p>
                  </div>

                  {/* Trust indicator */}
                  <div className={`mt-5 pt-4 border-t border-[#2A1B4B]/40 flex items-center gap-2 text-[10px] text-slate-500 font-semibold uppercase tracking-wider ${isArabic ? 'justify-end' : 'justify-start'}`}>
                    <span>{isArabic ? 'معتمد ومضمون' : 'Verified Standard'}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL BOOKING CTA ================= */}
      <section className="py-24 bg-[#110A21] border-t border-[#2A1B4B]/30 relative overflow-hidden">
        
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#D4AF37]/2 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10" dir={isArabic ? 'rtl' : 'ltr'}>
          <h2 className="text-3xl font-bold text-white mb-4 font-luxury">
            {isArabic ? 'استمتع بإقامة فاخرة لا تُنسى الخبر' : 'Experience Elite Living at Villa Park'}
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            {isArabic
              ? 'احجز شقتك المخدومة اليوم واستمتع بأرقى الخدمات الفندقية المتكاملة مع الخصوصية والأمان التام.'
              : 'Reserve your premium apartment today and enjoy 5-star services along with absolute peace of mind.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={onOpenBooking}
              className="w-full sm:flex-1 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-bold text-sm rounded-xl transition-all hover:shadow-[0_4px_25px_rgba(212,175,55,0.3)] hover:scale-102 cursor-pointer"
            >
              {isArabic ? 'احجز إقامتك الفاخرة' : 'Book Your Luxury Stay'}
            </button>
            <a
              href="tel:+966566043568"
              className="w-full sm:flex-1 py-4 bg-[#170E2B] border border-[#D4AF37]/40 text-slate-300 hover:text-white rounded-xl transition-all text-center flex items-center justify-center gap-2"
              dir="ltr"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>+966 56 604 3568</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
