import { ExternalLink, Instagram } from 'lucide-react';
import { INSTAGRAM_HIGHLIGHTS, SALON_CONFIG } from '../config/salonConfig';
import { SafeImage } from './SafeImage';

export function InstagramSection() {
  return (
    <section id="instagram" className="bg-[#FAF7F2] py-16 sm:py-20 border-b border-[#E4D9CA]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-[#7D5B2B]">
              {SALON_CONFIG.instagramHandle}
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#2B211A] text-balance">
              Follow Our Latest Hairstyles
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#4A3F37]">
              See everyday hair artistry, styling inspirations, and studio updates on our official Instagram profile. Preview tiles below can be updated directly with your latest Instagram photos.
            </p>
          </div>

          <a
            href={SALON_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-[#2B211A] bg-[#FFFDF9] border border-[#D4C4AE] hover:border-[#9A743B] hover:bg-[#F3EDE3] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            <Instagram className="w-4 h-4 text-[#9A743B]" aria-hidden="true" />
            <span>Follow {SALON_CONFIG.instagramHandle}</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTAGRAM_HIGHLIGHTS.map((tile) => (
            <a
              key={tile.id}
              href={SALON_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${tile.title} on Hair by Tsino Instagram`}
              className="group relative aspect-square rounded-xl overflow-hidden border border-[#E4D9CA] bg-[#EDE4D8]"
            >
              <SafeImage
                src={tile.image}
                alt={tile.alt}
                fallbackLabel={tile.title}
                className={`w-full h-full object-cover ${
                  tile.focusPosition || 'object-top'
                } group-hover:scale-[1.04] transition-transform duration-300`}
              />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#1B1410]/80 via-[#1B1410]/35 to-transparent">
                <p className="text-xs font-medium text-[#FAF7F2] truncate">
                  {tile.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
