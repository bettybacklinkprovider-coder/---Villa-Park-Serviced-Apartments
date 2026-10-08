import React, { useState, useEffect } from 'react';
import { 
  Calendar, Users, Trash2, Check, X, ShieldAlert, Database, Plus, RefreshCw, 
  BarChart3, Mail, Phone, Clock, DollarSign, ArrowRight, Eye, User, Sparkles
} from 'lucide-react';
import { APARTMENTS_DATA } from '../data';

interface AdminProps {
  isArabic: boolean;
}

interface Booking {
  id: string;
  ref: string;
  apartmentId: string;
  checkIn: string;
  checkOut: string;
  fullName: string;
  phone: string;
  email: string;
  guests: number;
  totalPrice: number | null;
  totalNights: number | null;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  status: 'unread' | 'read';
  createdAt: string;
}

export default function Admin({ isArabic }: AdminProps) {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [activeTab, setActiveTab] = useState<'bookings' | 'inquiries'>('bookings');
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [filterRoom, setFilterRoom] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Load data from localStorage on mount
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const storedBookings = localStorage.getItem('villa_park_bookings');
    const storedInquiries = localStorage.getItem('villa_park_contacts');
    
    if (storedBookings) {
      setBookings(JSON.parse(storedBookings));
    } else {
      setBookings([]);
    }

    if (storedInquiries) {
      setInquiries(JSON.parse(storedInquiries));
    } else {
      setInquiries([]);
    }
  };

  // Generate beautiful premium demo data for instant testing
  const generateDemoData = () => {
    const demoBookings: Booking[] = [
      {
        id: 'VP-842915',
        ref: 'VP-842915',
        apartmentId: 'suite',
        checkIn: '2026-10-12',
        checkOut: '2026-10-15',
        fullName: 'فيصل محمد الحارثي',
        phone: '0566043568',
        email: 'faisal.harbi@domain.sa',
        guests: 3,
        totalPrice: 3600,
        totalNights: 3,
        status: 'confirmed',
        createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
      },
      {
        id: 'VP-102938',
        ref: 'VP-102938',
        apartmentId: 'deluxe',
        checkIn: '2026-10-14',
        checkOut: '2026-10-18',
        fullName: 'أحمد بن عبد العزيز الغامدي',
        phone: '0543210987',
        email: 'ahmed.g@gmail.com',
        guests: 2,
        totalPrice: 1800,
        totalNights: 4,
        status: 'pending',
        createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
      },
      {
        id: 'VP-739104',
        ref: 'VP-739104',
        apartmentId: 'family',
        checkIn: '2026-10-20',
        checkOut: '2026-10-25',
        fullName: 'سارة عبد الله الشمري',
        phone: '0501234567',
        email: 'sara.sh@outlook.com',
        guests: 5,
        totalPrice: 4250,
        totalNights: 5,
        status: 'pending',
        createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
      },
      {
        id: 'VP-382910',
        ref: 'VP-382910',
        apartmentId: 'executive',
        checkIn: '2026-10-10',
        checkOut: '2026-10-12',
        fullName: 'عبد الرحمن القحطاني',
        phone: '0555554444',
        email: 'al.qahtani@saudibusiness.com',
        guests: 1,
        totalPrice: 1200,
        totalNights: 2,
        status: 'confirmed',
        createdAt: new Date(Date.now() - 3600000 * 48).toISOString(),
      }
    ];

    const demoInquiries: Inquiry[] = [
      {
        id: 'CI-3029',
        name: 'خالد ممدوح الدوسري',
        phone: '0567891234',
        email: 'khalid.d@yahoo.com',
        message: 'السلام عليكم، هل تتوفر لديكم خدمات التوصيل من مطار الملك فهد الدولي بالدمام إلى شقق الخبر؟ وما هي الأسعار التقريبية للجناح الرئاسي للإقامة الطويلة لمدة شهر؟',
        status: 'unread',
        createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
      },
      {
        id: 'CI-1849',
        name: 'أميرة عبد اللطيف السديري',
        phone: '0598765432',
        email: 'amira.s@gmail.com',
        message: 'أود الاستفسار عن توفر سرير أطفال إضافي في الشقة العائلية وهل يوجد حواجز حماية للأدراج والزوايا في الشقة؟ شكراً لتعاونكم.',
        status: 'read',
        createdAt: new Date(Date.now() - 3600000 * 30).toISOString(),
      }
    ];

    localStorage.setItem('villa_park_bookings', JSON.stringify(demoBookings));
    localStorage.setItem('villa_park_contacts', JSON.stringify(demoInquiries));
    setBookings(demoBookings);
    setInquiries(demoInquiries);
  };

  // Clear database
  const clearDatabase = () => {
    if (window.confirm(isArabic ? 'هل أنت متأكد من رغبتك في حذف كافة السجلات؟' : 'Are you sure you want to delete all records?')) {
      localStorage.removeItem('villa_park_bookings');
      localStorage.removeItem('villa_park_contacts');
      setBookings([]);
      setInquiries([]);
      setSelectedBooking(null);
      setSelectedInquiry(null);
    }
  };

  // Change booking status
  const updateBookingStatus = (id: string, newStatus: 'confirmed' | 'cancelled') => {
    const updated = bookings.map(b => b.id === id ? { ...b, status: newStatus } : b);
    localStorage.setItem('villa_park_bookings', JSON.stringify(updated));
    setBookings(updated);
    if (selectedBooking?.id === id) {
      setSelectedBooking({ ...selectedBooking, status: newStatus });
    }
  };

  // Delete booking
  const deleteBooking = (id: string) => {
    if (window.confirm(isArabic ? 'هل تريد حذف هذا الحجز نهائياً؟' : 'Do you want to permanently delete this booking?')) {
      const updated = bookings.filter(b => b.id !== id);
      localStorage.setItem('villa_park_bookings', JSON.stringify(updated));
      setBookings(updated);
      if (selectedBooking?.id === id) {
        setSelectedBooking(null);
      }
    }
  };

  // Mark inquiry as read
  const markInquiryRead = (id: string) => {
    const updated = inquiries.map(inq => inq.id === id ? { ...inq, status: 'read' as const } : inq);
    localStorage.setItem('villa_park_contacts', JSON.stringify(updated));
    setInquiries(updated);
    if (selectedInquiry?.id === id) {
      setSelectedInquiry({ ...selectedInquiry, status: 'read' });
    }
  };

  // Delete inquiry
  const deleteInquiry = (id: string) => {
    if (window.confirm(isArabic ? 'هل تريد حذف هذا الاستفسار نهائياً؟' : 'Do you want to permanently delete this inquiry?')) {
      const updated = inquiries.filter(inq => inq.id !== id);
      localStorage.setItem('villa_park_contacts', JSON.stringify(updated));
      setInquiries(updated);
      if (selectedInquiry?.id === id) {
        setSelectedInquiry(null);
      }
    }
  };

  // Calculations for KPI Cards
  const totalBookingsCount = bookings.length;
  const pendingBookingsCount = bookings.filter(b => b.status === 'pending').length;
  const totalRevenue = bookings
    .filter(b => b.status === 'confirmed')
    .reduce((sum, b) => sum + (b.totalPrice || 0), 0);
  const pendingInquiriesCount = inquiries.filter(inq => inq.status === 'unread').length;

  // Filter & Search Bookings
  const filteredBookings = bookings.filter(b => {
    const matchesRoom = filterRoom === 'all' || b.apartmentId === filterRoom;
    const matchesSearch = 
      b.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.phone.includes(searchQuery) ||
      b.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (b.email && b.email.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRoom && matchesSearch;
  });

  // Filter & Search Inquiries
  const filteredInquiries = inquiries.filter(inq => {
    return (
      inq.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.phone.includes(searchQuery) ||
      inq.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (inq.email && inq.email.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <div className="relative bg-[#0B0616] min-h-screen text-slate-100">
      <div className="noise-overlay" />

      {/* Header Banner */}
      <section className="relative py-12 border-b border-[#2A1B4B] bg-[#110A21]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6" dir={isArabic ? 'rtl' : 'ltr'}>
          <div className={isArabic ? 'text-right' : 'text-left'}>
            <div className="flex items-center gap-2 mb-1.5 justify-start md:justify-start">
              <ShieldAlert className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-[10px] tracking-widest text-[#D4AF37] uppercase font-bold font-luxury">
                {isArabic ? 'نظام إدارة مجمع فيلا بارك المخدم' : 'VILLA PARK INTERNAL MANAGEMENT CONSOLE'}
              </span>
            </div>
            <h1 className="text-3xl font-bold font-luxury text-white tracking-tight">
              {isArabic ? 'لوحة تحكم الإدارة الفندقية' : 'Staff Operations Panel'}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3 justify-start">
            <button
              onClick={generateDemoData}
              className="px-4 py-2 bg-[#2A1B4B] hover:bg-[#D4AF37] hover:text-black text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Database className="w-3.5 h-3.5" />
              <span>{isArabic ? 'توليد بيانات عينة تجريبية' : 'Generate Premium Demo'}</span>
            </button>
            <button
              onClick={clearDatabase}
              className="px-4 py-2 bg-red-950/40 hover:bg-red-900/60 border border-red-500/30 text-red-300 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>{isArabic ? 'تصفير السجلات' : 'Clear Database'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* KPI Cards */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" dir={isArabic ? 'rtl' : 'ltr'}>
          
          <div className="bg-[#170E2B] border border-[#2A1B4B] p-5 rounded-xl text-right">
            <div className="flex justify-between items-start">
              <div className="p-2.5 rounded-lg bg-[#2A1B4B]/50 text-[#D4AF37]">
                <Calendar className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold font-sans-en text-white">{totalBookingsCount}</span>
            </div>
            <h3 className="text-xs text-slate-400 font-semibold mt-4 mb-1">
              {isArabic ? 'إجمالي طلبات الحجز' : 'Total Bookings'}
            </h3>
            <span className="text-[10px] text-slate-500 block">
              {isArabic ? `${pendingBookingsCount} بانتظار التأكيد` : `${pendingBookingsCount} stay requests pending`}
            </span>
          </div>

          <div className="bg-[#170E2B] border border-[#2A1B4B] p-5 rounded-xl text-right">
            <div className="flex justify-between items-start">
              <div className="p-2.5 rounded-lg bg-[#2A1B4B]/50 text-emerald-400">
                <DollarSign className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold font-sans-en text-emerald-400">
                {totalRevenue} <span className="text-xs font-semibold text-slate-400">ريال</span>
              </span>
            </div>
            <h3 className="text-xs text-slate-400 font-semibold mt-4 mb-1">
              {isArabic ? 'الإيرادات المؤكدة التقريبية' : 'Confirmed Booking Revenue'}
            </h3>
            <span className="text-[10px] text-slate-500 block">
              {isArabic ? 'من الحجوزات المؤكدة فقط' : 'From confirmed requests only'}
            </span>
          </div>

          <div className="bg-[#170E2B] border border-[#2A1B4B] p-5 rounded-xl text-right">
            <div className="flex justify-between items-start">
              <div className="p-2.5 rounded-lg bg-[#2A1B4B]/50 text-[#D4AF37]">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold font-sans-en text-white">{inquiries.length}</span>
            </div>
            <h3 className="text-xs text-slate-400 font-semibold mt-4 mb-1">
              {isArabic ? 'إجمالي رسائل الاستفسار' : 'Contact Inquiries'}
            </h3>
            <span className="text-[10px] text-[#D4AF37] block font-semibold">
              {isArabic ? `${pendingInquiriesCount} رسائل غير مقروءة` : `${pendingInquiriesCount} unread messages`}
            </span>
          </div>

          <div className="bg-[#170E2B] border border-[#2A1B4B] p-5 rounded-xl text-right">
            <div className="flex justify-between items-start">
              <div className="p-2.5 rounded-lg bg-[#2A1B4B]/50 text-[#D4AF37]">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold font-sans-en text-white">4</span>
            </div>
            <h3 className="text-xs text-slate-400 font-semibold mt-4 mb-1">
              {isArabic ? 'أجنحة المجمع النشطة بالخبر' : 'Active Suites Listed'}
            </h3>
            <span className="text-[10px] text-slate-500 block">
              {isArabic ? 'ديلوكس، تنفيذية، عائلية، جناح رئاسي' : 'Deluxe, Executive, Family, Suite'}
            </span>
          </div>

        </div>
      </section>

      {/* Main Operations Area */}
      <section className="py-2 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" dir={isArabic ? 'rtl' : 'ltr'}>
          
          {/* List & Filtering Block (Left or Right side depending on RTL) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Tab Swapping & Controls */}
            <div className="bg-[#110A21] border border-[#2A1B4B] p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Tab Selector */}
              <div className="flex bg-[#1C1232] p-1 rounded-lg w-full sm:w-auto">
                <button
                  onClick={() => { setActiveTab('bookings'); setSearchQuery(''); }}
                  className={`flex-1 sm:flex-initial px-5 py-2 text-xs font-semibold rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    activeTab === 'bookings' 
                      ? 'bg-[#D4AF37] text-black shadow' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>{isArabic ? 'طلبات الحجوزات' : 'Guest Bookings'}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${activeTab === 'bookings' ? 'bg-black/20 text-black' : 'bg-black/40 text-[#D4AF37]'}`}>
                    {bookings.length}
                  </span>
                </button>
                <button
                  onClick={() => { setActiveTab('inquiries'); setSearchQuery(''); }}
                  className={`flex-1 sm:flex-initial px-5 py-2 text-xs font-semibold rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    activeTab === 'inquiries' 
                      ? 'bg-[#D4AF37] text-black shadow' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span>{isArabic ? 'استفسارات وملاحظات' : 'Guest Messages'}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${activeTab === 'inquiries' ? 'bg-black/20 text-black' : 'bg-black/40 text-[#D4AF37]'}`}>
                    {inquiries.length}
                  </span>
                </button>
              </div>

              {/* Filtering Controls */}
              <div className="flex gap-3 w-full sm:w-auto">
                {activeTab === 'bookings' && (
                  <select
                    value={filterRoom}
                    onChange={(e) => setFilterRoom(e.target.value)}
                    className="bg-[#170E2B] border border-[#2A1B4B] text-slate-200 text-xs rounded-lg px-3 py-2 outline-none focus:border-[#D4AF37]"
                  >
                    <option value="all">{isArabic ? 'كافة الفئات' : 'All Rooms'}</option>
                    {APARTMENTS_DATA.map(apt => (
                      <option key={apt.id} value={apt.id}>{isArabic ? apt.nameAr : apt.nameEn}</option>
                    ))}
                  </select>
                )}

                <input
                  type="text"
                  placeholder={
                    activeTab === 'bookings' 
                      ? (isArabic ? 'ابحث باسم الضيف أو الجوال...' : 'Search guest, phone...')
                      : (isArabic ? 'ابحث في الرسائل والأسماء...' : 'Search content...')
                  }
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-[#170E2B] border border-[#2A1B4B] text-slate-200 text-xs rounded-lg px-3 py-2 outline-none focus:border-[#D4AF37] flex-1 sm:w-48"
                />
              </div>
            </div>

            {/* Bookings Display */}
            {activeTab === 'bookings' && (
              <div className="bg-[#170E2B] border border-[#2A1B4B] rounded-xl overflow-hidden shadow-xl">
                {filteredBookings.length === 0 ? (
                  <div className="p-12 text-center text-slate-500">
                    <Calendar className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                    <p className="text-sm font-semibold">{isArabic ? 'لا توجد طلبات حجوزات مطابقة' : 'No matching bookings found'}</p>
                    <p className="text-xs text-slate-600 mt-1">
                      {isArabic ? 'قم بتوليد بيانات تجريبية بالأعلى أو احجز عبر التطبيق' : 'Fill a booking form or click Generate Demo above'}
                    </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-right" dir={isArabic ? 'rtl' : 'ltr'}>
                      <thead className="bg-[#110A21] text-[11px] text-[#D4AF37] font-semibold uppercase tracking-wider border-b border-[#2A1B4B]">
                        <tr>
                          <th className="px-5 py-4">{isArabic ? 'المرجع والضيف' : 'Reference & Guest'}</th>
                          <th className="px-5 py-4">{isArabic ? 'الجناح / الشقة' : 'Apartment Category'}</th>
                          <th className="px-5 py-4">{isArabic ? 'التواريخ والليالي' : 'Dates / Nights'}</th>
                          <th className="px-5 py-4">{isArabic ? 'التكلفة التقريبية' : 'Price'}</th>
                          <th className="px-5 py-4">{isArabic ? 'حالة الطلب' : 'Status'}</th>
                          <th className="px-5 py-4 text-center">{isArabic ? 'الإجراءات' : 'Actions'}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#2A1B4B]/30 text-xs">
                        {filteredBookings.map((booking) => {
                          const apt = APARTMENTS_DATA.find(a => a.id === booking.apartmentId);
                          return (
                            <tr 
                              key={booking.id} 
                              className={`hover:bg-[#1C1232]/30 cursor-pointer transition-colors ${selectedBooking?.id === booking.id ? 'bg-[#1E123A]' : ''}`}
                              onClick={() => setSelectedBooking(booking)}
                            >
                              <td className="px-5 py-4">
                                <div className="font-bold text-white mb-0.5">{booking.fullName}</div>
                                <div className="text-[10px] text-slate-400 font-mono flex items-center gap-2">
                                  <span className="text-[#D4AF37] font-semibold">{booking.ref}</span>
                                  <span>·</span>
                                  <span>{booking.phone}</span>
                                </div>
                              </td>
                              <td className="px-5 py-4">
                                <span className="font-semibold text-slate-200">
                                  {isArabic ? apt?.nameAr : apt?.nameEn}
                                </span>
                                <span className="text-[10px] text-slate-400 block mt-0.5">
                                  {booking.guests} {isArabic ? 'ضيوف' : 'Guests'}
                                </span>
                              </td>
                              <td className="px-5 py-4 font-mono text-slate-300">
                                <div className="text-[11px]">{booking.checkIn} → {booking.checkOut}</div>
                                <div className="text-[10px] text-slate-500 mt-0.5">{booking.totalNights} {isArabic ? 'ليالي' : 'Nights'}</div>
                              </td>
                              <td className="px-5 py-4 font-bold text-slate-100 font-mono">
                                {booking.totalPrice} {isArabic ? 'ريال' : 'SAR'}
                              </td>
                              <td className="px-5 py-4">
                                <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold ${
                                  booking.status === 'confirmed' 
                                    ? 'bg-emerald-950/50 text-emerald-400 border border-emerald-500/30'
                                    : booking.status === 'cancelled'
                                    ? 'bg-red-950/50 text-red-400 border border-red-500/30'
                                    : 'bg-amber-950/50 text-amber-400 border border-amber-500/30'
                                }`}>
                                  {booking.status === 'confirmed' && (isArabic ? 'مؤكد' : 'Confirmed')}
                                  {booking.status === 'cancelled' && (isArabic ? 'ملغي' : 'Cancelled')}
                                  {booking.status === 'pending' && (isArabic ? 'قيد الانتظار' : 'Pending')}
                                </span>
                              </td>
                              <td className="px-5 py-4" onClick={(e) => e.stopPropagation()}>
                                <div className="flex items-center justify-center gap-1.5">
                                  {booking.status === 'pending' && (
                                    <>
                                      <button
                                        onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                                        className="p-1.5 bg-emerald-950/80 border border-emerald-500/30 hover:bg-emerald-800 text-emerald-400 rounded-lg transition-colors cursor-pointer"
                                        title={isArabic ? 'تأكيد الحجز الملوكي' : 'Confirm Stay'}
                                      >
                                        <Check className="w-3.5 h-3.5" />
                                      </button>
                                      <button
                                        onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                                        className="p-1.5 bg-red-950/80 border border-red-500/30 hover:bg-red-900 text-red-400 rounded-lg transition-colors cursor-pointer"
                                        title={isArabic ? 'إلغاء الطلب' : 'Cancel Stay'}
                                      >
                                        <X className="w-3.5 h-3.5" />
                                      </button>
                                    </>
                                  )}
                                  <button
                                    onClick={() => deleteBooking(booking.id)}
                                    className="p-1.5 bg-[#1C1232] hover:bg-red-900/40 hover:text-red-400 text-slate-400 rounded-lg border border-[#2A1B4B] transition-colors cursor-pointer"
                                    title={isArabic ? 'حذف السجل' : 'Delete Record'}
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* Inquiries Display */}
            {activeTab === 'inquiries' && (
              <div className="bg-[#170E2B] border border-[#2A1B4B] rounded-xl overflow-hidden shadow-xl">
                {filteredInquiries.length === 0 ? (
                  <div className="p-12 text-center text-slate-500">
                    <Mail className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                    <p className="text-sm font-semibold">{isArabic ? 'لا توجد استفسارات مطابقة' : 'No matching inquiries found'}</p>
                    <p className="text-xs text-slate-600 mt-1">
                      {isArabic ? 'لم تصل أي رسائل ضيوف حالياً.' : 'Your guest inbox is completely silent.'}
                    </p>
                  </div>
                ) : (
                  <div className="divide-y divide-[#2A1B4B]/30">
                    {filteredInquiries.map((inquiry) => (
                      <div 
                        key={inquiry.id}
                        className={`p-5 hover:bg-[#1C1232]/30 cursor-pointer transition-colors relative ${selectedInquiry?.id === inquiry.id ? 'bg-[#1E123A]' : ''} ${inquiry.status === 'unread' ? 'border-r-4 border-[#D4AF37]' : ''}`}
                        onClick={() => {
                          setSelectedInquiry(inquiry);
                          if (inquiry.status === 'unread') markInquiryRead(inquiry.id);
                        }}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
                          <div>
                            <span className="font-bold text-white text-sm">{inquiry.name}</span>
                            <span className="text-[10px] text-slate-400 font-mono block sm:inline sm:mr-3" dir="ltr">
                              {inquiry.phone} · {inquiry.email}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] text-slate-500 font-mono">
                              {new Date(inquiry.createdAt).toLocaleString(isArabic ? 'ar-SA' : 'en-US')}
                            </span>
                            
                            <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                              <button
                                onClick={() => deleteInquiry(inquiry.id)}
                                className="p-1 bg-[#110A21] hover:bg-red-950 hover:text-red-400 text-slate-400 rounded transition-all border border-[#2A1B4B] cursor-pointer"
                                title={isArabic ? 'حذف الرسالة' : 'Delete message'}
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>

                        <p className="text-slate-300 text-xs leading-relaxed line-clamp-2 pr-1">
                          {inquiry.message}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Details Sidebar panel (Left/Right side) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Displaying detailed select card info */}
            {activeTab === 'bookings' ? (
              <div className="bg-[#110A21] border border-[#2A1B4B] p-5 rounded-xl shadow-xl relative overflow-hidden gold-border-glow">
                <div className="h-1 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] absolute top-0 left-0 right-0" />
                
                <h3 className="text-sm font-bold text-[#D4AF37] font-luxury border-b border-[#2A1B4B]/80 pb-3 mb-4 flex items-center gap-1.5">
                  <Eye className="w-4 h-4" />
                  <span>{isArabic ? 'تفاصيل طلب حجز الضيف' : 'Live Booking Dossier'}</span>
                </h3>

                {selectedBooking ? (
                  <div className="space-y-4 text-xs">
                    
                    {/* Booking metadata */}
                    <div className="flex justify-between items-center bg-[#170E2B] p-3 rounded-lg border border-[#2A1B4B]/60">
                      <div>
                        <span className="text-[10px] text-slate-500 block">{isArabic ? 'مرجع التأكيد' : 'REF NUMBER'}</span>
                        <span className="text-sm font-bold text-[#D4AF37] font-mono">{selectedBooking.ref}</span>
                      </div>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold ${
                        selectedBooking.status === 'confirmed' 
                          ? 'bg-emerald-950/50 text-emerald-400 border border-emerald-500/30'
                          : selectedBooking.status === 'cancelled'
                          ? 'bg-red-950/50 text-red-400 border border-red-500/30'
                          : 'bg-amber-950/50 text-amber-400 border border-amber-500/30'
                      }`}>
                        {selectedBooking.status === 'confirmed' && (isArabic ? 'مؤكد' : 'Confirmed')}
                        {selectedBooking.status === 'cancelled' && (isArabic ? 'ملغي' : 'Cancelled')}
                        {selectedBooking.status === 'pending' && (isArabic ? 'بانتظار الموافقة' : 'Pending Verification')}
                      </span>
                    </div>

                    {/* Guest particulars */}
                    <div className="space-y-2">
                      <h4 className="font-bold text-white text-[11px] uppercase tracking-wider text-slate-400">
                        {isArabic ? 'تفاصيل الضيف الكريم' : 'Lead Guest Details'}
                      </h4>
                      <div className="bg-[#170E2B]/50 p-3 rounded-lg space-y-2 border border-[#2A1B4B]/30">
                        <div className="flex justify-between">
                          <span className="text-slate-500">{isArabic ? 'الاسم:' : 'Name:'}</span>
                          <span className="text-white font-semibold">{selectedBooking.fullName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">{isArabic ? 'الهاتف:' : 'Phone:'}</span>
                          <span className="text-white font-mono" dir="ltr">{selectedBooking.phone}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">{isArabic ? 'البريد:' : 'Email:'}</span>
                          <span className="text-white font-mono">{selectedBooking.email || '-'}</span>
                        </div>
                      </div>
                    </div>

                    {/* Stay Specifications */}
                    <div className="space-y-2">
                      <h4 className="font-bold text-white text-[11px] uppercase tracking-wider text-slate-400">
                        {isArabic ? 'تفاصيل ومعلومات المبيت' : 'Stay Specifications'}
                      </h4>
                      <div className="bg-[#170E2B]/50 p-3 rounded-lg space-y-2 border border-[#2A1B4B]/30">
                        <div className="flex justify-between">
                          <span className="text-slate-500">{isArabic ? 'الفئة المختارة:' : 'Room Type:'}</span>
                          <span className="text-white font-semibold">
                            {isArabic 
                              ? APARTMENTS_DATA.find(a => a.id === selectedBooking.apartmentId)?.nameAr 
                              : APARTMENTS_DATA.find(a => a.id === selectedBooking.apartmentId)?.nameEn}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">{isArabic ? 'تاريخ الدخول:' : 'Check-In:'}</span>
                          <span className="text-white font-mono">{selectedBooking.checkIn}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">{isArabic ? 'تاريخ المغادرة:' : 'Check-Out:'}</span>
                          <span className="text-white font-mono">{selectedBooking.checkOut}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">{isArabic ? 'مدة الإقامة:' : 'Total Stay:'}</span>
                          <span className="text-white font-bold">{selectedBooking.totalNights} {isArabic ? 'ليالي مبيت' : 'Nights'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">{isArabic ? 'عدد المرافقين:' : 'Guests:'}</span>
                          <span className="text-white">{selectedBooking.guests} {isArabic ? 'أشخاص' : 'People'}</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-[#2A1B4B]/40">
                          <span className="text-slate-300 font-bold">{isArabic ? 'السعر الإجمالي المقدر:' : 'Estimated Cost:'}</span>
                          <span className="text-[#D4AF37] font-bold font-mono text-sm">{selectedBooking.totalPrice} ريال</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Trigger actions */}
                    <div className="space-y-2.5 pt-2">
                      {selectedBooking.status === 'pending' && (
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => updateBookingStatus(selectedBooking.id, 'confirmed')}
                            className="py-2.5 bg-emerald-900/80 hover:bg-emerald-800 border border-emerald-500/40 text-emerald-200 font-bold rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer active:scale-95"
                          >
                            <Check className="w-4 h-4" />
                            <span>{isArabic ? 'تأكيد الحجز' : 'Confirm'}</span>
                          </button>
                          <button
                            onClick={() => updateBookingStatus(selectedBooking.id, 'cancelled')}
                            className="py-2.5 bg-red-950 hover:bg-red-900 border border-red-500/40 text-red-200 font-bold rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer active:scale-95"
                          >
                            <X className="w-4 h-4" />
                            <span>{isArabic ? 'إلغاء الطلب' : 'Cancel'}</span>
                          </button>
                        </div>
                      )}
                      
                      <div className="grid grid-cols-1 gap-2">
                        <a
                          href={`https://wa.me/${selectedBooking.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                            isArabic
                              ? `السلام عليكم ورحمة الله الأستاذ ${selectedBooking.fullName}، بخصوص طلب حجز الجناح الخاص بكم بمجمع فيلا بارك المخدم بالخبر الرقم المرجعي ${selectedBooking.ref}...`
                              : `Hello ${selectedBooking.fullName}, regarding your booking request at Villa Park Al Khobar (Ref: ${selectedBooking.ref})...`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-lg text-center transition-all flex items-center justify-center gap-1.5"
                        >
                          <Phone className="w-4 h-4" />
                          <span>{isArabic ? 'مراسلة عبر واتساب' : 'Contact on WhatsApp'}</span>
                        </a>
                      </div>
                    </div>

                  </div>
                ) : (
                  <div className="p-8 text-center text-slate-500 text-xs">
                    {isArabic 
                      ? 'يرجى اختيار حجز من القائمة لعرض تفاصيله الكاملة وإجراءات الضيافة.' 
                      : 'Select a guest request from the list to manage booking details and toggle confirmation status.'}
                  </div>
                )}
              </div>
            ) : (
              /* Message detail sidebar panel */
              <div className="bg-[#110A21] border border-[#2A1B4B] p-5 rounded-xl shadow-xl relative overflow-hidden gold-border-glow">
                <div className="h-1 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] absolute top-0 left-0 right-0" />
                
                <h3 className="text-sm font-bold text-[#D4AF37] font-luxury border-b border-[#2A1B4B]/80 pb-3 mb-4 flex items-center gap-1.5">
                  <Mail className="w-4 h-4" />
                  <span>{isArabic ? 'تفاصيل رسالة الضيف' : 'Message Contents'}</span>
                </h3>

                {selectedInquiry ? (
                  <div className="space-y-4 text-xs">
                    
                    <div className="bg-[#170E2B] p-3 rounded-lg border border-[#2A1B4B]/60">
                      <span className="text-[10px] text-slate-500 block">{isArabic ? 'مرجع الاستفسار' : 'MESSAGE ID'}</span>
                      <span className="text-sm font-bold text-[#D4AF37] font-mono">{selectedInquiry.id}</span>
                    </div>

                    {/* Sender profile card */}
                    <div className="space-y-2">
                      <h4 className="font-bold text-white text-[11px] uppercase tracking-wider text-slate-400">
                        {isArabic ? 'ملف مرسل الاستفسار' : 'Sender Identity'}
                      </h4>
                      <div className="bg-[#170E2B]/50 p-3 rounded-lg space-y-2 border border-[#2A1B4B]/30">
                        <div className="flex justify-between">
                          <span className="text-slate-500">{isArabic ? 'الاسم الكريم:' : 'Name:'}</span>
                          <span className="text-white font-semibold">{selectedInquiry.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">{isArabic ? 'الجوال:' : 'Phone:'}</span>
                          <span className="text-white font-mono" dir="ltr">{selectedInquiry.phone}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">{isArabic ? 'البريد:' : 'Email:'}</span>
                          <span className="text-white font-mono">{selectedInquiry.email || '-'}</span>
                        </div>
                      </div>
                    </div>

                    {/* Message detail block */}
                    <div className="space-y-2">
                      <h4 className="font-bold text-white text-[11px] uppercase tracking-wider text-slate-400">
                        {isArabic ? 'تفاصيل الاستفسار والملاحظة الكريمة' : 'Message Text'}
                      </h4>
                      <div className="bg-[#170E2B]/50 p-4 rounded-lg border border-[#2A1B4B]/30 text-slate-200 leading-relaxed whitespace-pre-wrap">
                        {selectedInquiry.message}
                      </div>
                    </div>

                    {/* Actions bar */}
                    <div className="space-y-2 pt-2">
                      <a
                        href={`https://wa.me/${selectedInquiry.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                          isArabic 
                            ? `مرحباً بك أستاذ ${selectedInquiry.name}، بخصوص تساؤلكم الكريم المرسل عبر موقع فيلا بارك الخبر المخدم...`
                            : `Hello ${selectedInquiry.name}, regarding your inquiry sent to Villa Park Al Khobar...`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-lg text-center transition-all flex items-center justify-center gap-1.5"
                      >
                        <Phone className="w-4 h-4" />
                        <span>{isArabic ? 'الرد عبر واتساب' : 'Reply on WhatsApp'}</span>
                      </a>
                    </div>

                  </div>
                ) : (
                  <div className="p-8 text-center text-slate-500 text-xs">
                    {isArabic 
                      ? 'يرجى اختيار رسالة أو استفسار من القائمة المقابلة لعرض المحتوى الكامل.' 
                      : 'Select an inquiry from the inbox on the left to read its message text and dispatch a reply.'}
                  </div>
                )}
              </div>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
