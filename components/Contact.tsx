'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiMessageCircle } from 'react-icons/fi';

interface ContactInfo {
  contact: {
    phone: string;
    email: string;
    whatsapp: string;
  };
  location: string;
  mapsUrl?: string;
}

interface ContactProps {
  onBookNow: () => void;
}

export default function Contact({ onBookNow }: ContactProps) {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    fetch('/data/hotel.json')
      .then(r => r.json())
      .then(data => setContactInfo({
        contact: data.contact,
        location: data.location,
        mapsUrl: data.mapsUrl,
      }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a server
    // For now, we'll just show a WhatsApp message
    const message = `Hello, I would like to inquire about: ${formData.subject}. ${formData.message}. Contact: ${formData.name} - ${formData.phone}`;
    const whatsappUrl = `https://wa.me/${contactInfo?.contact.whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (!contactInfo) return null;

  return (
    <section id="contact" className="bg-luxury-charcoal">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="text-center mb-16">
            <p className="text-luxury-gold text-lg tracking-widest mb-2">GET IN TOUCH</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-luxury-ivory opacity-80 max-w-2xl mx-auto">
              Have questions? We&apos;d love to hear from you. Reach out anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-luxury-gold">Contact Information</h3>
              </div>

              {/* Contact Methods */}
              <motion.a
                href={`tel:${contactInfo.contact.phone}`}
                variants={itemVariants}
                className="glass-effect p-6 rounded-lg hover:glass-effect-light transition-all group flex items-start gap-4"
                whileHover={{ x: 10 }}
              >
                <div className="text-2xl text-luxury-gold group-hover:text-luxury-gold-light mt-1">
                  <FiPhone />
                </div>
                <div>
                  <p className="font-bold text-luxury-gold group-hover:text-luxury-gold-light">
                    Phone
                  </p>
                  <p className="text-luxury-ivory opacity-80">
                    {contactInfo.contact.phone}
                  </p>
                </div>
              </motion.a>

              <motion.a
                href={`mailto:${contactInfo.contact.email}`}
                variants={itemVariants}
                className="glass-effect p-6 rounded-lg hover:glass-effect-light transition-all group flex items-start gap-4"
                whileHover={{ x: 10 }}
              >
                <div className="text-2xl text-luxury-gold group-hover:text-luxury-gold-light mt-1">
                  <FiMail />
                </div>
                <div>
                  <p className="font-bold text-luxury-gold group-hover:text-luxury-gold-light">
                    Email
                  </p>
                  <p className="text-luxury-ivory opacity-80">
                    {contactInfo.contact.email}
                  </p>
                </div>
              </motion.a>

              <motion.a
                href={`https://wa.me/${contactInfo.contact.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="glass-effect p-6 rounded-lg hover:glass-effect-light transition-all group flex items-start gap-4"
                whileHover={{ x: 10 }}
              >
                <div className="text-2xl text-luxury-gold group-hover:text-luxury-gold-light mt-1">
                  <FiMessageCircle />
                </div>
                <div>
                  <p className="font-bold text-luxury-gold group-hover:text-luxury-gold-light">
                    WhatsApp
                  </p>
                  <p className="text-luxury-ivory opacity-80">
                    {contactInfo.contact.whatsapp}
                  </p>
                </div>
              </motion.a>

              <motion.a
                href={contactInfo.mapsUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="glass-effect p-6 rounded-lg hover:glass-effect-light transition-all group flex items-start gap-4"
                whileHover={{ x: 10 }}
              >
                <div className="text-2xl text-luxury-gold group-hover:text-luxury-gold-light mt-1">
                  <FiMapPin />
                </div>
                <div>
                  <p className="font-bold text-luxury-gold group-hover:text-luxury-gold-light">
                    Location
                  </p>
                  <p className="text-luxury-ivory opacity-80">
                    {contactInfo.location}
                  </p>
                  <p className="text-sm text-luxury-gold mt-2">
                    Open in Google Maps
                  </p>
                </div>
              </motion.a>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="glass-effect-light p-8 rounded-lg space-y-6"
            >
              <div>
                <label className="block text-luxury-gold mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-luxury-charcoal border border-luxury-gold border-opacity-30 rounded-lg px-4 py-3 text-luxury-ivory focus:border-luxury-gold outline-none transition-colors"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className="block text-luxury-gold mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-luxury-charcoal border border-luxury-gold border-opacity-30 rounded-lg px-4 py-3 text-luxury-ivory focus:border-luxury-gold outline-none transition-colors"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div>
                <label className="block text-luxury-gold mb-2 font-semibold">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-luxury-charcoal border border-luxury-gold border-opacity-30 rounded-lg px-4 py-3 text-luxury-ivory focus:border-luxury-gold outline-none transition-colors"
                  placeholder="Your Phone"
                  required
                />
              </div>

              <div>
                <label className="block text-luxury-gold mb-2 font-semibold">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-luxury-charcoal border border-luxury-gold border-opacity-30 rounded-lg px-4 py-3 text-luxury-ivory focus:border-luxury-gold outline-none transition-colors"
                  placeholder="Subject"
                  required
                />
              </div>

              <div>
                <label className="block text-luxury-gold mb-2 font-semibold">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-luxury-charcoal border border-luxury-gold border-opacity-30 rounded-lg px-4 py-3 text-luxury-ivory focus:border-luxury-gold outline-none transition-colors"
                  placeholder="Your Message"
                  required
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
