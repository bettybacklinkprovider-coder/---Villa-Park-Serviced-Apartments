import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import Home from './pages/Home';
import Apartments from './pages/Apartments';
import Amenities from './pages/Amenities';
import Contact from './pages/Contact';

export default function App() {
  const [currentPath, setCurrentPath] = useState('#/');
  const [isArabic, setIsArabic] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState('deluxe');

  // Handle Hash Routing and sync with browser back/forward buttons
  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash || '#/';
      setCurrentPath(hash);
      window.scrollTo(0, 0);
    };

    // Initialize routing hash if not set
    if (!window.location.hash) {
      window.location.hash = '#/';
    } else {
      syncHash();
    }

    window.addEventListener('hashchange', syncHash);
    return () => {
      window.removeEventListener('hashchange', syncHash);
    };
  }, []);

  const handleNavigate = (path: string) => {
    window.location.hash = path;
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleOpenBookingWithRoom = (roomId: string) => {
    setSelectedRoomId(roomId);
    setIsBookingOpen(true);
  };

  const handleOpenBooking = () => {
    setSelectedRoomId('deluxe');
    setIsBookingOpen(true);
  };

  // Render the appropriate page depending on current path routing state
  const renderPage = () => {
    switch (currentPath) {
      case '#/':
      case '#':
        return (
          <Home
            onNavigate={handleNavigate}
            isArabic={isArabic}
            onOpenBookingWithRoom={handleOpenBookingWithRoom}
          />
        );
      case '#/apartments':
        return (
          <Apartments
            isArabic={isArabic}
            onOpenBookingWithRoom={handleOpenBookingWithRoom}
          />
        );
      case '#/amenities':
        return (
          <Amenities
            isArabic={isArabic}
            onOpenBooking={handleOpenBooking}
          />
        );
      case '#/contact':
        return (
          <Contact
            isArabic={isArabic}
            onOpenBooking={handleOpenBooking}
          />
        );
      default:
        return (
          <Home
            onNavigate={handleNavigate}
            isArabic={isArabic}
            onOpenBookingWithRoom={handleOpenBookingWithRoom}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0616] text-slate-100" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Premium responsive Header Navigation with single element Brand branding */}
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        isArabic={isArabic}
        setIsArabic={setIsArabic}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main content body rendering based on Hash path */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Premium responsive Footer with quick links, contacts, address & back to top */}
      <Footer
        onNavigate={handleNavigate}
        isArabic={isArabic}
        onOpenBooking={handleOpenBooking}
      />

      {/* Central Booking Modal requesting room type, dates, and client details */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        isArabic={isArabic}
        preselectedApartmentId={selectedRoomId}
      />
    </div>
  );
}
