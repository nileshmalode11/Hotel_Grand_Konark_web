'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiMessageCircle, FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '#' },
        { label: 'Rooms', href: '#rooms' },
        { label: 'Attractions', href: '#attractions' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Why Choose Us', href: '#why-us' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'Testimonials', href: '#testimonials' },
      ],
    },
    {
      title: 'Policies',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms & Conditions', href: '#' },
        { label: 'Cancellation Policy', href: '#' },
        { label: 'Sitemap', href: '/sitemap.xml' },
      ],
    },
  ];

  const socialLinks = [
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  ];

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

  return (
    <footer className="bg-luxury-charcoal border-t border-luxury-gold border-opacity-20">
      <div className="container">
        {/* Main Footer Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-luxury-gold">GRAND KONARK</h3>
            <p className="text-luxury-ivory opacity-80 text-sm leading-relaxed">
              Ultra-premium luxury hotel offering heritage hospitality and world-class service near Ellora Caves and Grishneshwar Temple.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass-effect rounded-full flex items-center justify-center text-luxury-gold hover:text-luxury-gold-light hover:glass-effect-light transition-all"
                    whileHover={{ scale: 1.1 }}
                    title={social.label}
                  >
                    <Icon className="text-lg" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, idx) => (
            <motion.div key={idx} variants={itemVariants} className="space-y-4">
              <h4 className="font-bold text-luxury-gold uppercase tracking-wider text-sm">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-luxury-ivory opacity-70 hover:opacity-100 hover:text-luxury-gold transition-all text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Bar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-8 border-t border-luxury-gold border-opacity-20 grid md:grid-cols-3 gap-6 mb-8"
        >
          <motion.a
            href="tel:+917030969695"
            variants={itemVariants}
            className="flex items-center gap-3 text-luxury-ivory hover:text-luxury-gold transition-colors"
          >
            <FiPhone className="text-2xl text-luxury-gold" />
            <div className="text-sm">
              <p className="text-luxury-gold font-semibold">Phone</p>
              <p className="opacity-80">+91 7030969695</p>
            </div>
          </motion.a>

          <motion.a
            href="https://wa.me/917030969695"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className="flex items-center gap-3 text-luxury-ivory hover:text-luxury-gold transition-colors"
          >
            <FiMessageCircle className="text-2xl text-luxury-gold" />
            <div className="text-sm">
              <p className="text-luxury-gold font-semibold">WhatsApp</p>
              <p className="opacity-80">+91 7030969695</p>
            </div>
          </motion.a>

          <motion.a
            href="mailto:hotelgk9696@gmail.com"
            variants={itemVariants}
            className="flex items-center gap-3 text-luxury-ivory hover:text-luxury-gold transition-colors"
          >
            <FiMail className="text-2xl text-luxury-gold" />
            <div className="text-sm">
              <p className="text-luxury-gold font-semibold">Email</p>
              <p className="opacity-80">hotelgk9696@gmail.com</p>
            </div>
          </motion.a>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-6 border-t border-luxury-gold border-opacity-20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-luxury-ivory opacity-70"
        >
          <p>
            © {currentYear} HOTEL GRAND KONARK ELLORA. All rights reserved.
          </p>
          <p>
            Designed & Developed with ✨ for Luxury Hospitality
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
