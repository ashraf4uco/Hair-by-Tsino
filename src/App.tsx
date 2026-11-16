import { useState } from 'react';
import { GALLERY_ITEMS, type GalleryItem } from './config/salonConfig';
import { AboutSection } from './components/AboutSection';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InstagramSection } from './components/InstagramSection';
import { LightboxModal } from './components/LightboxModal';
import { ReviewsSection } from './components/ReviewsSection';
import { ServicesSection } from './components/ServicesSection';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [lightboxItems, setLightboxItems] = useState<GalleryItem[]>(GALLERY_ITEMS);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLightbox = (items: GalleryItem[], index: number) => {
    setLightboxItems(items);
    setLightboxIndex(index);
  };

  const handleOpenHeroPreviewItem = (item: GalleryItem) => {
    const idx = GALLERY_ITEMS.findIndex((entry) => entry.id === item.id);
    setLightboxItems(GALLERY_ITEMS);
    setLightboxIndex(idx >= 0 ? idx : 0);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2B211A]">
      <Header />
      <main className="flex-1">
        <Hero onOpenPreviewItem={handleOpenHeroPreviewItem} />
        <AboutSection />
        <ServicesSection onSelectService={handleSelectService} />
        <GallerySection onOpenLightbox={handleOpenLightbox} />
        <ReviewsSection />
        <BookingSection preselectedService={selectedService} />
        <InstagramSection />
        <ContactSection />
        <FaqSection />
      </main>
      <Footer />
      <LightboxModal
        items={lightboxItems}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={setLightboxIndex}
      />
    </div>
  );
}
