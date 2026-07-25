import AttractionGrid from '@/components/AttractionGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nearby Attractions | Hotel Grand Konark Ellora',
  description: 'Explore nearby heritage and cultural attractions around Hotel Grand Konark Ellora.',
};

export default function AttractionsPage() {
  return (
    <main className="bg-luxury-charcoal min-h-screen">
      <div className="container py-24">
        <div className="text-center mb-16">
          <p className="text-luxury-gold text-sm uppercase tracking-[0.32em] mb-4">
            Nearby Heritage Attractions
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-luxury-ivory">
            Discover Iconic Sites Around Ellora
          </h1>
          <p className="text-lg text-luxury-ivory opacity-80 mt-4 max-w-3xl mx-auto">
            Explore sacred temples, historic forts, and cultural landmarks that make your stay at Hotel Grand Konark Ellora unforgettable.
          </p>
        </div>
        <AttractionGrid />
      </div>
    </main>
  );
}
