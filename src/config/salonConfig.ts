export interface SalonService {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  price: string | null;
  category: 'Confirmed Service' | 'Additional Service Slot';
  isEditableSlot?: boolean;
}

export type GalleryCategory =
  | 'All'
  | "Women's Hairstyles"
  | "Men's Hairstyles"
  | 'Hair Colour'
  | 'Hair Transformations'
  | 'Client Looks';

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'All'>;
  image: string;
  alt: string;
  caption: string;
  isStudioPreview: boolean;
}

export interface InstagramHighlight {
  id: string;
  title: string;
  image: string;
  alt: string;
  focusPosition?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

/**
 * Central Salon Configuration
 * Edit business details, Google Review figures, services, gallery photos,
 * working hours, and social links here without touching UI components.
 */
export const SALON_CONFIG = {
  businessName: 'Hair by Tsino',
  monogram: 'HT',
  category: 'Hair Stylist',
  qualification: 'Sassoon Certified Hairstylist',
  phoneDisplay: '+91 6009104268',
  phoneTel: 'tel:+916009104268',
  whatsappNumber: '916009104268',
  whatsappBaseUrl: 'https://wa.me/916009104268',
  instagramHandle: '@hair_by_tsino',
  instagramUrl: 'https://www.instagram.com/hair_by_tsino/',
  googleBusinessProfileUrl: 'https://share.google/7qQRoy5oKXMcNDvx1',
  googleReviews: {
    rating: '4.9',
    outOf: '5',
    totalReviews: 79,
    sourceLabel: 'Google Business Profile',
  },
  address: {
    line1: 'Fancy Market, 2nd Gate,',
    line2: 'Chümoukedima, Dimapur,',
    line3: 'Nagaland 797103, India.',
    fullText: 'Fancy Market, 2nd Gate, Chümoukedima, Dimapur, Nagaland 797103, India',
    shortLocation: 'Chümoukedima, Dimapur, Nagaland',
    plusCode: 'RQ6P+CR Dimapur, Nagaland',
  },
  maps: {
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=RQ6P%2BCR%20Dimapur%2C%20Nagaland%2C%20Fancy%20Market%2C%202nd%20Gate%2C%20Chumoukedima%2C%20Nagaland%20797103',
    embedUrl:
      'https://maps.google.com/maps?q=RQ6P%2BCR%20Dimapur%2C%20Nagaland&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  workingHours: {
    days: 'Monday – Saturday',
    hours: '9:30 AM – 6:00 PM',
    sundayNote: 'Sunday hours are not listed — please inquire on WhatsApp for availability.',
  },
  hero: {
    heading: 'Your Hair, Your Style, Your Confidence.',
    subheading:
      'Experience professional hair styling and beauty services at Hair by Tsino.',
    image: '/src/assets/images/hero_editorial_hair_1794844799289.jpg',
    imageAlt:
      'Editorial portrait showcasing glossy, dimensional waves styled at Hair by Tsino salon studio',
  },
  about: {
    heading: 'Precision Craftsmanship in Chümoukedima',
    lead: 'Hair by Tsino brings disciplined Sassoon-trained hair artistry and thoughtful beauty care to Fancy Market, 2nd Gate in Chümoukedima, Dimapur.',
    paragraphs: [
      'Led by a Sassoon Certified Hairstylist, every appointment begins with an unhurried consultation tailored to your hair texture, face structure, and everyday styling routine.',
      'From dimensional hand-painted colour and glossy salon blowouts to refined brow care and smooth waxing services, the focus remains simple: healthy hair, balanced proportions, and looks that feel effortless long after you leave the chair.',
    ],
    interiorImage: '/src/assets/images/salon_interior_studio_1794844801319.jpg',
    interiorImageAlt:
      'Warm ivory and brushed brass styling sanctuary aesthetic representing Hair by Tsino',
    pillars: [
      {
        title: 'Sassoon Certified Foundation',
        detail: 'Structured cutting, balance, and bespoke colour placement guided by international Sassoon methodology.',
      },
      {
        title: 'Customer-Focused Consultations',
        detail: 'Attentive one-on-one guidance designed around your hair health, lifestyle, and personal preference.',
      },
      {
        title: 'Tailored Creative Looks',
        detail: 'Modern hairstyles, dimensional colour, and finishing techniques customized for lasting wearability.',
      },
    ],
  },
  timeSlots: [
    '09:30 AM',
    '10:30 AM',
    '11:30 AM',
    '12:30 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
  ],
};

export const SALON_SERVICES: SalonService[] = [
  {
    id: 'balayage',
    name: 'Balayage',
    description:
      'Hand-painted dimensional colour designed to grow out softly with luminous, sun-lit ribbons tailored to your base tone.',
    image: '/src/assets/images/service_balayage_1794844799476.jpg',
    imageAlt: 'Luminous caramel balayage hair colour with soft salon waves',
    price: null,
    category: 'Confirmed Service',
  },
  {
    id: 'blow-dry',
    name: 'Blow Dry',
    description:
      'Signature salon wash and round-brush blowout crafted for lasting bounce, mirror-like shine, and frizz-free movement.',
    image: '/src/assets/images/service_blowdry_1794844799399.jpg',
    imageAlt: 'Voluminous glossy salon blow dry hairstyle on dark brunette hair',
    price: null,
    category: 'Confirmed Service',
  },
  {
    id: 'body-waxing',
    name: 'Body Waxing',
    description:
      'Gentle, hygienic waxing care performed with attention to skin comfort for smooth, clean, long-lasting results.',
    image: '/src/assets/images/salon_interior_studio_1794844801319.jpg',
    imageAlt: 'Serene, hygienic beauty treatment suite atmosphere at Hair by Tsino',
    price: null,
    category: 'Confirmed Service',
  },
  {
    id: 'eyebrow-beautification',
    name: 'Eyebrow Beautification',
    description:
      'Balanced brow shaping and clean detailing tailored to frame your eyes naturally and refine your facial symmetry.',
    image: '/src/assets/images/service_brow_beauty_1794844800319.jpg',
    imageAlt: 'Neatly sculpted natural eyebrows and beauty care tray in warm daylight',
    price: null,
    category: 'Confirmed Service',
  },
  {
    id: 'custom-cut-styling',
    name: 'Precision Haircut & Styling',
    description:
      'Sassoon-inspired precision cutting and tailored finishing designed around your hair texture, face shape, and everyday styling routine.',
    image: '/src/assets/images/gallery_mens_style_1794844800746.jpg',
    imageAlt: 'Tailored precision haircut and modern textured styling',
    price: null,
    category: 'Additional Service Slot',
    isEditableSlot: true,
  },
  {
    id: 'custom-salon-treatment',
    name: 'Custom Hair Care & Styling Package',
    description:
      'Tailored hair care treatments, event styling, or bespoke combination packages — inquire on WhatsApp for current seasonal offerings.',
    image: '/src/assets/images/hero_editorial_hair_1794844799289.jpg',
    imageAlt: 'Custom salon hair care and finishing treatment preview',
    price: null,
    category: 'Additional Service Slot',
    isEditableSlot: true,
  },
];

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'All',
  "Women's Hairstyles",
  "Men's Hairstyles",
  'Hair Colour',
  'Hair Transformations',
  'Client Looks',
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'look-1',
    title: 'Soft Espresso Dimensional Waves',
    category: "Women's Hairstyles",
    image: '/src/assets/images/hero_editorial_hair_1794844799289.jpg',
    alt: "Women's hairstyle showcasing soft dimensional espresso waves",
    caption: 'Portfolio preview · Replace with original Hair by Tsino client photography.',
    isStudioPreview: true,
  },
  {
    id: 'look-2',
    title: 'Caramel Hand-Painted Balayage',
    category: 'Hair Colour',
    image: '/src/assets/images/service_balayage_1794844799476.jpg',
    alt: 'Warm caramel balayage hair colour with natural movement',
    caption: 'Portfolio preview · Replace with original Hair by Tsino colour work.',
    isStudioPreview: true,
  },
  {
    id: 'look-3',
    title: 'Tailored Textured Scissor Crop',
    category: "Men's Hairstyles",
    image: '/src/assets/images/gallery_mens_style_1794844800746.jpg',
    alt: "Men's hairstyle featuring precision scissor-cut textured crop",
    caption: 'Portfolio preview · Replace with original Hair by Tsino men’s styling photo.',
    isStudioPreview: true,
  },
  {
    id: 'look-4',
    title: 'Signature Glossy Blowout',
    category: 'Hair Transformations',
    image: '/src/assets/images/service_blowdry_1794844799399.jpg',
    alt: 'Voluminous glossy salon blowout transformation look',
    caption: 'Portfolio preview · Replace with original Hair by Tsino styling work.',
    isStudioPreview: true,
  },
  {
    id: 'look-5',
    title: 'Natural Brow Framing & Care',
    category: 'Client Looks',
    image: '/src/assets/images/service_brow_beauty_1794844800319.jpg',
    alt: 'Clean sculpted eyebrow beautification and serene beauty care',
    caption: 'Portfolio preview · Replace with original Hair by Tsino client look.',
    isStudioPreview: true,
  },
  {
    id: 'look-6',
    title: 'Calm Studio Styling Experience',
    category: 'Client Looks',
    image: '/src/assets/images/salon_interior_studio_1794844801319.jpg',
    alt: 'Boutique salon styling atmosphere in warm ivory and brass',
    caption: 'Studio mood preview · Replace with original Hair by Tsino salon interior photo.',
    isStudioPreview: true,
  },
];

