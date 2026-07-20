'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import RoomShowcase from '@/components/RoomShowcase';
import RestaurantSection from '@/components/RestaurantSection';
import AttractionGrid from '@/components/AttractionGrid';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import BookingModal from '@/components/BookingModal';
import FloatingActionButtons from '@/components/FloatingActionButtons';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="overflow-hidden">
      <Header onBookNow={() => setIsBookingOpen(true)} />
      <Hero onBookNow={() => setIsBookingOpen(true)} />
      <About />
      <WhyChooseUs />
      <RoomShowcase />
      <RestaurantSection />
      <AttractionGrid />
      <Gallery />
      <Testimonials />
      <Contact onBookNow={() => setIsBookingOpen(true)} />
      <Footer />
      
      {isBookingOpen && (
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />
      )}
      
      <FloatingActionButtons onBookNow={() => setIsBookingOpen(true)} />
    </main>
  );
}
