import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryItem } from '../config/salonConfig';
import { SafeImage } from './SafeImage';

interface LightboxModalProps {
  items: GalleryItem[];
  activeIndex: number | null;
  onClose: () => void;
  onChangeIndex: (index: number) => void;
}

export function LightboxModal({
  items,
  activeIndex,
  onClose,
  onChangeIndex,
}: LightboxModalProps) {
  const isOpen = activeIndex !== null && items[activeIndex] !== undefined;
  const activeItem = isOpen ? items[activeIndex] : null;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight' && activeIndex !== null) {
        onChangeIndex((activeIndex + 1) % items.length);
      } else if (event.key === 'ArrowLeft' && activeIndex !== null) {
        onChangeIndex((activeIndex - 1 + items.length) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeIndex, items.length, onClose, onChangeIndex]);

  if (!isOpen || !activeItem || activeIndex === null) {
    return null;
  }

  const handlePrev = () => {
    onChangeIndex((activeIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    onChangeIndex((activeIndex + 1) % items.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Image preview: ${activeItem.title}`}
      className="fixed inset-0 z-50 bg-[#1B1410]/92 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#E4D9CA] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-[#E4D9CA] bg-[#FFFDF9]">
          <div className="min-w-0">
            <p className="text-xs font-medium text-[#7D5B2B] truncate">
              {activeItem.category}
            </p>
            <h3 className="font-serif text-xl font-semibold text-[#2B211A] truncate">
              {activeItem.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close lightbox"
            className="w-10 h-10 rounded-lg border border-[#E4D9CA] bg-[#FAF7F2] hover:bg-[#EDE4D8] text-[#2B211A] inline-flex items-center justify-center shrink-0 transition-colors"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="relative bg-[#1B1410] aspect-[4/3] max-h-[68vh] w-full flex items-center justify-center">
          <SafeImage
            src={activeItem.image}
            alt={activeItem.alt}
            loading="eager"
            className="w-full h-full object-contain"
          />

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous gallery image"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#FAF7F2]/90 hover:bg-[#FAF7F2] text-[#2B211A] inline-flex items-center justify-center shadow-md transition-colors"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next gallery image"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#FAF7F2]/90 hover:bg-[#FAF7F2] text-[#2B211A] inline-flex items-center justify-center shadow-md transition-colors"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        <div className="px-5 py-3.5 bg-[#FFFDF9] border-t border-[#E4D9CA] flex flex-wrap items-center justify-between gap-2 text-xs text-[#6B5B4E]">
          <span>{activeItem.caption}</span>
          <span className="tabular-nums font-medium text-[#2B211A]">
            {activeIndex + 1} / {items.length}
          </span>
        </div>
      </div>
    </div>
  );
}
