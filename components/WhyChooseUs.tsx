'use client';

import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Prime Location',
      description: 'A peaceful stay near Ellora Caves and Grishneshwar Temple with easy access to sacred landmarks.',
      icon: '📍',
    },
    {
      title: 'Comfort for Every Guest',
      description: 'Choose from 10 double-bed rooms, 3 triple-bed rooms, 4 luxury rooms, and 3 four-bed family rooms.',
      icon: '🛏️',
    },
    {
      title: 'Easy Booking',
      description: 'Reserve directly through WhatsApp or a quick call on +91 7030969695.',
      icon: '📞',
    },
    {
      title: 'Heritage Access',
      description: 'Ideal for pilgrims and travelers exploring temples, forts, and heritage sites around Ellora.',
      icon: '🏛️',
    },
    {
      title: 'Family-Friendly Stay',
      description: 'Comfortable arrangements for families and groups visiting the region.',
      icon: '👨‍👩‍👧‍👦',
    },
    {
      title: 'Trusted Hospitality',
      description: 'Warm service, clean spaces, and a calm atmosphere for a relaxing visit.',
      icon: '🤝',
    },
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
    <section id="why-us" className="bg-luxury-charcoal">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="text-center mb-16">
            <p className="text-luxury-gold text-lg tracking-widest mb-2">WHY GRAND KONARK</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experience the Difference
            </h2>
            <p className="text-lg text-luxury-ivory opacity-80 max-w-2xl mx-auto">
              Discover what sets us apart as the premier luxury destination in the region
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect p-8 rounded-lg hover:glass-effect-light transition-all group"
                whileHover={{ y: -10 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-luxury-gold group-hover:text-luxury-gold-light">
                  {feature.title}
                </h3>
                <p className="text-luxury-ivory opacity-80">
                  {feature.description}
                </p>
                <div className="mt-4 pt-4 border-t border-luxury-gold border-opacity-30 flex items-center gap-2 text-luxury-gold text-sm">
                  <FiCheck />
                  <span>Premium Quality</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
