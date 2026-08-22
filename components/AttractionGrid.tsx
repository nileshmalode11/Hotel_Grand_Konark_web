'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Attraction {
  id: number;
  name: string;
  description: string;
  distance: string;
  image: string;
  category: string;
  slug: string;
}

export default function AttractionGrid() {
  const [attractions, setAttractions] = useState<Attraction[]>([]);

  useEffect(() => {
    fetch('/data/attractions.json')
      .then(r => r.json())
      .then(data => setAttractions(data.attractions));
  }, []);

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
    <section id="attractions" className="bg-luxury-charcoal">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="text-center mb-16">
            <p className="text-luxury-gold text-lg tracking-widest mb-2">EXPLORE</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nearby Attractions
            </h2>
            <p className="text-lg text-luxury-ivory opacity-80 max-w-2xl mx-auto">
              Discover the heritage and natural beauty surrounding our hotel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction) => (
              <Link href={`/attractions/${attraction.slug}`} key={attraction.id}>
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-100px' }}
                  className="glass-effect rounded-lg overflow-hidden cursor-pointer group"
                  whileHover={{ y: -10 }}
                >
                  {/* Image */}
                  <div className="relative h-48 bg-luxury-charcoal overflow-hidden">
                    {attraction.image ? (
                      <Image
                        src={attraction.image}
                        alt={attraction.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <p className="absolute inset-0 flex items-center justify-center text-luxury-gold opacity-50">
                        Photo coming soon
                      </p>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/80 to-transparent z-10" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-bold mb-1">{attraction.name}</h3>
                        <p className="text-sm text-luxury-gold">{attraction.category}</p>
                      </div>
                      <span className="text-sm text-luxury-ivory opacity-70 bg-luxury-charcoal px-2 py-1 rounded">
                        {attraction.distance}
                      </span>
                    </div>
                    <p className="text-sm text-luxury-ivory opacity-80 line-clamp-2 mb-4">
                      {attraction.description}
                    </p>
                    <button className="btn-ghost text-sm group-hover:text-luxury-gold-light">
                      Learn More →
                    </button>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
