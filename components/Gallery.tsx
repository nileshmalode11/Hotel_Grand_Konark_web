'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const galleryImages = [
  { id: 1, title: 'Hotel outer view', category: 'Exterior', image: '/images/hotel-outer-view.jpeg' },
  { id: 2, title: 'Hotel symbol', category: 'Brand', image: '/images/hotel-symbol.jpeg' },
  { id: 3, title: 'Triple bed room AC', category: 'Room', image: '/images/triple-bed-ac.jpeg' },
  { id: 4, title: 'Luxury double bed room AC', category: 'Room', image: '/images/luxury-double-ac.jpeg' },
  { id: 5, title: 'Deluxe double bed room', category: 'Room', image: '/images/luxury-double-ac-2.jpeg' },
  { id: 6, title: 'Four bed family room AC', category: 'Room', image: '/images/four-bed-ac.png' },
  { id: 7, title: 'Double bed room Non-AC', category: 'Room', image: '/images/double-bed-non-ac.png' },
  { id: 8, title: 'Kailasa temple', category: 'Heritage', image: '/images/kailasa-temple.png' },
  { id: 9, title: 'Grishneshwar temple', category: 'Spiritual', image: '/images/grishneshwar-temple.png' },
  { id: 10, title: 'Daulatabad fort', category: 'Historical', image: '/images/daulatabad-fort.png' },
  { id: 11, title: 'Bibi Ka Maqbara', category: 'Historical', image: '/images/bibi-ka-maqbara.png' },
  { id: 12, title: 'Hotel view', category: 'Exterior', image: '/images/hotel-outer-view.jpeg' },
];

export default function Gallery() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="gallery" className="bg-luxury-charcoal">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="text-center mb-16">
            <p className="text-luxury-gold text-lg tracking-widest mb-2">VISUAL TOUR</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Gallery
            </h2>
            <p className="text-lg text-luxury-ivory opacity-80 max-w-2xl mx-auto">
              Experience the beauty and elegance of our hotel
            </p>
          </div>

          {/* Masonry Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-max">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className={`glass-effect rounded-lg overflow-hidden cursor-pointer group h-64 ${
                  index % 5 === 0 ? 'sm:col-span-2 sm:row-span-2 h-auto' : ''
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-full h-full bg-gradient-to-br from-luxury-gold to-luxury-gold-dark opacity-20 flex items-center justify-center overflow-hidden">
                  <Image
                    src={image.image}
                    alt={image.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col justify-end p-4">
                    <h3 className="text-lg font-bold text-luxury-ivory">{image.title}</h3>
                    <p className="text-luxury-gold text-sm">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Full Gallery
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
