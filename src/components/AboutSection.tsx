import { Award, HeartHandshake, Sparkles } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';
import { SafeImage } from './SafeImage';

const PILLAR_ICONS = [Award, HeartHandshake, Sparkles];

export function AboutSection() {
  return (
    <section id="about" className="bg-[#F3EDE3] py-16 sm:py-20 border-b border-[#E4D9CA]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <div className="aspect-[16/11] rounded-2xl overflow-hidden border border-[#E4D9CA] bg-[#EDE4D8]">
              <SafeImage
                src={SALON_CONFIG.about.interiorImage}
                alt={SALON_CONFIG.about.interiorImageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 text-xs text-[#6B5B4E]">
              Salon atmosphere preview · Fancy Market, 2nd Gate, {SALON_CONFIG.address.shortLocation}
            </p>
          </div>

          <div className="lg:col-span-6">
            <p className="text-sm font-medium text-[#7D5B2B]">
              About {SALON_CONFIG.businessName}
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#2B211A] leading-tight text-balance">
              {SALON_CONFIG.about.heading}
            </h2>
            <p className="mt-4 text-base sm:text-lg font-medium text-[#2B211A] leading-relaxed">
              {SALON_CONFIG.about.lead}
            </p>

            <div className="mt-4 space-y-3 text-base leading-relaxed text-[#4A3F37]">
              {SALON_CONFIG.about.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-[#DFD2C0] space-y-5">
              {SALON_CONFIG.about.pillars.map((pillar, index) => {
                const Icon = PILLAR_ICONS[index] || Sparkles;
                return (
                  <div key={pillar.title} className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#FFFDF9] border border-[#E4D9CA] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-[#9A743B]" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-[#2B211A]">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#4A3F37]">
                        {pillar.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
