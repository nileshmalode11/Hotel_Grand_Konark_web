'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: 'Double Bed Room AC',
    specialRequest: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const bookingMessage = `
*Hotel Booking Request*
Name: ${formData.name}
Phone: ${formData.phone}
Check-in: ${formData.checkIn}
Check-out: ${formData.checkOut}
Guests: ${formData.guests}
Room Type: ${formData.roomType}
Special Request: ${formData.specialRequest || 'None'}
    `.trim();

    const whatsappUrl = `https://wa.me/917030969695?text=${encodeURIComponent(bookingMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    onClose();
    setFormData({
      name: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      guests: '2',
      roomType: 'Double Bed Room AC',
      specialRequest: '',
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
          >
            <div className="glass-effect-light rounded-lg p-8">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-luxury-gold">Book Your Stay</h2>
                <button
                  onClick={onClose}
                  className="text-luxury-gold hover:text-luxury-gold-light transition-colors"
                >
                  <FiX className="text-2xl" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-luxury-gold text-sm mb-1 font-semibold">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-luxury-charcoal border border-luxury-gold border-opacity-30 rounded-lg px-4 py-2 text-luxury-ivory focus:border-luxury-gold outline-none transition-colors text-sm"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-luxury-gold text-sm mb-1 font-semibold">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-luxury-charcoal border border-luxury-gold border-opacity-30 rounded-lg px-4 py-2 text-luxury-ivory focus:border-luxury-gold outline-none transition-colors text-sm"
                    placeholder="+91 9999999999"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-luxury-gold text-sm mb-1 font-semibold">Check-in</label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="w-full bg-luxury-charcoal border border-luxury-gold border-opacity-30 rounded-lg px-4 py-2 text-luxury-ivory focus:border-luxury-gold outline-none transition-colors text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-luxury-gold text-sm mb-1 font-semibold">Check-out</label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="w-full bg-luxury-charcoal border border-luxury-gold border-opacity-30 rounded-lg px-4 py-2 text-luxury-ivory focus:border-luxury-gold outline-none transition-colors text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-luxury-gold text-sm mb-1 font-semibold">Guests</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-luxury-charcoal border border-luxury-gold border-opacity-30 rounded-lg px-4 py-2 text-luxury-ivory focus:border-luxury-gold outline-none transition-colors text-sm"
                    >
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-luxury-gold text-sm mb-1 font-semibold">Room Type</label>
                    <select
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleChange}
                      className="w-full bg-luxury-charcoal border border-luxury-gold border-opacity-30 rounded-lg px-4 py-2 text-luxury-ivory focus:border-luxury-gold outline-none transition-colors text-sm"
                    >
                      <option>Double Bed Room AC</option>
                      <option>Double Bed Room Non-AC</option>
                      <option>Triple Bed Room AC</option>
                      <option>Luxury Double Bed Room AC</option>
                      <option>Four Bed Room AC</option>
                      <option>Four Bed Room Non-AC</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-luxury-gold text-sm mb-1 font-semibold">Special Request</label>
                  <textarea
                    name="specialRequest"
                    value={formData.specialRequest}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-luxury-charcoal border border-luxury-gold border-opacity-30 rounded-lg px-4 py-2 text-luxury-ivory focus:border-luxury-gold outline-none transition-colors text-sm"
                    placeholder="Any special requests?"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full text-sm"
                >
                  Complete Booking via WhatsApp
                </button>
              </form>

              <p className="text-xs text-luxury-ivory opacity-60 text-center mt-4">
                We will confirm your stay through WhatsApp or a call on +91 7030969695.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
