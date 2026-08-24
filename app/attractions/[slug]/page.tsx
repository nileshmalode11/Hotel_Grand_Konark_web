'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiMapPin, FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface AttractionLink {
  label: string;
  url: string;
}

interface Attraction {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  about: string[];
  highlights: string[];
  whyVisit: string[];
  bestTime: string;
  nearbyPlaces: string[];
  slug: string;
  links?: AttractionLink[];
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
              <span>{attraction.category}</span>
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
              {attraction.about.map((paragraph, idx) => (
                <p key={idx} className="text-lg text-luxury-ivory opacity-80 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
              <p className="text-lg text-luxury-ivory opacity-80 leading-relaxed">
                Staying at Hotel Grand Konark Ellora makes it easy to plan a calm, heritage-rich day around this landmark with minimal travel and maximum comfort.
              </p>
            </motion.div>

            {/* Why Visit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-luxury-gold mb-4">Why Visit</h2>
              <ul className="space-y-3">
                {attraction.whyVisit.map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-luxury-ivory opacity-80">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 flex-shrink-0" />
                    {reason}
                  </li>
                ))}
              </ul>
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

            {/* More Information */}
            {attraction.links && attraction.links.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-luxury-gold mb-4">More Information</h2>
                <ul className="space-y-2">
                  {attraction.links.map((link) => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-luxury-gold hover:text-luxury-gold-light transition-colors"
                      >
                        {link.label}
                        <FiExternalLink />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
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
                  Category
                </h3>
                <p className="text-luxury-ivory opacity-80">{attraction.category}</p>
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
