import type { GalleryCategory, GalleryItem } from '../config/salonConfig';

export interface BookingFormValues {
  customerName: string;
  whatsappNumber: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  additionalMessage: string;
}

export type BookingFormErrors = Partial<Record<keyof BookingFormValues, string>>;

/**
 * Normalizes a phone string by removing spaces, dashes, and parentheses,
 * and checks that it contains a plausible 10 to 15 digit phone number.
 */
export function isValidPhoneNumber(rawPhone: string): boolean {
  const digitsOnly = rawPhone.replace(/[^\d]/g, '');
  return digitsOnly.length >= 10 && digitsOnly.length <= 15;
}

/**
 * Validates required appointment request fields without silently filling defaults.
 */
export function validateBookingForm(values: BookingFormValues): BookingFormErrors {
  const errors: BookingFormErrors = {};

  if (!values.customerName.trim() || values.customerName.trim().length < 2) {
    errors.customerName = 'Please enter your full name (at least 2 characters).';
  }

  if (!values.whatsappNumber.trim()) {
    errors.whatsappNumber = 'Please enter your WhatsApp number so we can confirm.';
  } else if (!isValidPhoneNumber(values.whatsappNumber)) {
    errors.whatsappNumber = 'Please enter a valid 10–15 digit WhatsApp number.';
  }

  if (!values.service.trim()) {
    errors.service = 'Please select the service you would like to request.';
  }

  if (!values.preferredDate.trim()) {
    errors.preferredDate = 'Please choose your preferred appointment date.';
  }

  if (!values.preferredTime.trim()) {
    errors.preferredTime = 'Please select a preferred appointment time.';
  }

  return errors;
}

/**
 * Formats an ISO YYYY-MM-DD date string into a readable date for WhatsApp messages.
 */
export function formatReadableDate(isoDate: string): string {
  if (!isoDate || !/^\d{4}-\d{2}-\d{2}$/.test(isoDate)) {
    return isoDate;
  }
  const [year, month, day] = isoDate.split('-').map(Number);
  const dateObj = new Date(Date.UTC(year, month - 1, day));
  return dateObj.toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

/**
 * Builds the pre-filled WhatsApp booking request message.
 */
export function buildWhatsAppBookingMessage(values: BookingFormValues): string {
  const lines = [
    'Hello Hair by Tsino, I would like to request an appointment.',
    '',
    `Name: ${values.customerName.trim()}`,
    `WhatsApp Number: ${values.whatsappNumber.trim()}`,
    `Service: ${values.service.trim()}`,
    `Preferred Date: ${formatReadableDate(values.preferredDate.trim())}`,
    `Preferred Time: ${values.preferredTime.trim()}`,
  ];

  const message = values.additionalMessage.trim();
  if (message) {
    lines.push(`Additional Message: ${message}`);
  }

  lines.push('', 'Please let me know if this slot is available. Thank you!');
  return lines.join('\n');
}

/**
 * Builds the full https://wa.me/916009104268?text=... URL.
 */
export function buildWhatsAppBookingUrl(
  salonWhatsappNumber: string,
  values: BookingFormValues
): string {
  const cleanSalonDigits = salonWhatsappNumber.replace(/[^\d]/g, '');
  const message = buildWhatsAppBookingMessage(values);
  return `https://wa.me/${cleanSalonDigits}?text=${encodeURIComponent(message)}`;
}

/**
 * Returns formatted price if provided, otherwise the honest fallback.
 */
export function getServicePriceDisplay(price: string | null | undefined): string {
  const trimmed = price?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : 'Contact for Pricing';
}

/**
 * Filters gallery items by category.
 */
export function filterGalleryItems(
  items: GalleryItem[],
  category: GalleryCategory
): GalleryItem[] {
  if (category === 'All') {
    return items;
  }
  return items.filter((item) => item.category === category);
}
