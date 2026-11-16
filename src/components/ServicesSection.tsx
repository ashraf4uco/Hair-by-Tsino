import { ArrowRight } from 'lucide-react';
import { SALON_SERVICES, type SalonService } from '../config/salonConfig';
import { getServicePriceDisplay } from '../utils/booking';
import { SafeImage } from './SafeImage';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="bg-[#FAF7F2] py-16 sm:py-20 border-b border-[#E4D9CA]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#7D5B2B]">Our Services</p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#2B211A] text-balance">
            Curated Hair &amp; Beauty Services
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#4A3F37]">
            Every appointment includes personalized consultation and thoughtful care. Pricing varies by hair length, texture, and consultation — reach out on WhatsApp for tailored estimates.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SALON_SERVICES.map((service: SalonService, index: number) => {
            const priceLabel = getServicePriceDisplay(service.price);
            const isContactPricing = priceLabel === 'Contact for Pricing';

            return (
              <article
                key={service.id}
                className={`flex flex-col rounded-2xl overflow-hidden border transition-colors duration-150 ${
                  service.isEditableSlot
                    ? 'bg-[#F6F0E6] border-dashed border-[#CBB9A0]'
                    : 'bg-[#FFFDF9] border-[#E4D9CA] hover:border-[#B0894F]'
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#EDE4D8]">
                  <SafeImage
                    src={service.image}
                    alt={service.imageAlt}
                    fallbackLabel={service.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="flex-1 flex flex-col p-6">
                  <div className="flex items-center justify-between gap-2 text-xs text-[#76675B]">
                    <span>
                      0{index + 1}. {service.isEditableSlot ? 'Customizable Slot' : 'Salon Service'}
                    </span>
                    <span className="font-medium text-[#7D5B2B] tabular-nums">
                      {priceLabel}
                    </span>
                  </div>

                  <h3 className="mt-2 font-serif text-2xl font-semibold text-[#2B211A]">
                    {service.name}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#4A3F37] flex-1">
                    {service.description}
                  </p>

                  {isContactPricing && (
                    <p className="mt-3 text-xs text-[#6B5B4E]">
                      Final pricing is shared directly after a brief WhatsApp or in-salon consultation.
                    </p>
                  )}

                  <div className="mt-5 pt-4 border-t border-[#EDE4D8]">
                    <button
                      type="button"
                      onClick={() => onSelectService(service.name)}
                      className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#2B211A] bg-[#F3EDE3] hover:bg-[#2B211A] hover:text-[#FAF7F2] rounded-lg transition-colors duration-150 whitespace-nowrap"
                    >
                      <span>Book This Service</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
