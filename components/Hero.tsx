'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiMapPin, FiPhone, FiMessageCircle } from 'react-icons/fi';

interface HeroProps {
  onBookNow: () => void;
}

export default function Hero({ onBookNow }: HeroProps) {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full bg-black">
          <Image
            src="/images/hotel-outer-view.jpeg"
            alt="Hotel Grand Konark Ellora exterior"
            fill
            priority
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent opacity-80" />
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_10%,rgba(212,175,55,0.15),rgba(0,0,0,0.6))]"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl"
        >
          <p className="text-luxury-gold text-sm md:text-base uppercase tracking-[0.4em] mb-4 opacity-90">
            HOTEL GRAND KONARK ELLORA
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-luxury-ivory">
            STAY IN
            <span className="block text-luxury-gold">ELLORA&apos;S GLORY</span>
          </h1>
          <p className="text-base md:text-xl text-luxury-ivory mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Experience a cover-page luxury stay with grand architecture, rich interiors and effortless access to Ellora Caves, Grishneshwar Temple, and Aurangabad&apos;s sacred heritage.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button onClick={onBookNow} className="btn-primary">
            Book Now
          </button>
          <a
            href="https://wa.me/917030969695?text=Hello%20Grand%20Konark"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            WhatsApp Inquiry
          </a>
        </motion.div>

        <motion.p
          className="text-sm md:text-base text-luxury-gold opacity-80 mb-10 tracking-[0.24em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          A living cover-page presentation of luxury hospitality — elegant, bold, and immaculately layered.
        </motion.p>

        {/* Quick Actions */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center text-luxury-ivory"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center gap-2 hover:text-luxury-gold transition-colors cursor-pointer">
            <FiMapPin className="text-2xl" />
            <span>Near Ellora Caves & Grishneshwar Temple</span>
          </div>
          <div className="flex items-center gap-2 hover:text-luxury-gold transition-colors cursor-pointer">
            <FiPhone className="text-2xl" />
            <span>+91 7030969695</span>
          </div>
          <div className="flex items-center gap-2 hover:text-luxury-gold transition-colors cursor-pointer">
            <FiMessageCircle className="text-2xl" />
            <span>WhatsApp & Call Booking</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-luxury-gold text-sm uppercase tracking-wider">Scroll to Explore</p>
          <div className="w-6 h-10 border-2 border-luxury-gold rounded-full flex justify-center">
            <div className="w-1 h-2 bg-luxury-gold rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
