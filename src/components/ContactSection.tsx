import { useState } from 'react';
import { Clock, Instagram, Map, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

export function ContactSection() {
  const [showEmbeddedMap, setShowEmbeddedMap] = useState(false);

  return (
    <section id="contact" className="bg-[#F3EDE3] py-16 sm:py-20 border-b border-[#E4D9CA]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Contact Details & Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-sm font-medium text-[#7D5B2B]">Visit &amp; Connect</p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#2B211A] text-balance">
                Contact {SALON_CONFIG.businessName}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#4A3F37]">
                Conveniently situated at Fancy Market, 2nd Gate in Chümoukedima. Reach out directly for consultations, pricing inquiries, or directions.
              </p>

              <div className="mt-8 space-y-6 rounded-2xl bg-[#FFFDF9] border border-[#E4D9CA] p-6">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#9A743B] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#2B211A]">
                      Salon Address
                    </h3>
                    <address className="mt-1 not-italic text-sm leading-relaxed text-[#4A3F37]">
                      {SALON_CONFIG.businessName}
                      <br />
                      {SALON_CONFIG.address.line1}
                      <br />
                      {SALON_CONFIG.address.line2}
                      <br />
                      {SALON_CONFIG.address.line3}
                    </address>
                    <p className="mt-1.5 text-xs text-[#76675B]">
                      Google Plus Code: <span className="font-medium text-[#2B211A]">{SALON_CONFIG.address.plusCode}</span>
                    </p>
                  </div>
                </div>

                <div className="pt-5 border-t border-[#EDE4D8] flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#9A743B] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#2B211A]">
                      Phone &amp; WhatsApp
                    </h3>
                    <a
                      href={SALON_CONFIG.phoneTel}
                      className="mt-1 inline-block text-sm font-medium text-[#2B211A] hover:text-[#7D5B2B] tabular-nums transition-colors"
                    >
                      {SALON_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="pt-5 border-t border-[#EDE4D8] flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#9A743B] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#2B211A]">
                      Working Hours
                    </h3>
                    <p className="mt-1 text-sm text-[#4A3F37] tabular-nums">
                      {SALON_CONFIG.workingHours.days}: {SALON_CONFIG.workingHours.hours}
                    </p>
                    <p className="mt-1 text-xs text-[#6B5B4E]">
                      {SALON_CONFIG.workingHours.sundayNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Functional Contact Buttons */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <a
                href={SALON_CONFIG.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[46px] inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#FAF7F2] bg-[#2B211A] hover:bg-[#413228] rounded-lg transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={SALON_CONFIG.phoneTel}
                className="min-h-[46px] inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#2B211A] bg-[#FFFDF9] border border-[#D4C4AE] hover:border-[#9A743B] hover:bg-[#FAF7F2] rounded-lg transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#9A743B]" aria-hidden="true" />
                <span>Call Now</span>
              </a>

              <a
                href={SALON_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[46px] inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#2B211A] bg-[#FFFDF9] border border-[#D4C4AE] hover:border-[#9A743B] hover:bg-[#FAF7F2] rounded-lg transition-colors whitespace-nowrap"
              >
                <Instagram className="w-4 h-4 text-[#9A743B]" aria-hidden="true" />
                <span>Instagram</span>
              </a>

              <a
                href={SALON_CONFIG.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[46px] inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#2B211A] bg-[#FFFDF9] border border-[#D4C4AE] hover:border-[#9A743B] hover:bg-[#FAF7F2] rounded-lg transition-colors whitespace-nowrap"
              >
                <Navigation className="w-4 h-4 text-[#9A743B]" aria-hidden="true" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Salon Location Card & On-Demand Keyless Embedded Map */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex-1 min-h-[360px] lg:min-h-[480px] rounded-2xl overflow-hidden border border-[#E4D9CA] bg-[#FFFDF9] flex flex-col">
              <div className="px-5 py-3.5 border-b border-[#E4D9CA] flex flex-wrap items-center justify-between gap-3 text-xs text-[#6B5B4E]">
                <span>
                  Location · <span className="font-medium text-[#2B211A]">{SALON_CONFIG.address.plusCode}</span>
                </span>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setShowEmbeddedMap((prev) => !prev)}
                    className="font-medium text-[#2B211A] hover:text-[#7D5B2B] transition-colors"
                  >
                    {showEmbeddedMap ? 'Show Address Card' : 'Load Interactive Map'}
                  </button>
                  <a
                    href={SALON_CONFIG.maps.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#7D5B2B] hover:text-[#2B211A] transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>

              <div className="relative flex-1 min-h-[320px] bg-gradient-to-br from-[#FAF7F2] via-[#F3EDE3] to-[#EDE4D8]">
                {showEmbeddedMap ? (
                  <iframe
                    title="Hair by Tsino Salon Location Map — Chümoukedima, Dimapur"
                    src={SALON_CONFIG.maps.embedUrl}
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full min-h-[360px] border-0"
                  />
                ) : (
                  <div className="h-full min-h-[360px] flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-14 h-14 rounded-full bg-[#FFFDF9] border border-[#D4C4AE] flex items-center justify-center shadow-sm">
                      <MapPin className="w-6 h-6 text-[#9A743B]" aria-hidden="true" />
                    </div>
                    <p className="mt-4 text-xs font-medium text-[#7D5B2B]">
                      Chümoukedima, Dimapur · Nagaland
                    </p>
                    <h3 className="mt-1 font-serif text-3xl font-semibold text-[#2B211A]">
                      {SALON_CONFIG.businessName}
                    </h3>
                    <p className="mt-2.5 text-sm sm:text-base text-[#4A3F37] max-w-md leading-relaxed">
                      {SALON_CONFIG.address.fullText}
                    </p>
                    <p className="mt-2 text-xs font-medium text-[#6B5B4E]">
                      Google Plus Code: <span className="text-[#2B211A]">{SALON_CONFIG.address.plusCode}</span>
                    </p>

                    <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                      <a
                        href={SALON_CONFIG.maps.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-[#FAF7F2] bg-[#2B211A] hover:bg-[#413228] rounded-lg transition-colors"
                      >
                        <Navigation className="w-4 h-4" aria-hidden="true" />
                        <span>Launch Google Maps Directions</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setShowEmbeddedMap(true)}
                        className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-[#2B211A] bg-[#FFFDF9] border border-[#D4C4AE] hover:border-[#9A743B] hover:bg-[#F3EDE3] rounded-lg transition-colors"
                      >
                        <Map className="w-4 h-4 text-[#9A743B]" aria-hidden="true" />
                        <span>Load Interactive Map</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
