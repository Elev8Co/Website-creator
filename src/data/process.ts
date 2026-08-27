export interface ProcessStep {
  number: string;
  name: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    name: 'Discover',
    description:
      'We learn about your business, your goals, and your customers so everything we build is built for a reason.',
  },
  {
    number: '02',
    name: 'Design & Shoot',
    description:
      'We design your website and/or shoot video content that matches your brand and speaks to your audience.',
  },
  {
    number: '03',
    name: 'Build & Edit',
    description:
      'We build a fast, responsive website and edit your footage into polished, scroll-stopping content.',
  },
  {
    number: '04',
    name: 'Launch & Grow',
    description:
      "We launch, then keep optimizing -- so your website and content keep bringing in new customers.",
  },
];
