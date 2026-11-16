import { Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';
import { BrandMark } from './BrandMark';

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#gallery' },
  { label: 'Google Reviews', href: '#reviews' },
  { label: 'Book Appointment', href: '#booking' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2B211A] text-[#E7D8C3]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Summary */}
          <div className="lg:col-span-4">
            <BrandMark inverted />
            <p className="mt-4 text-sm leading-relaxed text-[#D8C8B4] max-w-sm">
              Sassoon Certified Hairstylist offering tailored hair styling, balayage, blow dry, and beauty services in Chümoukedima, Dimapur, Nagaland.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={SALON_CONFIG.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[40px] inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#2B211A] bg-[#FAF7F2] hover:bg-[#EDE4D8] rounded-lg transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
              <a
                href={SALON_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[40px] inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#FAF7F2] border border-[#5A4739] hover:border-[#C59B5F] rounded-lg transition-colors whitespace-nowrap"
              >
                <Instagram className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{SALON_CONFIG.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-xl font-semibold text-[#FAF7F2]">
              Quick Links
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#D8C8B4] hover:text-[#FAF7F2] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address & Contact */}
          <div className="lg:col-span-5">
            <h2 className="font-serif text-xl font-semibold text-[#FAF7F2]">
              Salon Location &amp; Hours
            </h2>
            <div className="mt-4 space-y-3 text-sm text-[#D8C8B4]">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C59B5F] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  {SALON_CONFIG.address.line1} {SALON_CONFIG.address.line2}{' '}
                  {SALON_CONFIG.address.line3}
                  <br />
                  <span className="text-xs text-[#B9A791]">
                    Plus Code: {SALON_CONFIG.address.plusCode}
                  </span>
                </span>
              </p>

              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C59B5F] shrink-0" aria-hidden="true" />
                <a
                  href={SALON_CONFIG.phoneTel}
                  className="hover:text-[#FAF7F2] tabular-nums transition-colors"
                >
                  {SALON_CONFIG.phoneDisplay}
                </a>
              </p>

              <p className="text-sm text-[#D8C8B4] tabular-nums">
                <span className="font-medium text-[#FAF7F2]">Hours:</span>{' '}
                {SALON_CONFIG.workingHours.days} · {SALON_CONFIG.workingHours.hours}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#44352B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#B9A791]">
          <p>
            &copy; {currentYear} {SALON_CONFIG.businessName}. All rights reserved.
          </p>
          <p>
            {SALON_CONFIG.qualification} · {SALON_CONFIG.address.shortLocation}
          </p>
        </div>
      </div>
    </footer>
  );
}
