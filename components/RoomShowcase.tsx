'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';

interface Room {
  id: number;
  name: string;
  capacity: number;
  features: string[];
  image: string;
  category: string;
}

interface Pricing {
  roomId: number;
  roomName: string;
  season: string;
  pricePerNight: number;
}

export default function RoomShowcase() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [pricing, setPricing] = useState<Pricing[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  useEffect(() => {
    // Load rooms and pricing data
    Promise.all([
      fetch('/data/rooms.json').then(r => r.json()),
      fetch('/data/pricing.json').then(r => r.json()),
    ]).then(([roomsData, pricingData]) => {
      setRooms(roomsData.rooms);
      setPricing(pricingData.pricing);
      setSelectedRoom(roomsData.rooms[0]);
    });
  }, []);

  const getRoomPrice = (roomId: number) => {
    const peakPrice = pricing.find(p => p.roomId === roomId && p.season === 'peak');
    return peakPrice ? `₹${peakPrice.pricePerNight}` : 'Call for Best Price';
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

  return (
    <section id="rooms" className="bg-luxury-charcoal">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="text-center mb-16">
            <p className="text-luxury-gold text-lg tracking-widest mb-2">ACCOMMODATIONS</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Exceptional Rooms & Suites
            </h2>
            <p className="text-lg text-luxury-ivory opacity-80 max-w-2xl mx-auto">
              From intimate double-bed stays to spacious family rooms, each option is designed for comfort, cleanliness, and easy access to Ellora’s heritage sites.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Room Showcase */}
            <motion.div variants={itemVariants} className="space-y-6">
              {rooms.map((room) => (
                <motion.div
                  key={room.id}
                  onClick={() => setSelectedRoom(room)}
                  className={`glass-effect p-6 rounded-lg cursor-pointer transition-all ${
                    selectedRoom?.id === room.id
                      ? 'ring-2 ring-luxury-gold glass-effect-light'
                      : 'hover:glass-effect-light'
                  }`}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{room.name}</h3>
                      <p className="text-sm text-luxury-gold flex items-center gap-2">
                        <FiMapPin className="text-sm" />
                        For {room.capacity} Guest{room.capacity > 1 ? 's' : ''}
                      </p>
                    </div>
                    <p className="text-lg font-bold text-luxury-gold">
                      {getRoomPrice(room.id)}
                    </p>
                  </div>
                  <p className="text-sm text-luxury-ivory opacity-70">{room.size}</p>
                  <p className="text-xs text-luxury-gold mt-2">{room.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Selected Room Details */}
            {selectedRoom && (
              <motion.div
                key={selectedRoom.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-effect-light p-8 rounded-lg space-y-6"
              >
                <div className="relative w-full h-64 bg-gradient-gold opacity-20 rounded-lg flex items-center justify-center">
                  <p className="text-luxury-gold opacity-50">Luxury Room Image</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-2 text-luxury-gold">
                    {selectedRoom.name}
                  </h3>
                  <p className="text-2xl font-bold text-luxury-ivory mb-4">
                    {getRoomPrice(selectedRoom.id)} / night
                  </p>
                  <p className="text-luxury-ivory opacity-80 mb-4">
                    {selectedRoom.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-luxury-gold mb-3">Amenities</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedRoom.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <button className="btn-primary w-full">
                  Book Through WhatsApp
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
