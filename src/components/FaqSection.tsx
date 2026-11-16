import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SALON_FAQS } from '../config/salonConfig';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(SALON_FAQS[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="bg-[#FAF7F2] py-16 sm:py-20 border-b border-[#E4D9CA]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium text-[#7D5B2B]">
            Helpful Information
          </p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#2B211A] text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#4A3F37]">
            Quick answers on booking, salon hours, directions, and how to connect with Hair by Tsino.
          </p>
        </div>

        <div className="mt-10 divide-y divide-[#E4D9CA] rounded-2xl bg-[#FFFDF9] border border-[#E4D9CA] overflow-hidden">
          {SALON_FAQS.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            return (
              <div key={item.id}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full min-h-[56px] px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#FAF7F2] transition-colors"
                  >
                    <span className="font-serif text-xl font-semibold text-[#2B211A]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#7D5B2B] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={panelId}
                    className="px-6 pb-5 text-sm sm:text-base leading-relaxed text-[#4A3F37]"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
