'use client';

import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function RestaurantSection() {
  return (
    <section id="restaurant" className="bg-luxury-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-gold opacity-10" />
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 bg-gradient-to-br from-luxury-gold to-luxury-gold-dark opacity-20 rounded-lg flex items-center justify-center"
          >
            <p className="text-luxury-gold opacity-40 text-lg">Restaurant Coming Soon</p>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-luxury-gold text-lg tracking-widest mb-4">DINING</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Coming Soon
            </h2>
            <p className="text-xl text-luxury-ivory opacity-80 mb-6 leading-relaxed">
              We are preparing an exceptional multi-cuisine dining experience that will
              celebrate both local and international flavors. Our restaurant will be a
              culinary journey featuring the finest ingredients and innovative cuisine.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-luxury-gold rounded-full" />
                <p className="text-luxury-ivory">Fine dining with panoramic views</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-luxury-gold rounded-full" />
                <p className="text-luxury-ivory">Expert chefs with international experience</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-luxury-gold rounded-full" />
                <p className="text-luxury-ivory">Local specialties and organic ingredients</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-luxury-gold rounded-full" />
                <p className="text-luxury-ivory">Private dining and event spaces</p>
              </div>
            </div>

            <motion.button
              className="btn-secondary flex items-center gap-2"
              whileHover={{ gap: 12 }}
            >
              Notify Me
              <FiArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
