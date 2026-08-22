'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMessageCircle, FiPhone, FiCalendar } from 'react-icons/fi';

interface FloatingActionButtonsProps {
  onBookNow: () => void;
}

export default function FloatingActionButtons({ onBookNow }: FloatingActionButtonsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const buttons = [
    {
      icon: FiCalendar,
      label: 'Book Now',
      onClick: onBookNow,
      color: 'bg-luxury-gold',
      hoverColor: 'hover:bg-luxury-gold-light',
    },
    {
      icon: FiPhone,
      label: 'Call Us',
      onClick: () => window.location.href = 'tel:+917030969695',
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
    },
    {
      icon: FiMessageCircle,
      label: 'WhatsApp',
      onClick: () => window.open('https://wa.me/917030969695', '_blank'),
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-700',
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-30">
      <motion.div
        className="flex flex-col-reverse gap-4"
        animate={{ opacity: 1 }}
      >
        {/* Main Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-14 h-14 bg-luxury-gold text-luxury-charcoal rounded-full flex items-center justify-center font-bold text-xl shadow-lg hover:shadow-gold transition-all hover:bg-luxury-gold-light"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          +
        </motion.button>

        {/* Submenu Buttons */}
        {isExpanded && (
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {buttons.map((btn, index) => {
              const Icon = btn.icon;
              return (
                <motion.button
                  key={index}
                  onClick={() => {
                    btn.onClick();
                    setIsExpanded(false);
                  }}
                  className={`w-12 h-12 ${btn.color} ${btn.hoverColor} text-white rounded-full flex items-center justify-center shadow-lg transition-all`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ delay: index * 0.1 }}
                  title={btn.label}
                >
                  <Icon className="text-lg" />
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </motion.div>

      {/* Mobile Contact Bar - Visible only on small screens */}
      <motion.div
        className="md:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-t from-luxury-charcoal to-luxury-charcoal glass-effect border-t border-luxury-gold border-opacity-30 px-4 py-3"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
      >
        <div className="flex gap-2 justify-center">
          <a href="tel:+917030969695" className="btn-primary text-sm py-2">
            <FiPhone className="inline mr-2" />
            Call
          </a>
          <a
            href="https://wa.me/917030969695"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm py-2"
          >
            <FiMessageCircle className="inline mr-2" />
            WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  );
}
