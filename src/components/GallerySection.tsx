import { useMemo, useState } from 'react';
import { Expand } from 'lucide-react';
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  type GalleryCategory,
  type GalleryItem,
} from '../config/salonConfig';
import { filterGalleryItems } from '../utils/booking';
import { SafeImage } from './SafeImage';

interface GallerySectionProps {
  onOpenLightbox: (items: GalleryItem[], index: number) => void;
}

export function GallerySection({ onOpenLightbox }: GallerySectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');

  const filteredItems = useMemo(
    () => filterGalleryItems(GALLERY_ITEMS, selectedCategory),
    [selectedCategory]
  );

  return (
    <section id="gallery" className="bg-[#F3EDE3] py-16 sm:py-20 border-b border-[#E4D9CA]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#7D5B2B]">Our Work</p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#2B211A] text-balance">
              Style Portfolio &amp; Lookbook
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#4A3F37]">
              Explore curated hairstyling, dimensional colour, and grooming inspiration across categories. Studio previews below are structured so original salon photography can be swapped in anytime.
            </p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter gallery by hairstyle category"
          className="mt-8 flex flex-wrap items-center gap-2"
        >
          {GALLERY_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(category)}
                className={`min-h-[40px] px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#2B211A] text-[#FAF7F2]'
                    : 'bg-[#FFFDF9] text-[#4A3F37] border border-[#E4D9CA] hover:border-[#9A743B] hover:text-[#2B211A]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Responsive Gallery Grid */}
        <div
          data-testid="gallery-grid"
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onOpenLightbox(filteredItems, idx)}
              aria-label={`Open ${item.title} in full-screen lightbox`}
              className="group text-left rounded-2xl overflow-hidden bg-[#FFFDF9] border border-[#E4D9CA] hover:border-[#B0894F] transition-colors duration-150"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EDE4D8]">
                <SafeImage
                  src={item.image}
                  alt={item.alt}
                  fallbackLabel={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-[#FAF7F2]/90 text-[#2B211A] inline-flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity shadow-sm"
                >
                  <Expand className="w-4 h-4" />
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-[#76675B]">
                  <span>{item.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.isStudioPreview ? 'Studio Preview' : 'Salon Work'}</span>
                </div>
                <h3 className="mt-1.5 font-serif text-xl font-semibold text-[#2B211A]">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[#6B5B4E]">
                  {item.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
