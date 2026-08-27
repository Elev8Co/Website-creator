import { Rocket, ShieldCheck, Users, Zap, type LucideIcon } from 'lucide-react';

export interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const values: Value[] = [
  {
    icon: Rocket,
    title: 'Built to Grow',
    description:
      'Every website and video we create is designed around one goal -- helping you win more customers.',
  },
  {
    icon: Users,
    title: 'Client-First Process',
    description:
      'We work closely with you at every step, so the final product actually fits your brand and your business.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description:
      'We move quickly without cutting corners, so you can launch sooner and start seeing results.',
  },
  {
    icon: ShieldCheck,
    title: 'Ongoing Support',
    description:
      "We don't disappear after launch -- we're here to help your site and content keep performing.",
  },
];