export const INSTAGRAM_HIGHLIGHTS: InstagramHighlight[] = [
  {
    id: 'ig-1',
    title: 'Warm Dimensional Waves',
    image: '/src/assets/images/hero_editorial_hair_1794844799289.jpg',
    alt: 'Warm dimensional waves showcase for Hair by Tsino Instagram',
    focusPosition: 'object-top',
  },
  {
    id: 'ig-2',
    title: 'Hand-Painted Balayage',
    image: '/src/assets/images/service_balayage_1794844799476.jpg',
    alt: 'Hand-painted balayage showcase for Hair by Tsino Instagram',
    focusPosition: 'object-top',
  },
  {
    id: 'ig-3',
    title: 'Signature Salon Blowout',
    image: '/src/assets/images/service_blowdry_1794844799399.jpg',
    alt: 'Signature salon blowout showcase for Hair by Tsino Instagram',
    focusPosition: 'object-top',
  },
  {
    id: 'ig-4',
    title: "Men's Precision Cut",
    image: '/src/assets/images/gallery_mens_style_1794844800746.jpg',
    alt: 'Tailored men haircut showcase for Hair by Tsino Instagram',
    focusPosition: 'object-top',
  },
  {
    id: 'ig-5',
    title: 'Brow & Beauty Detailing',
    image: '/src/assets/images/service_brow_beauty_1794844800319.jpg',
    alt: 'Brow care showcase for Hair by Tsino Instagram',
    focusPosition: 'object-center',
  },
  {
    id: 'ig-6',
    title: 'Inside the Salon Studio',
    image: '/src/assets/images/salon_interior_studio_1794844801319.jpg',
    alt: 'Boutique salon interior showcase for Hair by Tsino Instagram',
    focusPosition: 'object-center',
  },
];

