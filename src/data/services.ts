import { Globe, Video, type LucideIcon } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  number: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    icon: Globe,
    number: '01',
    name: 'Web Design & Development',
    tagline: 'Websites that turn visitors into customers',
    description:
      'A custom, mobile-first website built around one goal: getting more people to reach out, book, or buy. Clean design, fast load times, and clear calls-to-action -- no bloated templates.',
    features: [
      'Custom-designed, mobile-first websites',
      'Built for speed, SEO, and easy updates',
      'Clear calls-to-action that drive leads',
      'Ongoing support after launch',
    ],
  },
  {
    icon: Video,
    number: '02',
    name: 'Videography & Content',
    tagline: 'Video that captures attention and builds trust',
    description:
      'Professionally shot and edited video content -- from brand stories to social-ready clips -- that shows off your business and keeps people watching instead of scrolling past.',
    features: [
      'Brand, promo, and product videos',
      'Social-ready short-form content',
      'Professional editing & color grading',
      'Content built to be reused across platforms',
    ],
  },
];
