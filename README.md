<<<<<<< HEAD
# Grand Konark Hotel Website

Ultra-premium hotel website for HOTEL GRAND KONARK ELLORA - featuring luxury aesthetic, fully responsive design, and WhatsApp booking integration.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- ✨ Cinematic hero section with background image/video support
- 🏨 Dynamic room showcase with pricing from JSON
- 🎭 Smooth animations with Framer Motion and GSAP
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Luxury glassmorphism UI with golden gradients
- 🌍 Nearby attractions with dynamic pages and galleries
- 📸 Masonry gallery with fullscreen lightbox
- 💬 Guest testimonials carousel
- 📞 WhatsApp booking integration
- 🎯 SEO optimized with structured data
- ♿ Accessibility compliant

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion & GSAP
- **Components**: Swiper.js, LightGallery, React Icons
- **Data**: JSON files (no backend required)

## Project Structure

```
Grand_konark/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── attractions/             # Dynamic attraction pages
│   └── globals.css              # Global styles
├── components/                   # Reusable components
│   ├── Hero.tsx
│   ├── RoomShowcase.tsx
│   ├── AttractionGrid.tsx
│   ├── Testimonials.tsx
│   ├── BookingModal.tsx
│   └── ...
├── public/
│   ├── data/                    # JSON data files
│   │   ├── hotel.json
│   │   ├── rooms.json
│   │   ├── pricing.json
│   │   ├── attractions.json
│   │   └── testimonials.json
│   ├── images/                  # Placeholder images
│   ├── attractions/             # Attraction images by folder
│   └── gallery/                 # Gallery images
├── tailwind.config.js           # Tailwind customization
├── next.config.js               # Next.js config
└── tsconfig.json                # TypeScript config
```

## Development

```bash
npm run dev      # Start development server (Port 3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Data Files

All content is loaded from JSON files in `public/data/`:

- **hotel.json**: Hotel information and metadata
- **rooms.json**: Room types and features
- **pricing.json**: Room pricing and availability
- **attractions.json**: Nearby attractions
- **testimonials.json**: Guest reviews and testimonials

Images are stored in `public/images/` and `public/attractions/` folders.

## Customization

### Colors
Edit `tailwind.config.js` to customize the luxury color palette:
- Charcoal: `#1a1a1a`
- Ivory: `#f5f1e8`
- Gold: `#d4af37`

### Typography
Fonts are configured in `tailwind.config.js`:
- Headings: Playfair Display
- Accents: Cormorant Garamond
- Body: Poppins

### Content
Update JSON files in `public/data/` to modify content without touching code.

## SEO & Performance

- Sitemap.xml for search engine crawling
- Robots.txt for crawler instructions
- Open Graph metadata for social sharing
- JSON-LD structured data (Hotel schema)
- Image lazy loading and optimization
- Smooth page transitions

## Booking Flow

1. Click "Book Now" button
2. Fill in booking details (name, phone, check-in, check-out, guests, room type, special requests)
3. Submit to generate pre-filled WhatsApp message
4. Message sent to +91 7030969695 (hotel contact)

## Contact Information

- **WhatsApp**: +91 7030969695
- **Location**: Aurangabad (Near Ellora Caves & Grishneshwar Temple)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

- Images are lazy-loaded automatically
- CSS animations use GPU acceleration
- Code-splitting for optimal bundle size
- Next.js Image Optimization enabled
- Responsive image sizes for different devices

## License

© 2025 HOTEL GRAND KONARK ELLORA. All rights reserved.
=======
# Hotel_Grand_Konark_web
>>>>>>> 1a3908e31d231ffd34bcf78fb87b0bedd91966b1