export const SALON_FAQS: FaqItem[] = [
  {
    id: 'faq-book',
    question: 'How can I book an appointment?',
    answer:
      'Use the appointment booking form on this page to choose your service, preferred date, and time. Clicking "Book Appointment on WhatsApp" opens WhatsApp directly with your request pre-filled for +91 6009104268, and our team will confirm your slot directly on WhatsApp.',
  },
  {
    id: 'faq-location',
    question: 'Where is Hair by Tsino located?',
    answer:
      'We are located at Fancy Market, 2nd Gate, Chümoukedima, Dimapur, Nagaland 797103, India (Google Plus Code: RQ6P+CR Dimapur, Nagaland).',
  },
  {
    id: 'faq-hours',
    question: 'What are the salon opening hours?',
    answer:
      'Hair by Tsino is open Monday through Saturday from 9:30 AM to 6:00 PM. Please message us on WhatsApp if you would like to inquire about schedule availability.',
  },
  {
    id: 'faq-contact',
    question: 'How can I contact the hairstylist?',
    answer:
      'You can reach Hair by Tsino directly via WhatsApp or phone call at +91 6009104268, or connect with us on Instagram at @hair_by_tsino.',
  },
  {
    id: 'faq-previous-work',
    question: 'How can I see previous hairstyles?',
    answer:
      'Browse our curated work gallery on this website by category, or visit our official Instagram profile (@hair_by_tsino) and Google Business Profile to explore recent hairstyles and client updates.',
  },
  {
    id: 'faq-directions',
    question: 'How do I get directions to the salon?',
    answer:
      'Click any "Get Directions" button in our Contact section to open Google Maps straight to Fancy Market, 2nd Gate, Chümoukedima (Plus Code: RQ6P+CR Dimapur, Nagaland).',
  },
];
