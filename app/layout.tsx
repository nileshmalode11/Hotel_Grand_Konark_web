import type { Metadata } from 'next';
import { Playfair_Display, Cormorant_Garamond, Poppins } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Grand Konark Ellora | Ultra-Premium Hotel',
  description: 'Experience luxury hospitality near Ellora Caves & Grishneshwar Temple in Aurangabad',
  keywords: 'luxury hotel, Aurangabad, Ellora Caves, Grishneshwar Temple, heritage tourism',
  authors: [{ name: 'Grand Konark Ellora' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://grandkonarkellora.com',
    siteName: 'Grand Konark Ellora',
    title: 'Grand Konark Ellora | Ultra-Premium Hotel',
    description: 'Experience luxury hospitality near Ellora Caves & Grishneshwar Temple',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grand Konark Ellora | Ultra-Premium Hotel',
    description: 'Experience luxury hospitality near Ellora Caves & Grishneshwar Temple',
    images: ['/images/twitter-image.jpg'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Hotel',
              name: 'Grand Konark Ellora',
              description: 'Ultra-premium hotel near Ellora Caves & Grishneshwar Temple',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Aurangabad',
                addressRegion: 'Maharashtra',
                addressCountry: 'IN',
              },
              telephone: '+91 9999999999',
              url: 'https://grandkonarkellora.com',
              image: '/images/og-image.jpg',
              priceRange: '₹₹₹',
              rating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '500',
              },
            }),
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${cormorant.variable} ${poppins.variable} bg-luxury-charcoal text-luxury-ivory`}
      >
        {children}
      </body>
    </html>
  );
}
