import React, { useState } from 'react';
import { Phone, MapPin, Mail, Clock, Send, MessageSquare, Sparkles, Navigation, ShieldCheck } from 'lucide-react';

interface ContactProps {
  isArabic: boolean;
  onOpenBooking: () => void;
}

export default function Contact({ isArabic, onOpenBooking }: ContactProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const landmarks = isArabic
    ? [
        { name: 'كورنيش الخبر المطل على الخليج', dist: '١٠ دقائق بالسيارة' },
        { name: 'جسر الملك فهد المؤدي لمملكة البحرين', dist: '١٢ دقيقة بالسيارة' },
        { name: 'مركز الظهران الدولي للمعارض (إكسبو)', dist: '٨ دقائق بالسيارة' },
        { name: 'مجمعات الراشد والظهران للتسوق الكبرى', dist: '٧ دقائق بالسيارة' },
        { name: 'منطقة أرامكو السعودية بالظهران', dist: '١٢ دقيقة بالسيارة' },
      ]
    : [
        { name: 'Al Khobar Waterfront & Corniche', dist: '10 Mins Drive' },
        { name: 'King Fahd Causeway (To Bahrain)', dist: '12 Mins Drive' },
        { name: 'Dhahran International Exhibition (Expo)', dist: '8 Mins Drive' },
        { name: 'Al Rashid & Dhahran Luxury Malls', dist: '7 Mins Drive' },
        { name: 'Saudi Aramco HQ (Dhahran)', dist: '12 Mins Drive' },
      ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = isArabic ? 'يرجى إدخال اسمك الكريم' : 'Please enter your name';
    }
    if (!phone.trim()) {
      newErrors.phone = isArabic ? 'يرجى إدخال رقم الجوال' : 'Please enter your phone number';
    } else if (!/^(05|5|\+9665)[0-9]{8}$/.test(phone.replace(/\s+/g, ''))) {
      newErrors.phone = isArabic ? 'صيغة الجوال غير صحيحة (مثال: 0566043568)' : 'Invalid phone (e.g., 0566043568)';
    }
    if (!email.trim()) {
      newErrors.email = isArabic ? 'يرجى إدخال البريد الإلكتروني' : 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = isArabic ? 'صيغة البريد الإلكتروني غير صحيحة' : 'Invalid email address';
    }
    if (!message.trim()) {
      newErrors.message = isArabic ? 'يرجى كتابة نص رسالتكم الكريمة' : 'Please enter your message';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate luxury API submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setErrors({});
    }, 1200);
  };

  const handleResetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setIsSubmitted(false);
  };

  return (
    <div className="relative bg-[#0B0616]">
      <div className="noise-overlay" />

      {/* ================= HERO BANNER ================= */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
            alt="Villa Park Luxury Serviced Apartments Reception Desk"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0616] via-transparent to-black/60" />
        </div>

        <div className="relative z-10 text-center px-4" dir={isArabic ? 'rtl' : 'ltr'}>
          <span className="text-xs font-semibold text-[#D4AF37] tracking-widest uppercase block mb-2 font-luxury">
            {isArabic ? 'خدمة الضيوف ٢٤/٧ للتواصل المباشر' : '24/7 Hospitality & Front Desk'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 font-luxury tracking-tight text-wrap-balance leading-tight">
            {isArabic ? 'التواصل والموقع الجغرافي' : 'Contact & Location'}
          </h1>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-2" />
        </div>
      </section>

      {/* ================= CONTACT PARTICULARS & FORM ================= */}
      <section className="py-20 border-b border-[#1C1232]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Column 1: Contact particulars details - Right Side on RTL */}
            <div className={`lg:col-span-5 ${isArabic ? 'text-right' : 'text-left'}`}>
              <span className="text-xs font-bold text-[#D4AF37] tracking-widest uppercase block mb-2">
                {isArabic ? 'تفاصيل الاتصال الرسمية' : 'OFFICIAL CONTACT PARTICULARS'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-luxury leading-tight">
                {isArabic ? 'نسعد بالإجابة على استفساراتكم' : 'Get In Touch Instantly'}
              </h2>
              <p className="text-slate-300 text-sm mb-10 leading-relaxed">
                {isArabic
                  ? 'يتواجد مستشارو الضيافة ومكتب الاستقبال في فيلا بارك الخبر على مدار الساعة لتأمين إجابات كافية لكافة تساؤلاتكم، وتسهيل إجراءات استلام الشقق، وتلبية متطلباتكم الخاصة.'
                  : 'Our dedicated guest advisors and concierge specialists in Al Khobar are standing by 24/7 to process your checking details, coordinate luggage, or configure custom requests.'}
              </p>

              {/* Direct clickable list items */}
              <div className="space-y-6">
                
                {/* Physical Address */}
                <div className="flex gap-4 items-start pb-5 border-b border-[#2A1B4B]/40">
                  <div className="w-10 h-10 rounded-xl bg-[#2A1B4B]/60 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/20 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{isArabic ? 'العنوان والموقع' : 'Physical Address'}</h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {isArabic
                        ? 'طريق الملك فهد، حي التحلية، الخبر ٣٤٧١٦، المملكة العربية السعودية'
                        : 'King Fahd Road, At Tahliyah, Al Khobar 34716, Saudi Arabia'}
                    </p>
                  </div>
                </div>

                {/* Direct Phone Number */}
                <div className="flex gap-4 items-start pb-5 border-b border-[#2A1B4B]/40">
                  <div className="w-10 h-10 rounded-xl bg-[#2A1B4B]/60 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/20 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{isArabic ? 'رقم الهاتف المباشر' : 'Direct Support Line'}</h4>
                    <a
                      href="tel:+966566043568"
                      className="text-[#D4AF37] font-bold text-sm sm:text-base hover:text-white transition-colors font-sans-en text-left block mt-1"
                      dir="ltr"
                    >
                      +966 56 604 3568
                    </a>
                  </div>
                </div>

                {/* Corporate Email */}
                <div className="flex gap-4 items-start pb-5 border-b border-[#2A1B4B]/40">
                  <div className="w-10 h-10 rounded-xl bg-[#2A1B4B]/60 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/20 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{isArabic ? 'البريد الإلكتروني' : 'Corporate Email'}</h4>
                    <a
                      href="mailto:info@villaparkkhobar.com"
                      className="text-slate-300 hover:text-[#D4AF37] transition-colors font-sans-en text-xs sm:text-sm block mt-1"
                    >
                      info@villaparkkhobar.com
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#2A1B4B]/60 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/20 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{isArabic ? 'ساعات العمل الرسمية' : 'Response Availability'}</h4>
                    <p className="text-slate-400 text-xs sm:text-sm">
                      {isArabic
                        ? 'خدمة الاستقبال والدعم متاحة على مدار ٢٤ ساعة / طوال أيام الأسبوع'
                        : 'Reception Desk & Operations are active 24/7 without interruption'}
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Column 2: Interactive Contact Form - Left Side on RTL */}
            <div className={`lg:col-span-7 bg-[#170E2B] border border-[#2A1B4B] p-6 sm:p-10 rounded-2xl relative gold-border-glow ${isArabic ? 'text-right' : 'text-left'}`} dir={isArabic ? 'rtl' : 'ltr'}>
              
              {!isSubmitted ? (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div className="mb-6">
                    <span className="text-[10px] tracking-widest text-[#D4AF37] font-semibold uppercase block mb-1">
                      {isArabic ? 'اترك رسالتك لمسؤول المجمع' : 'SUBMIT GUEST INQUIRY'}
                    </span>
                    <h3 className="text-xl font-bold text-white font-luxury">
                      {isArabic ? 'أرسل لنا استفسارك مباشرة' : 'Inquire About Serviced Suites'}
                    </h3>
                  </div>

                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {isArabic ? 'الاسم الكريم بالكامل' : 'Full Name'}
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={isArabic ? 'مثال: فيصل بن أحمد' : 'e.g. Faisal Ahmed'}
                      className={`w-full bg-[#110A21] border ${errors.name ? 'border-red-500' : 'border-[#2A1B4B]'} focus:border-[#D4AF37] text-slate-100 rounded-lg px-3.5 py-3 text-sm outline-none transition-all`}
                    />
                    {errors.name && <span className="text-[10px] text-red-400 mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {isArabic ? 'رقم الهاتف (جوال)' : 'Phone Number'}
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="05xxxxxxxx"
                        className={`w-full bg-[#110A21] border ${errors.phone ? 'border-red-500' : 'border-[#2A1B4B]'} focus:border-[#D4AF37] text-slate-100 rounded-lg px-3.5 py-3 text-sm outline-none transition-all font-sans-en text-left`}
                        dir="ltr"
                      />
                      {errors.phone && <span className="text-[10px] text-red-400 mt-1 block">{errors.phone}</span>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {isArabic ? 'البريد الإلكتروني' : 'Email Address'}
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email@example.com"
                        className={`w-full bg-[#110A21] border ${errors.email ? 'border-red-500' : 'border-[#2A1B4B]'} focus:border-[#D4AF37] text-slate-100 rounded-lg px-3.5 py-3 text-sm outline-none transition-all font-sans-en text-left`}
                        dir="ltr"
                      />
                      {errors.email && <span className="text-[10px] text-red-400 mt-1 block">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Message body */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {isArabic ? 'نص الاستفسار أو الملاحظة' : 'Message details'}
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      placeholder={isArabic ? 'اكتب تساؤلاتكم حول شقق فيلا بارك المخدومة هنا...' : 'Describe your specific requirements...'}
                      className={`w-full bg-[#110A21] border ${errors.message ? 'border-red-500' : 'border-[#2A1B4B]'} focus:border-[#D4AF37] text-slate-100 rounded-lg px-3.5 py-3 text-sm outline-none transition-all resize-none`}
                    />
                    {errors.message && <span className="text-[10px] text-red-400 mt-1 block">{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] hover:from-[#E2BF4E] hover:to-[#D4AF37] text-black font-bold text-sm rounded-xl shadow-md hover:shadow-[0_4px_20px_rgba(212,175,55,0.3)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    <Send className="w-4 h-4 shrink-0" />
                    <span>{isSubmitting ? (isArabic ? 'جاري إرسال استفساركم...' : 'Sending Message...') : (isArabic ? 'إرسال الرسالة الكريمة' : 'Submit My Message')}</span>
                  </button>

                  <div className="flex gap-2 justify-center items-center mt-3 text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
                    <span>{isArabic ? 'معلوماتكم آمنة تماماً ومتوافقة مع الخصوصية' : 'Secure and Private Communication'}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </div>
                </form>
              ) : (
                /* Post-submit luxury success receipt card */
                <div className="py-12 text-center animate-fade-in">
                  <div className="w-14 h-14 bg-[#2A1B4B]/80 border border-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-5">
                    <Send className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-luxury mb-2">
                    {isArabic ? 'شكراً لتواصلكم الكريم مع فيلا بارك' : 'Message Dispatched Successfully'}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto mb-8">
                    {isArabic
                      ? 'لقد تم إرسال رسالتكم مباشرة لمكتب المدير الإقليمي لمجمع الخبر. سيقوم أحد مستشاري الضيافة بالرد على بريدكم الإلكتروني أو جوالكم خلال أقل من ساعة.'
                      : 'Your message has been received by our Al Khobar operations coordinator. We will reply to your registered coordinates shortly.'}
                  </p>

                  <div className={`bg-[#110A21] border border-[#2A1B4B] p-4 rounded-xl max-w-sm mx-auto mb-8 space-y-2 text-xs ${isArabic ? 'text-right' : 'text-left'}`}>
                    <div className="flex justify-between border-b border-[#2A1B4B] pb-2 mb-2">
                      <span className="text-[#D4AF37] font-bold">{isArabic ? 'ملخص الاستفسار' : 'Summary'}</span>
                      <span className="text-slate-400 font-mono">#{Math.floor(1000 + Math.random() * 9000)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">{isArabic ? 'المرسل:' : 'Sender:'}</span>
                      <span className="text-white font-semibold">{name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">{isArabic ? 'رقم الهاتف:' : 'Phone:'}</span>
                      <span className="text-white font-mono">{phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">{isArabic ? 'البريد المسجل:' : 'Email:'}</span>
                      <span className="text-white font-mono">{email}</span>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-center max-w-xs mx-auto">
                    <button
                      onClick={handleResetForm}
                      className="flex-1 py-2.5 bg-[#1C1232] border border-[#2A1B4B] text-slate-300 hover:text-white rounded-lg text-xs font-semibold transition-all"
                    >
                      {isArabic ? 'أرسل رسالة أخرى' : 'Send New Message'}
                    </button>
                    <button
                      onClick={onOpenBooking}
                      className="flex-1 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-bold rounded-lg text-xs transition-all cursor-pointer"
                    >
                      {isArabic ? 'احجز جناحك الآن' : 'Book Your Stay'}
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE LANDMARKS PROXIMITY GRID ================= */}
      <section className="py-20 bg-[#110A21]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Landmark text column - Right side on RTL */}
            <div className={`lg:col-span-6 ${isArabic ? 'text-right' : 'text-left'}`}>
              <span className="text-xs font-bold text-[#D4AF37] tracking-widest uppercase block mb-2">
                {isArabic ? 'موقعنا المتميز بالخبر وقربه من المعالم' : 'EXECUTIVE PROXIMITY HIGHLIGHTS'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-luxury leading-tight">
                {isArabic ? 'قريب من كل ما يهمك الخبر' : 'At the Epicenter of Al Khobar'}
              </h2>
              <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                {isArabic
                  ? 'يتمركز مجمع فيلا بارك المخدوم في أحد أهم الشرايين الحيوية بالخبر، مما يمنحكم وصولاً فائق السرعة لجميع معالم الترفيه والأعمال وصالات العرض المرموقة بالمنطقة الشرقية.'
                  : 'Villa Park enjoys unprecedented accessibility. Reaching high-end retail hubs, multinational oil offices, beachfront developments, and international travel routes is completely effortless.'}
              </p>

              {/* Landmark rows */}
              <div className="space-y-4">
                {landmarks.map((landmark, key) => (
                  <div key={key} className="flex justify-between items-center bg-[#170E2B] p-3.5 rounded-xl border border-[#2A1B4B]/60 text-xs sm:text-sm">
                    <span className="text-white font-bold">{landmark.name}</span>
                    <div className="flex items-center gap-1.5 text-[#D4AF37] font-semibold">
                      <Navigation className="w-3.5 h-3.5 rotate-45 shrink-0" />
                      <span>{landmark.dist}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Landmark map column - Left side on RTL */}
            <div className="lg:col-span-6 h-80 sm:h-[450px] rounded-xl overflow-hidden border border-[#2A1B4B] relative">
              <iframe
                title="Villa Park Detailed Landmarks Navigation"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.7112022839356!2d50.17056027552!3d26.303254585465225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e917d09590cb%3A0xcfe0e3ab087e5052!2sKing%20Fahd%20Rd%2C%20Al%20Khobar%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Floating Maps CTA */}
              <div className={`absolute bottom-4 left-4 right-4 bg-[#0B0616]/95 border border-[#D4AF37]/30 p-4 rounded-xl flex items-center justify-between gap-4 ${isArabic ? 'text-right' : 'text-left'}`} dir={isArabic ? 'rtl' : 'ltr'}>
                <div>
                  <h4 className="text-white font-bold text-xs mb-0.5">{isArabic ? 'فيلا بارك الخبر' : 'Villa Park Al Khobar'}</h4>
                  <span className="text-[10px] text-slate-400">{isArabic ? 'طريق الملك فهد، التحلية، ٣٤٧١٦' : 'King Fahd Road, At Tahliyah, 34716'}</span>
                </div>
                <a
                  href="https://maps.google.com/?q=King+Fahd+Road,+At+Tahliyah,+Al+Khobar+Saudi+Arabia"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-[#D4AF37] text-black font-bold text-xs rounded transition-all hover:bg-[#F3E5AB]"
                >
                  {isArabic ? 'فتح الخرائط الرقمية' : 'Launch Navigation'}
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= INSTANT WHATSAPP DIRECT CALL CTA ================= */}
      <section className="py-16 bg-gradient-to-r from-[#25D366]/10 to-transparent border-t border-[#2A1B4B]/30">
        <div className="max-w-4xl mx-auto px-4 text-center" dir={isArabic ? 'rtl' : 'ltr'}>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#25D366]/20 border border-[#25D366]/50 rounded-full text-[#25D366] text-xs font-semibold mb-4">
            <MessageSquare className="w-4 h-4" />
            <span>{isArabic ? 'دعم سريع ومباشر' : 'Instant Chat Support'}</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2 font-luxury">
            {isArabic ? 'تواصل معنا مباشرة عبر واتساب' : 'Direct Conversation via WhatsApp'}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto mb-6">
            {isArabic
              ? 'اضغط للتحدث مباشرة مع موظف الاستقبال لتنظيم مواعيد الدخول والخروج أو حجز جناحك فوراً.'
              : 'Tap to instantly trigger a private chat with our front-desk manager to expedite check-in or checkout details.'}
          </p>
          <a
            href="https://wa.me/966566043568?text=السلام%20عليكم%20ورحمة%20الله%20أود%20الاستفسار%20عن%20حجز%20شقة%20في%20مجمع%20فيلا%20بارك"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm rounded-xl transition-all duration-300 hover:scale-102 active:scale-98 shadow-md hover:shadow-[0_4px_20px_rgba(37,211,102,0.3)]"
          >
            <MessageSquare className="w-5 h-5 shrink-0" />
            <span>{isArabic ? 'افتح محادثة واتساب الآن' : 'Start WhatsApp Chat'}</span>
          </a>
        </div>
      </section>

    </div>
  );
}
