import { ExternalLink, Star } from 'lucide-react';
import { SALON_CONFIG } from '../config/salonConfig';

export function ReviewsSection() {
  const { rating, outOf, totalReviews, sourceLabel } = SALON_CONFIG.googleReviews;

  return (
    <section id="reviews" className="bg-[#FAF7F2] py-16 sm:py-20 border-b border-[#E4D9CA]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="rounded-2xl bg-[#FFFDF9] border border-[#E4D9CA] p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 lg:border-r lg:border-[#E4D9CA] lg:pr-10">
            <p className="text-sm font-medium text-[#7D5B2B]">
              Client Trust &amp; Verified Rating
            </p>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-serif text-5xl sm:text-6xl font-semibold text-[#2B211A] tabular-nums">
                {rating}
              </span>
              <span className="font-serif text-2xl text-[#6B5B4E] tabular-nums">
                / {outOf} Google Rating
              </span>
            </div>

            <div className="mt-3 flex items-center gap-1" aria-label={`${rating} out of ${outOf} stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#B0894F] text-[#B0894F]"
                  aria-hidden="true"
                />
              ))}
            </div>

            <p className="mt-4 text-base font-medium text-[#2B211A] tabular-nums">
              {totalReviews} Google Reviews
            </p>
            <p className="mt-1 text-xs text-[#76675B]">
              Based on {SALON_CONFIG.businessName} on {sourceLabel}
            </p>
          </div>

          <div className="lg:col-span-7 lg:pl-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2B211A] text-balance">
              Trusted by Clients Across Chümoukedima &amp; Dimapur
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4A3F37]">
              We believe in transparent, genuine client feedback. Rather than quoting anonymous summaries here, you can read authentic, unedited experiences directly on our official Google Business Profile.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href={SALON_CONFIG.googleBusinessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[46px] inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-[#FAF7F2] bg-[#2B211A] hover:bg-[#413228] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <span>View Google Reviews</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#booking"
                className="min-h-[46px] inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#2B211A] bg-[#F3EDE3] hover:bg-[#EDE4D8] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                Request an Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
