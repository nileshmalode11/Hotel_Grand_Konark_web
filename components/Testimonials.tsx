'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FiStar } from 'react-icons/fi';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  rating: number;
  text: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch('/data/testimonials.json')
      .then(r => r.json())
      .then(data => setTestimonials(data.testimonials));
  }, []);

  return (
    <section id="testimonials" className="bg-luxury-charcoal">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="text-center mb-16">
            <p className="text-luxury-gold text-lg tracking-widest mb-2">TESTIMONIALS</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our Guests Say
            </h2>
            <p className="text-lg text-luxury-ivory opacity-80 max-w-2xl mx-auto">
              Read heartfelt reviews from our valued guests
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  className="glass-effect-light p-8 rounded-lg h-full"
                  whileHover={{ y: -10 }}
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <FiStar key={i} className="text-luxury-gold fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-luxury-ivory opacity-90 mb-6 italic">
                    &quot;{testimonial.text}&quot;
                  </p>

                  {/* Author */}
                  <div className="border-t border-luxury-gold border-opacity-30 pt-4">
                    <p className="font-bold text-luxury-gold">{testimonial.name}</p>
                    <p className="text-sm text-luxury-ivory opacity-70">
                      {testimonial.title}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
