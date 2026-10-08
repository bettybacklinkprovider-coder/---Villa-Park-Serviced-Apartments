import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, Mail, Users, CheckCircle, Calculator, Sparkles, Building2 } from 'lucide-react';
import { APARTMENTS_DATA } from '../data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  isArabic: boolean;
  preselectedApartmentId?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  isArabic,
  preselectedApartmentId = 'deluxe',
}: BookingModalProps) {
  const [apartmentId, setApartmentId] = useState(preselectedApartmentId);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  const [totalNights, setTotalNights] = useState<number | null>(null);

  useEffect(() => {
    if (preselectedApartmentId) {
      setApartmentId(preselectedApartmentId);
    }
  }, [preselectedApartmentId]);

  // Set default dates (today and tomorrow)
  useEffect(() => {
    if (isOpen) {
      const today = new Date();
      const tomorrow = new Date();
      tomorrow.setDate(today.getDate() + 1);

      const formatYMD = (d: Date) => d.toISOString().split('T')[0];
      setCheckIn(formatYMD(today));
      setCheckOut(formatYMD(tomorrow));
      setIsSubmitted(false);
      setErrors({});
      setFullName('');
      setPhone('');
      setEmail('');
      setGuests(1);
    }
  }, [isOpen]);

  // Live Math calculation for stay nights & total price
  useEffect(() => {
    if (checkIn && checkOut && apartmentId) {
      const d1 = new Date(checkIn);
      const d2 = new Date(checkOut);
      const diffTime = d2.getTime() - d1.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      const apt = APARTMENTS_DATA.find((a) => a.id === apartmentId);
      if (apt && diffDays > 0) {
        const rate = parseInt(apt.priceEstimate.replace(/[^0-9]/g, ''), 10);
        setTotalNights(diffDays);
        setTotalPrice(diffDays * rate);
      } else {
        setTotalNights(null);
        setTotalPrice(null);
      }
    } else {
      setTotalNights(null);
      setTotalPrice(null);
    }
  }, [checkIn, checkOut, apartmentId]);

  if (!isOpen) return null;

  const selectedApt = APARTMENTS_DATA.find((a) => a.id === apartmentId) || APARTMENTS_DATA[0];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = isArabic ? 'يرجى إدخال الاسم الكامل ثنائياً على الأقل' : 'Please enter your full name';
    }
    if (!phone.trim()) {
      newErrors.phone = isArabic ? 'يرجى إدخال رقم الهاتف للتواصل' : 'Please enter a contact number';
    } else if (!/^(05|5|\+9665)[0-9]{8}$/.test(phone.replace(/\s+/g, ''))) {
      newErrors.phone = isArabic ? 'يرجى إدخال رقم جوال سعودي صحيح (مثال: 0566043568)' : 'Please enter a valid Saudi phone (e.g., 0566043568)';
    }
    if (!email.trim()) {
      newErrors.email = isArabic ? 'يرجى إدخال البريد الإلكتروني لإرسال التأكيد' : 'Please enter an email address';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = isArabic ? 'صيغة البريد الإلكتروني غير صحيحة' : 'Invalid email format';
    }

    if (totalNights && totalNights <= 0) {
      newErrors.dates = isArabic ? 'تاريخ تسجيل المغادرة يجب أن يكون بعد تاريخ الدخول' : 'Check-out date must be after check-in date';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Generate random luxury booking reference
    const ref = `VP-${Math.floor(100000 + Math.random() * 900000)}`;

    // Save to local database for Admin Dashboard tracking
    const newBooking = {
      id: ref,
      ref,
      apartmentId,
      checkIn,
      checkOut,
      fullName,
      phone,
      email,
      guests,
      totalPrice,
      totalNights,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    try {
      const existing = JSON.parse(localStorage.getItem('villa_park_bookings') || '[]');
      existing.unshift(newBooking);
      localStorage.setItem('villa_park_bookings', JSON.stringify(existing));
    } catch (e) {
      console.error('Error saving booking locally:', e);
    }

    setBookingRef(ref);
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 overflow-y-auto">
      {/* Dark luxury backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#110A21] border border-[#2A1B4B] rounded-2xl overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.8)] transition-all transform z-10 gold-border-glow">
        
        {/* Luxury Top Header Line with golden gradient indicator */}
        <div className="h-1 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] w-full" />

        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-[#D4AF37] bg-[#1C1232] hover:bg-[#2A1B4B] p-2 rounded-xl transition-all duration-300"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleBookingSubmit} className="p-6 sm:p-8 text-right" dir={isArabic ? 'rtl' : 'ltr'}>
            
            {/* Header Title */}
            <div className="mb-6">
              <span className="text-[10px] tracking-widest uppercase text-[#D4AF37] font-semibold font-luxury block mb-1">
                {isArabic ? 'حجوزات فيلا بارك الفاخرة' : 'VILLA PARK PREMIUM RESERVATIONS'}
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white font-luxury">
                {isArabic ? 'طلب حجز جناح مخدوم' : 'Request a Luxury Stay'}
              </h2>
            </div>

            {/* Error Message Summary */}
            {errors.dates && (
              <div className="mb-4 p-3 bg-red-950/40 border border-red-500/50 rounded-lg text-red-200 text-xs text-right">
                {errors.dates}
              </div>
            )}

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Column 1: Stay Configuration */}
              <div className="space-y-4">
                
                {/* Apartment Choice */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {isArabic ? 'اختر فئة الشقة المخدومة' : 'Select Apartment Type'}
                  </label>
                  <select
                    value={apartmentId}
                    onChange={(e) => setApartmentId(e.target.value)}
                    className="w-full bg-[#170E2B] border border-[#2A1B4B] focus:border-[#D4AF37] text-slate-100 rounded-lg px-3 py-2.5 text-sm focus:ring-1 focus:ring-[#D4AF37] transition-all outline-none"
                  >
                    {APARTMENTS_DATA.map((apt) => (
                      <option key={apt.id} value={apt.id}>
                        {isArabic ? apt.nameAr : apt.nameEn} - {isArabic ? apt.priceEstimate : `Est. ${apt.priceEstimate}/Night`}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Dates Selector Row */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {isArabic ? 'تاريخ الدخول' : 'Check-In Date'}
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={checkIn}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full bg-[#170E2B] border border-[#2A1B4B] focus:border-[#D4AF37] text-slate-100 rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-[#D4AF37] transition-all outline-none text-right font-sans-en"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {isArabic ? 'تاريخ المغادرة' : 'Check-Out Date'}
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      min={checkIn || new Date().toISOString().split('T')[0]}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-[#170E2B] border border-[#2A1B4B] focus:border-[#D4AF37] text-slate-100 rounded-lg px-3 py-2 text-xs focus:ring-1 focus:ring-[#D4AF37] transition-all outline-none text-right font-sans-en"
                      required
                    />
                  </div>
                </div>

                {/* Live math Calculator Panel */}
                <div className="bg-[#1C1232]/50 border border-[#2A1B4B] p-4 rounded-xl flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] mb-2">
                    <Calculator className="w-4 h-4" />
                    <span>{isArabic ? 'تفاصيل السعر التقديري' : 'Estimated Pricing Details'}</span>
                  </div>
                  {totalNights && totalPrice ? (
                    <div className="space-y-1.5 text-xs text-slate-300">
                      <div className="flex justify-between items-center" dir="ltr">
                        <span className="font-sans-en text-[#D4AF37] font-semibold">{totalNights} {isArabic ? 'ليالي' : 'Nights'}</span>
                        <span>{isArabic ? 'عدد الليالي:' : 'Total Stay:'}</span>
                      </div>
                      <div className="flex justify-between items-center" dir="ltr">
                        <span className="font-sans-en text-white font-bold text-sm">{totalPrice} {isArabic ? 'ريال سعودي' : 'SAR'}</span>
                        <span>{isArabic ? 'الإجمالي التقريبي للغرفة:' : 'Estimated Room Total:'}</span>
                      </div>
                      <span className="block text-[10px] text-slate-500 mt-2 text-right">
                        {isArabic ? '* السعر النهائي يخضع للتوفر والضريبة المضافة عند التأكيد' : '* Final pricing will be calculated upon verification.'}
                      </span>
                    </div>
                  ) : (
                    <span className="text-[11px] text-slate-400">
                      {isArabic ? 'يرجى إدخال تواريخ صحيحة لحساب السعر' : 'Please select valid check-in and check-out dates.'}
                    </span>
                  )}
                </div>

              </div>

              {/* Column 2: Guest Details */}
              <div className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {isArabic ? 'الاسم الكامل للضيف' : 'Lead Guest Full Name'}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={isArabic ? 'الاسم الثنائي (مثال: أحمد الغامدي)' : 'e.g. Abdullah Al-Harbi'}
                      className={`w-full bg-[#170E2B] border ${errors.fullName ? 'border-red-500' : 'border-[#2A1B4B]'} focus:border-[#D4AF37] text-slate-100 rounded-lg px-3 py-2.5 text-sm focus:ring-1 focus:ring-[#D4AF37] transition-all outline-none`}
                    />
                    {errors.fullName && <span className="text-[10px] text-red-400 mt-1 block">{errors.fullName}</span>}
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {isArabic ? 'رقم الجوال (جوال سعودي)' : 'Contact Phone Number (Saudi prefered)'}
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={isArabic ? '05xxxxxxxx' : 'e.g. 0566043568'}
                    className={`w-full bg-[#170E2B] border ${errors.phone ? 'border-red-500' : 'border-[#2A1B4B]'} focus:border-[#D4AF37] text-slate-100 rounded-lg px-3 py-2.5 text-sm focus:ring-1 focus:ring-[#D4AF37] transition-all outline-none font-sans-en text-left`}
                    dir="ltr"
                  />
                  {errors.phone && <span className="text-[10px] text-red-400 mt-1 block">{errors.phone}</span>}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {isArabic ? 'البريد الإلكتروني' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. guest@example.com"
                    className={`w-full bg-[#170E2B] border ${errors.email ? 'border-red-500' : 'border-[#2A1B4B]'} focus:border-[#D4AF37] text-slate-100 rounded-lg px-3 py-2.5 text-sm focus:ring-1 focus:ring-[#D4AF37] transition-all outline-none font-sans-en text-left`}
                    dir="ltr"
                  />
                  {errors.email && <span className="text-[10px] text-red-400 mt-1 block">{errors.email}</span>}
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {isArabic ? 'عدد الضيوف' : 'Number of Guests'}
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-10 h-10 rounded-lg bg-[#170E2B] hover:bg-[#2A1B4B] border border-[#2A1B4B] hover:border-[#D4AF37]/50 flex items-center justify-center font-bold text-white transition-all"
                    >
                      -
                    </button>
                    <span className="w-10 text-center font-bold text-sm text-white font-sans-en">{guests}</span>
                    <button
                      type="button"
                      onClick={() => setGuests(Math.min(8, guests + 1))}
                      className="w-10 h-10 rounded-lg bg-[#170E2B] hover:bg-[#2A1B4B] border border-[#2A1B4B] hover:border-[#D4AF37]/50 flex items-center justify-center font-bold text-white transition-all"
                    >
                      +
                    </button>
                  </div>
                </div>

              </div>

            </div>

            {/* Submit Block */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A059] text-black font-bold text-sm rounded-xl shadow-lg transition-all hover:shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:scale-101 active:scale-99"
              >
                {isArabic ? 'إرسال طلب الحجز الترحيبي' : 'Submit Booking Request'}
              </button>
              
              <div className="flex items-center justify-center gap-2 mt-3 text-slate-400 text-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>
                  {isArabic 
                    ? 'سيقوم مستشار الضيافة لدينا بالاتصال بك خلال ١٥ دقيقة لتأكيد حجزك.' 
                    : 'Our concierge will call you within 15 mins to confirm your premium room.'}
                </span>
              </div>
            </div>

          </form>
        ) : (
          /* Receipt View - Ultra High-Fidelity Success Screen */
          <div className="p-6 sm:p-8 text-center animate-fade-in" dir={isArabic ? 'rtl' : 'ltr'}>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#2A1B4B]/80 border border-[#D4AF37] rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="w-10 h-10 text-[#D4AF37]" />
              </div>
            </div>

            <span className="text-[10px] tracking-widest uppercase text-[#D4AF37] font-semibold font-luxury block mb-1">
              {isArabic ? 'تم تأكيد استلام الطلب' : 'Request Received Successfully'}
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white font-luxury mb-2">
              {isArabic ? 'مرحباً بك في فيلا بارك' : 'Welcome to Villa Park'}
            </h2>
            <p className="text-slate-400 text-xs max-w-md mx-auto mb-6">
              {isArabic
                ? 'لقد تم إرسال معلومات الحجز الخاصة بكم مباشرة لمدير المجمع المخدم. سيتم الاتصال بك لتسليم مفتاح الدخول والتعليمات.'
                : 'Your booking parameters have been sent directly to our residence concierge desk. We will reach you shortly with access details.'}
            </p>

            {/* Virtual Luxury Ticket Receipt */}
            <div className="bg-[#170E2B] border border-[#2A1B4B] rounded-xl p-5 text-right relative overflow-hidden max-w-md mx-auto mb-8">
              
              {/* Decorative ticket side cuts */}
              <div className="absolute top-1/2 -left-3 w-6 h-6 bg-[#110A21] border border-[#2A1B4B] rounded-full" />
              <div className="absolute top-1/2 -right-3 w-6 h-6 bg-[#110A21] border border-[#2A1B4B] rounded-full" />
              
              <div className="flex justify-between items-center pb-3 border-b border-[#2A1B4B]/60 mb-4">
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-xs text-[#D4AF37] font-bold font-luxury">VILLA PARK</span>
                </div>
                <div className="text-xs font-mono font-bold text-slate-300">
                  REF: <span className="text-[#D4AF37]">{bookingRef}</span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">{isArabic ? 'الضيف:' : 'Guest Name:'}</span>
                  <span className="text-white font-semibold">{fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{isArabic ? 'رقم الهاتف:' : 'Phone Number:'}</span>
                  <span className="text-white font-mono" dir="ltr">{phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{isArabic ? 'الشقة المختارة:' : 'Room Category:'}</span>
                  <span className="text-white font-semibold">{isArabic ? selectedApt.nameAr : selectedApt.nameEn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{isArabic ? 'فترة الإقامة:' : 'Stay Duration:'}</span>
                  <span className="text-white font-mono" dir="ltr">
                    {checkIn} → {checkOut} ({totalNights} {isArabic ? 'ليالي' : 'Nights'})
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{isArabic ? 'عدد المرافقين:' : 'Guests Registered:'}</span>
                  <span className="text-white font-mono">{guests} {isArabic ? 'أشخاص' : 'People'}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-[#2A1B4B]/40">
                  <span className="text-slate-300 font-bold">{isArabic ? 'السعر المقدر للمبيت:' : 'Est. Total Price:'}</span>
                  <span className="text-[#D4AF37] font-bold font-mono text-sm">{totalPrice} {isArabic ? 'ريال' : 'SAR'}</span>
                </div>
              </div>

              {/* Pseudo QR code */}
              <div className="mt-5 flex justify-center pt-2">
                <div className="bg-white p-1.5 rounded-lg inline-block shadow-md">
                  <svg className="w-20 h-20 text-black" viewBox="0 0 100 100">
                    <rect width="100" height="100" fill="white" />
                    {/* Fake QR pattern */}
                    <path d="M5,5 h20 v20 h-20 z M5,10 h10 v10 h-10 z" fill="black" />
                    <path d="M75,5 h20 v20 h-20 z M80,10 h10 v10 h-10 z" fill="black" />
                    <path d="M5,75 h20 v20 h-20 z M5,80 h10 v10 h-10 z" fill="black" />
                    <path d="M40,40 h20 v20 h-20 z" fill="black" />
                    <path d="M10,40 h10 v10 h-10 z M30,10 h20 v10 h-20 z M60,15 h10 v20 h-10 z" fill="black" />
                    <path d="M80,45 h15 v5 h-15 z M75,60 h20 v10 h-20 z M85,85 h10 v10 h-10 z" fill="black" />
                    <path d="M35,75 h10 v10 h-10 z M50,85 h20 v10 h-20 z M45,65 h10 v5 h-10 z" fill="black" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex gap-3 justify-center max-w-sm mx-auto">
              <a
                href={`https://wa.me/966566043568?text=${encodeURIComponent(
                  `السلام عليكم، أود تأكيد حجز الجناح الخاص بي في فيلا بارك المخدومة بالخبر. المرجع: ${bookingRef}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 active:scale-95"
              >
                <span>{isArabic ? 'تأكيد عبر واتساب' : 'Confirm via WhatsApp'}</span>
              </a>

              <button
                onClick={onClose}
                className="flex-1 py-3 bg-[#170E2B] hover:bg-[#2A1B4B] border border-[#2A1B4B] text-slate-300 hover:text-white text-xs font-bold rounded-lg transition-all active:scale-95"
              >
                {isArabic ? 'إغلاق الصفحة' : 'Close Details'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
