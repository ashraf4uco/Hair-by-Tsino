import { useEffect, useState, type FormEvent } from 'react';
import { CalendarCheck, ExternalLink, MessageCircle, ShieldCheck } from 'lucide-react';
import { SALON_CONFIG, SALON_SERVICES } from '../config/salonConfig';
import {
  buildWhatsAppBookingMessage,
  buildWhatsAppBookingUrl,
  validateBookingForm,
  type BookingFormErrors,
  type BookingFormValues,
} from '../utils/booking';

interface BookingSectionProps {
  preselectedService: string;
}

export function BookingSection({ preselectedService }: BookingSectionProps) {
  const [values, setValues] = useState<BookingFormValues>({
    customerName: '',
    whatsappNumber: '',
    service: preselectedService || '',
    preferredDate: '',
    preferredTime: '',
    additionalMessage: '',
  });
  const [errors, setErrors] = useState<BookingFormErrors>({});
  const [isPreparing, setIsPreparing] = useState(false);
  const [preparedRequest, setPreparedRequest] = useState<{
    url: string;
    message: string;
  } | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setValues((prev) => ({ ...prev, service: preselectedService }));
      setErrors((prev) => ({ ...prev, service: undefined }));
    }
  }, [preselectedService]);

  const todayIso = new Date().toISOString().split('T')[0];

  const handleFieldChange = (
    field: keyof BookingFormValues,
    value: string
  ) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (preparedRequest) {
      setPreparedRequest(null);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateBookingForm(values);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setPreparedRequest(null);
      return;
    }

    setIsPreparing(true);
    const whatsappUrl = buildWhatsAppBookingUrl(SALON_CONFIG.whatsappNumber, values);
    const formattedMessage = buildWhatsAppBookingMessage(values);

    window.setTimeout(() => {
      setIsPreparing(false);
      setPreparedRequest({
        url: whatsappUrl,
        message: formattedMessage,
      });

      // Open WhatsApp seamlessly via link element without using window.open popups that get blocked
      const anchor = document.createElement('a');
      anchor.href = whatsappUrl;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    }, 200);
  };

  return (
    <section id="booking" className="bg-[#F3EDE3] py-16 sm:py-20 border-b border-[#E4D9CA]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Booking Guidance Column */}
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-[#7D5B2B]">
              Appointment Request
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#2B211A] text-balance">
              Book Your Visit on WhatsApp
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4A3F37]">
              Complete the short request form with your preferred service, date, and time. Clicking submit prepares a pre-filled WhatsApp message straight to Hair by Tsino.
            </p>

            <div className="mt-7 rounded-2xl bg-[#FFFDF9] border border-[#E4D9CA] p-6 space-y-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#9A743B] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#2B211A]">
                    Direct Salon Confirmation
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#4A3F37]">
                    Appointments are not automatically confirmed online. Hair by Tsino will personally confirm your exact time slot via WhatsApp.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EDE4D8] text-sm text-[#4A3F37] space-y-1.5">
                <p>
                  <span className="font-medium text-[#2B211A]">WhatsApp &amp; Phone:</span>{' '}
                  <span className="tabular-nums">{SALON_CONFIG.phoneDisplay}</span>
                </p>
                <p>
                  <span className="font-medium text-[#2B211A]">Working Hours:</span>{' '}
                  <span className="tabular-nums">
                    {SALON_CONFIG.workingHours.days}, {SALON_CONFIG.workingHours.hours}
                  </span>
                </p>
                <p className="text-xs text-[#6B5B4E]">
                  {SALON_CONFIG.workingHours.sundayNote}
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Booking Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl bg-[#FFFDF9] border border-[#E4D9CA] p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="booking-name"
                    className="block text-sm font-medium text-[#2B211A]"
                  >
                    Customer Name <span className="text-[#8F3A2B]">*</span>
                  </label>
                  <input
                    id="booking-name"
                    name="customerName"
                    type="text"
                    required
                    value={values.customerName}
                    onChange={(e) => handleFieldChange('customerName', e.target.value)}
                    placeholder="Your full name"
                    aria-invalid={Boolean(errors.customerName)}
                    aria-describedby={errors.customerName ? 'booking-name-error' : undefined}
                    className="mt-1.5 w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#2B211A] bg-[#FAF7F2] border border-[#D4C4AE] rounded-lg placeholder:text-[#8B7B6D] focus:border-[#9A743B]"
                  />
                  {errors.customerName && (
                    <p id="booking-name-error" className="mt-1.5 text-xs text-[#8F3A2B]">
                      {errors.customerName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="booking-whatsapp"
                    className="block text-sm font-medium text-[#2B211A]"
                  >
                    WhatsApp Number <span className="text-[#8F3A2B]">*</span>
                  </label>
                  <input
                    id="booking-whatsapp"
                    name="whatsappNumber"
                    type="tel"
                    required
                    value={values.whatsappNumber}
                    onChange={(e) => handleFieldChange('whatsappNumber', e.target.value)}
                    placeholder="+91 98765 43210"
                    aria-invalid={Boolean(errors.whatsappNumber)}
                    aria-describedby={errors.whatsappNumber ? 'booking-whatsapp-error' : undefined}
                    className="mt-1.5 w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#2B211A] bg-[#FAF7F2] border border-[#D4C4AE] rounded-lg placeholder:text-[#8B7B6D] focus:border-[#9A743B] tabular-nums"
                  />
                  {errors.whatsappNumber && (
                    <p id="booking-whatsapp-error" className="mt-1.5 text-xs text-[#8F3A2B]">
                      {errors.whatsappNumber}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="booking-service"
                    className="block text-sm font-medium text-[#2B211A]"
                  >
                    Select Service <span className="text-[#8F3A2B]">*</span>
                  </label>
                  <select
                    id="booking-service"
                    name="service"
                    required
                    value={values.service}
                    onChange={(e) => handleFieldChange('service', e.target.value)}
                    aria-invalid={Boolean(errors.service)}
                    aria-describedby={errors.service ? 'booking-service-error' : undefined}
                    className="mt-1.5 w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#2B211A] bg-[#FAF7F2] border border-[#D4C4AE] rounded-lg focus:border-[#9A743B]"
                  >
                    <option value="">Choose a service</option>
                    {SALON_SERVICES.map((service) => (
                      <option key={service.id} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                    <option value="Haircut & Styling Consultation">
                      Haircut &amp; Styling Consultation
                    </option>
                  </select>
                  {errors.service && (
                    <p id="booking-service-error" className="mt-1.5 text-xs text-[#8F3A2B]">
                      {errors.service}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="booking-date"
                    className="block text-sm font-medium text-[#2B211A]"
                  >
                    Preferred Appointment Date <span className="text-[#8F3A2B]">*</span>
                  </label>
                  <input
                    id="booking-date"
                    name="preferredDate"
                    type="date"
                    min={todayIso}
                    required
                    value={values.preferredDate}
                    onChange={(e) => handleFieldChange('preferredDate', e.target.value)}
                    aria-invalid={Boolean(errors.preferredDate)}
                    aria-describedby={errors.preferredDate ? 'booking-date-error' : undefined}
                    className="mt-1.5 w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#2B211A] bg-[#FAF7F2] border border-[#D4C4AE] rounded-lg focus:border-[#9A743B] tabular-nums"
                  />
                  {errors.preferredDate && (
                    <p id="booking-date-error" className="mt-1.5 text-xs text-[#8F3A2B]">
                      {errors.preferredDate}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="booking-time"
                    className="block text-sm font-medium text-[#2B211A]"
                  >
                    Preferred Time <span className="text-[#8F3A2B]">*</span>
                  </label>
                  <select
                    id="booking-time"
                    name="preferredTime"
                    required
                    value={values.preferredTime}
                    onChange={(e) => handleFieldChange('preferredTime', e.target.value)}
                    aria-invalid={Boolean(errors.preferredTime)}
                    aria-describedby={errors.preferredTime ? 'booking-time-error' : undefined}
                    className="mt-1.5 w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#2B211A] bg-[#FAF7F2] border border-[#D4C4AE] rounded-lg focus:border-[#9A743B] tabular-nums"
                  >
                    <option value="">Choose a time slot</option>
                    {SALON_CONFIG.timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  {errors.preferredTime && (
                    <p id="booking-time-error" className="mt-1.5 text-xs text-[#8F3A2B]">
                      {errors.preferredTime}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="booking-message"
                    className="block text-sm font-medium text-[#2B211A]"
                  >
                    Additional Message (Optional)
                  </label>
                  <textarea
                    id="booking-message"
                    name="additionalMessage"
                    rows={3}
                    value={values.additionalMessage}
                    onChange={(e) => handleFieldChange('additionalMessage', e.target.value)}
                    placeholder="Share hair length, colour goals, or any questions for Tsino..."
                    className="mt-1.5 w-full px-3.5 py-2.5 text-sm text-[#2B211A] bg-[#FAF7F2] border border-[#D4C4AE] rounded-lg placeholder:text-[#8B7B6D] focus:border-[#9A743B]"
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isPreparing}
                  className="w-full min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-medium text-[#FAF7F2] bg-[#2B211A] hover:bg-[#413228] disabled:opacity-70 rounded-lg transition-colors duration-150"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>
                    {isPreparing
                      ? 'Preparing WhatsApp Request...'
                      : 'Book Appointment on WhatsApp'}
                  </span>
                </button>
                <p className="mt-2.5 text-xs text-center text-[#6B5B4E]">
                  Opens WhatsApp chat with {SALON_CONFIG.phoneDisplay}. Our salon team confirms your booking directly on WhatsApp.
                </p>
              </div>

              {preparedRequest && (
                <div
                  role="status"
                  data-testid="booking-prepared-confirmation"
                  className="mt-6 rounded-xl bg-[#F3EDE3] border border-[#D4C4AE] p-5"
                >
                  <div className="flex items-start gap-3">
                    <CalendarCheck className="w-5 h-5 text-[#7D5B2B] shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-lg font-semibold text-[#2B211A]">
                        WhatsApp Request Ready
                      </h3>
                      <p className="mt-1 text-xs text-[#4A3F37]">
                        Your appointment is pending salon confirmation on WhatsApp. If WhatsApp did not open automatically, use the direct link below:
                      </p>
                      <pre className="mt-3 p-3 rounded-lg bg-[#FFFDF9] border border-[#E4D9CA] text-xs text-[#4A3F37] whitespace-pre-wrap font-sans">
                        {preparedRequest.message}
                      </pre>
                      <a
                        href={preparedRequest.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 min-h-[40px] inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#FAF7F2] bg-[#2B211A] hover:bg-[#413228] rounded-lg transition-colors"
                      >
                        <span>Open WhatsApp Chat</span>
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
