import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildWhatsAppBookingMessage,
  buildWhatsAppBookingUrl,
  filterGalleryItems,
  formatReadableDate,
  getServicePriceDisplay,
  isValidPhoneNumber,
  validateBookingForm,
} from './booking';
import { GALLERY_ITEMS, SALON_CONFIG } from '../config/salonConfig';

test('isValidPhoneNumber accepts standard 10-digit and +91 Indian numbers', () => {
  assert.equal(isValidPhoneNumber('+91 60091 04268'), true);
  assert.equal(isValidPhoneNumber('6009104268'), true);
  assert.equal(isValidPhoneNumber('12345'), false);
  assert.equal(isValidPhoneNumber('abc'), false);
});

test('validateBookingForm catches missing required fields', () => {
  const errors = validateBookingForm({
    customerName: '',
    whatsappNumber: '123',
    service: '',
    preferredDate: '',
    preferredTime: '',
    additionalMessage: '',
  });

  assert.ok(errors.customerName);
  assert.ok(errors.whatsappNumber);
  assert.ok(errors.service);
  assert.ok(errors.preferredDate);
  assert.ok(errors.preferredTime);
});

test('validateBookingForm passes with valid complete input', () => {
  const errors = validateBookingForm({
    customerName: 'Alem Jamir',
    whatsappNumber: '+91 9876543210',
    service: 'Balayage',
    preferredDate: '2026-11-20',
    preferredTime: '11:30 AM',
    additionalMessage: 'Looking for subtle caramel tones.',
  });

  assert.deepEqual(errors, {});
});

test('buildWhatsAppBookingUrl produces valid wa.me URL with all fields encoded', () => {
  const values = {
    customerName: 'Temsula Ao',
    whatsappNumber: '+91 6009100000',
    service: 'Blow Dry',
    preferredDate: '2026-11-21',
    preferredTime: '02:00 PM',
    additionalMessage: 'Event styling',
  };

  const url = buildWhatsAppBookingUrl(SALON_CONFIG.whatsappNumber, values);
  assert.ok(url.startsWith('https://wa.me/916009104268?text='));

  const decoded = decodeURIComponent(url.split('?text=')[1]);
  assert.ok(decoded.includes('Name: Temsula Ao'));
  assert.ok(decoded.includes('WhatsApp Number: +91 6009100000'));
  assert.ok(decoded.includes('Service: Blow Dry'));
  assert.ok(decoded.includes(`Preferred Date: ${formatReadableDate('2026-11-21')}`));
  assert.ok(decoded.includes('Preferred Time: 02:00 PM'));
  assert.ok(decoded.includes('Additional Message: Event styling'));
});

test('buildWhatsAppBookingMessage omits Additional Message line when blank', () => {
  const msg = buildWhatsAppBookingMessage({
    customerName: 'Meren',
    whatsappNumber: '9876543210',
    service: 'Eyebrow Beautification',
    preferredDate: '2026-11-22',
    preferredTime: '10:30 AM',
    additionalMessage: '   ',
  });
  assert.equal(msg.includes('Additional Message:'), false);
});

test('getServicePriceDisplay never invents prices and defaults to Contact for Pricing', () => {
  assert.equal(getServicePriceDisplay(null), 'Contact for Pricing');
  assert.equal(getServicePriceDisplay(''), 'Contact for Pricing');
  assert.equal(getServicePriceDisplay('₹1,500'), '₹1,500');
});

test('filterGalleryItems returns all items for All and filters specific categories', () => {
  assert.equal(filterGalleryItems(GALLERY_ITEMS, 'All').length, GALLERY_ITEMS.length);
  const mens = filterGalleryItems(GALLERY_ITEMS, "Men's Hairstyles");
  assert.ok(mens.length >= 1);
  assert.ok(mens.every((item) => item.category === "Men's Hairstyles"));
});
