import React, { useState } from 'react';
import { Menu, X, Globe, Phone } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  isArabic: boolean;
  setIsArabic: (value: boolean) => void;
  onOpenBooking: () => void;
}

export default function Header({
  currentPath,
  onNavigate,
  isArabic,
  setIsArabic,
  onOpenBooking,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = isArabic
    ? [
        { name: 'الرئيسية', path: '#/' },
        { name: 'الشقق المخدومة', path: '#/apartments' },
        { name: 'الخدمات والمرافق', path: '#/amenities' },
        { name: 'اتصل بنا', path: '#/contact' },
      ]
    : [
        { name: 'Home', path: '#/' },
        { name: 'Apartments', path: '#/apartments' },
        { name: 'Amenities', path: '#/amenities' },
        { name: 'Contact Us', path: '#/contact' },
      ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0B0616]/95 backdrop-blur-md border-b border-[#2A1B4B] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Zone - Elegant Arabic & English combination based on current active language */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavClick('#/')}
              className={`flex flex-col justify-center group focus:outline-none ${isArabic ? 'items-start text-right' : 'items-start text-left'}`}
            >
              <span className="text-xl sm:text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#C5A059] font-luxury group-hover:scale-102 transition-transform duration-300">
                فيلا بارك
              </span>
              <span className="text-[10px] tracking-widest text-[#C5A059] font-luxury font-medium uppercase">
                Villa Park Serviced Apartments
              </span>
            </button>
          </div>

          {/* Nav Links - Center Zone (Desktop only) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`relative py-2 text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                    isActive
                      ? 'text-[#D4AF37]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F3E5AB] to-[#D4AF37] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions Zone - Right/Left depending on RTL (Desktop & Tablet) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Clickable Mobile Friendly Phone Action */}
            <a
              href="tel:+966566043568"
              className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-300 hover:text-[#D4AF37] border border-[#2A1B4B] hover:border-[#D4AF37]/50 rounded-lg transition-all duration-300 font-sans-en font-medium"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>+966 56 604 3568</span>
            </a>

            {/* Language Toggle */}
            <button
              onClick={() => setIsArabic(!isArabic)}
              className="p-2 text-slate-300 hover:text-[#D4AF37] hover:bg-[#2A1B4B]/30 rounded-lg transition-all duration-300 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider"
              aria-label="Switch Language"
            >
              <Globe className="w-4 h-4 text-[#D4AF37]" />
              <span>{isArabic ? 'English' : 'عربي'}</span>
            </button>

            {/* Book Now Primary Button */}
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 text-xs font-bold tracking-wider rounded-lg transition-all duration-300 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] hover:from-[#E2BF4E] hover:to-[#D4AF37] text-black shadow-[0_4px_14px_rgba(212,175,55,0.2)] hover:shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:scale-103 whitespace-nowrap active:scale-95"
            >
              {isArabic ? 'احجز الآن' : 'Book Your Stay'}
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Language Switch for Mobile header directly */}
            <button
              onClick={() => setIsArabic(!isArabic)}
              className="p-2 text-slate-300 hover:text-[#D4AF37] rounded-lg transition-all"
              title="Change Language"
            >
              <Globe className="w-5 h-5 text-[#D4AF37]" />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 hover:text-[#D4AF37] bg-[#170E2B] border border-[#2A1B4B] rounded-lg transition-all"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0F0A1E] border-b border-[#2A1B4B] animate-fade-in-down">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`block w-full py-3 px-4 text-right text-sm font-medium rounded-lg transition-all ${
                    isActive
                      ? 'bg-[#2A1B4B] text-[#D4AF37] border-r-4 border-[#D4AF37]'
                      : 'text-slate-300 hover:bg-[#170E2B] hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}

            <div className="pt-4 border-t border-[#2A1B4B] flex flex-col gap-3">
              <a
                href="tel:+966566043568"
                className="flex items-center justify-center gap-2 py-3 border border-[#2A1B4B] rounded-lg text-slate-300 text-sm font-sans-en font-medium"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>+966 56 604 3568</span>
              </a>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black font-bold text-sm rounded-lg shadow-md text-center active:scale-95 transition-all"
              >
                {isArabic ? 'احجز الآن' : 'Book Your Stay'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
