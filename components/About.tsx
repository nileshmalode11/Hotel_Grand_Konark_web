'use client';

import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { label: 'Rooms', value: '20' },
    { label: 'Double Bed', value: '10' },
    { label: 'Triple Bed', value: '3' },
    { label: 'Luxury & Family', value: '7' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="bg-luxury-charcoal">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="text-center mb-12">
            <p className="text-luxury-gold text-lg tracking-widest mb-2">ABOUT US</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Heritage Luxury, Thoughtfully Curated
            </h2>
            <p className="text-lg text-luxury-ivory opacity-80 max-w-2xl mx-auto">
              Hotel Grand Konark Ellora offers a peaceful and elegant stay for pilgrims, families, and travelers visiting Ellora and its sacred surroundings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3 text-luxury-gold">
                  Our Place
                </h3>
                <p className="text-luxury-ivory opacity-80 leading-relaxed">
                  Located near the Ellora heritage zone, our hotel is a practical and graceful base for those exploring the caves, temples, forts, and spiritual landmarks of the region.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-luxury-gold">
                  Our Promise
                </h3>
                <p className="text-luxury-ivory opacity-80 leading-relaxed">
                  We provide a welcoming stay with attentive service, comfortable rooms, and easy access to nearby spiritual and heritage sites.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-luxury-gold">
                  Your Stay, Our Priority
                </h3>
                <p className="text-luxury-ivory opacity-80 leading-relaxed">
                  From booking to check-out, we focus on comfort, cleanliness, and a memorable stay for every guest.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="glass-effect p-8 rounded-lg space-y-8"
            >
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-6 glass-effect-light rounded"
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-3xl font-bold text-luxury-gold mb-2">
                      {stat.value}
                    </p>
                    <p className="text-luxury-ivory text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-gold opacity-20 p-6 rounded-lg">
                <p className="text-center text-luxury-ivory font-cormorant text-xl">
                  "Where Heritage Meets Hospitality"
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
