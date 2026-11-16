import { ArrowRight, Calendar, MapPin, Star } from 'lucide-react';
import { GALLERY_ITEMS, SALON_CONFIG, type GalleryItem } from '../config/salonConfig';
import { SafeImage } from './SafeImage';

interface HeroProps {
  onOpenPreviewItem: (item: GalleryItem) => void;
}

export function Hero({ onOpenPreviewItem }: HeroProps) {
  const portfolioPreview = GALLERY_ITEMS.slice(0, 4);

  return (
    <section
      id="home"
      className="bg-[#FAF7F2] border-b border-[#E4D9CA]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-10 pb-14 lg:pt-14 lg:pb-16">
        {/* Split-Screen Editorial Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center py-2 lg:py-6">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm font-medium text-[#7D5B2B]">
              <span>{SALON_CONFIG.qualification}</span>
              <span aria-hidden="true">·</span>
              <span>{SALON_CONFIG.address.shortLocation}</span>
            </div>

            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-[3.75rem] font-semibold leading-[1.08] tracking-tight text-[#2B211A] text-balance">
              {SALON_CONFIG.hero.heading}
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#4A3F37] max-w-xl">
              {SALON_CONFIG.hero.subheading}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#6B5B4E]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#9A743B] shrink-0" aria-hidden="true" />
                <span>Fancy Market, 2nd Gate, Chümoukedima</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">
                {SALON_CONFIG.workingHours.days}: {SALON_CONFIG.workingHours.hours}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#booking"
                className="min-h-[46px] inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-medium text-[#FAF7F2] bg-[#2B211A] hover:bg-[#413228] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <span>Book Appointment</span>
              </a>

              <a
                href="#services"
                className="min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-[#2B211A] bg-[#FFFDF9] border border-[#D4C4AE] hover:border-[#9A743B] hover:bg-[#F3EDE3] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="h-[340px] sm:h-[440px] lg:h-full lg:min-h-[470px] rounded-2xl overflow-hidden border border-[#E4D9CA] bg-[#EDE4D8]">
              <SafeImage
                src={SALON_CONFIG.hero.image}
                alt={SALON_CONFIG.hero.imageAlt}
                loading="eager"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Full-Width Key Salon Highlights Strip below Hero Split */}
        <div className="mt-10 pt-8 border-t border-[#E4D9CA] grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <p className="text-xs font-medium text-[#76675B]">Client Rating</p>
            <p className="mt-1 flex items-center gap-1.5 font-serif text-2xl font-semibold text-[#2B211A] tabular-nums">
              <span>{SALON_CONFIG.googleReviews.rating} / {SALON_CONFIG.googleReviews.outOf}</span>
              <Star className="w-4 h-4 fill-[#B0894F] text-[#B0894F]" aria-hidden="true" />
            </p>
            <p className="text-xs text-[#6B5B4E] tabular-nums">
              {SALON_CONFIG.googleReviews.totalReviews} Google Reviews
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-[#76675B]">Qualification</p>
            <p className="mt-1 font-serif text-2xl font-semibold text-[#2B211A]">
              Sassoon Certified
            </p>
            <p className="text-xs text-[#6B5B4E]">Precision cutting &amp; colour artistry</p>
          </div>

          <div>
            <p className="text-xs font-medium text-[#76675B]">Salon Hours</p>
            <p className="mt-1 font-serif text-2xl font-semibold text-[#2B211A] tabular-nums">
              9:30 AM – 6:00 PM
            </p>
            <p className="text-xs text-[#6B5B4E]">{SALON_CONFIG.workingHours.days}</p>
          </div>

          <div>
            <p className="text-xs font-medium text-[#76675B]">Studio Location</p>
            <p className="mt-1 font-serif text-2xl font-semibold text-[#2B211A]">
              Chümoukedima
            </p>
            <p className="text-xs text-[#6B5B4E]">Fancy Market, 2nd Gate, Dimapur</p>
          </div>
        </div>

        {/* Visual Portfolio Preview */}
        <div className="mt-10 pt-8 border-t border-[#E4D9CA]">
          <div className="flex flex-wrap items-baseline justify-between gap-4 mb-5">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#2B211A]">
                Visual Portfolio Preview
              </h2>
              <p className="text-sm text-[#6B5B4E]">
                Selected styling aesthetics — click any frame to view full-screen or browse our gallery.
              </p>
            </div>
            <a
              href="#gallery"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#7D5B2B] hover:text-[#2B211A] transition-colors whitespace-nowrap"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolioPreview.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onOpenPreviewItem(item)}
                className="group text-left rounded-xl overflow-hidden bg-[#FFFDF9] border border-[#E4D9CA] hover:border-[#B0894F] transition-colors duration-150"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#EDE4D8]">
                  <SafeImage
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>
                <div className="p-3.5">
                  <p className="text-xs text-[#76675B]">{item.category}</p>
                  <p className="mt-0.5 font-serif text-base font-semibold text-[#2B211A] line-clamp-1">
                    {item.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
