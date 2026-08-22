'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiMapPin, FiClock, FiDollarSign, FiArrowLeft } from 'react-icons/fi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Attraction {
  id: number;
  name: string;
  description: string;
  distance: string;
  distanceKm: number;
  image: string;
  category: string;
  highlights: string[];
  bestTime: string;
  timingsOpen: string;
  timingsClose: string;
  entryFee: string;
  nearbyPlaces: string[];
  slug: string;
  galleryImages?: string[];
}

export default function AttractionPage({ params: { slug } }: { params: { slug: string } }) {
  const [attraction, setAttraction] = useState<Attraction | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/attractions.json')
      .then(r => r.json())
      .then(data => {
        const found = data.attractions.find((a: Attraction) => a.slug === slug);
        setAttraction(found);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-luxury-charcoal flex items-center justify-center">
        <p className="text-luxury-gold">Loading...</p>
      </div>
    );
  }

  if (!attraction) {
    return (
      <div className="min-h-screen bg-luxury-charcoal flex items-center justify-center">
        <p className="text-luxury-gold">Attraction not found</p>
      </div>
    );
  }

  return (
    <main className="overflow-hidden">
      <Header onBookNow={() => {}} />

      {/* Hero Section */}
      <section className="relative h-96 mt-20 flex items-center justify-center overflow-hidden">
        {attraction.image && (
          <Image
            src={attraction.image}
            alt={attraction.name}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-charcoal/90 via-luxury-charcoal/60 to-luxury-charcoal/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10">
            <p className="text-luxury-gold text-lg tracking-widest mb-2">EXPLORE</p>
            <h1 className="text-5xl md:text-6xl font-bold text-luxury-ivory">
              {attraction.name}
            </h1>
            <div className="flex items-center justify-center gap-2 mt-4 text-luxury-gold">
              <FiMapPin />
              <span>{attraction.distance} from Hotel</span>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="container mt-8">
        <Link href="/#attractions" className="inline-flex items-center gap-2 text-luxury-gold hover:text-luxury-gold-light transition-colors">
          <FiArrowLeft />
          Back to Attractions
        </Link>
      </div>

      {/* Content */}
      <section className="container py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-luxury-gold mb-4">About</h2>
              <p className="text-lg text-luxury-ivory opacity-80 leading-relaxed">
                {attraction.description}
              </p>
              <p className="text-lg text-luxury-ivory opacity-80 leading-relaxed mt-4">
                Staying at Hotel Grand Konark Ellora makes it easy to plan a calm, heritage-rich day around this landmark with minimal travel and maximum comfort.
              </p>
              {attraction.slug === 'kailasa-temple' && (
                <p className="text-lg text-luxury-ivory opacity-80 leading-relaxed mt-4">
                  The temple is widely regarded as one of the most remarkable rock-cut monuments in the world and is associated with the Rashtrakuta period, with its architecture drawing from earlier Pallava and Chalukya traditions.
                </p>
              )}
              {attraction.slug === 'grishneshwar-temple' && (
                <p className="text-lg text-luxury-ivory opacity-80 leading-relaxed mt-4">
                  Ghrishneshwar is one of the twelve Jyotirlingas and remains an active pilgrimage destination known for its spiritual importance and annual festival crowds.
                </p>
              )}
              {attraction.slug === 'bhadra-maruti-temple' && (
                <p className="text-lg text-luxury-ivory opacity-80 leading-relaxed mt-4">
                  The temple is especially loved for its reclining idol of Hanuman and its long-standing role as a local pilgrimage site in the Khuldabad region.
                </p>
              )}
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-luxury-gold mb-4">Highlights</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {attraction.highlights.map((highlight, idx) => (
                  <div key={idx} className="glass-effect p-4 rounded-lg flex items-start gap-3">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 flex-shrink-0" />
                    <p className="text-luxury-ivory opacity-80">{highlight}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-luxury-gold mb-4">Photo Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {(attraction.galleryImages || [attraction.image]).filter(Boolean).slice(0, 6).map((image, i) => (
                  <div
                    key={`${attraction.slug}-${i}`}
                    className="relative aspect-square glass-effect rounded-lg overflow-hidden border border-luxury-gold border-opacity-20"
                  >
                    <Image src={image} alt={`${attraction.name} view ${i + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Nearby Places */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-luxury-gold mb-4">Nearby Places</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {attraction.nearbyPlaces.map((place, idx) => (
                  <div key={idx} className="glass-effect-light p-4 rounded-lg border border-luxury-gold border-opacity-20">
                    <p className="text-luxury-ivory opacity-80">{place}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Info Card */}
            <div className="glass-effect-light p-8 rounded-lg space-y-6">
              <div>
                <h3 className="text-luxury-gold font-bold mb-2 flex items-center gap-2">
                  <FiMapPin />
                  Distance
                </h3>
                <p className="text-luxury-ivory opacity-80">{attraction.distance}</p>
              </div>

              <div>
                <h3 className="text-luxury-gold font-bold mb-2 flex items-center gap-2">
                  <FiClock />
                  Timings
                </h3>
                <p className="text-luxury-ivory opacity-80">
                  {attraction.timingsOpen} - {attraction.timingsClose}
                </p>
              </div>

              <div>
                <h3 className="text-luxury-gold font-bold mb-2 flex items-center gap-2">
                  <FiDollarSign />
                  Entry Fee
                </h3>
                <p className="text-luxury-ivory opacity-80">{attraction.entryFee}</p>
              </div>

              <div>
                <h3 className="text-luxury-gold font-bold mb-2">Best Time to Visit</h3>
                <p className="text-luxury-ivory opacity-80">{attraction.bestTime}</p>
              </div>

              <div className="border-t border-luxury-gold border-opacity-30 pt-6">
                <button className="btn-primary w-full mb-3">Reserve Your Room</button>
                <a
                  href="https://wa.me/917030969695"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full block text-center"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass-effect p-6 rounded-lg h-64 flex items-center justify-center">
              <p className="text-luxury-gold opacity-40">Map Location</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
