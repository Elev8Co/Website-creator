import { Instagram, Linkedin, Mail } from 'lucide-react';
import FadeIn from './FadeIn';

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'Email', href: 'mailto:hello@elev8co.com', icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 md:px-10 py-12 md:py-16">
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <img src="/logo-circle.png" alt="Elev8 Co." className="h-14 w-14 md:h-16 md:w-16 rounded-full" />
              <span className="text-xl md:text-2xl font-semibold tracking-tight text-white">
                Elev8 Co.
              </span>
            </a>
            <p className="mt-4 text-[#E6E9EF]/60 font-light max-w-xs">
              Websites and videography built to grow your business and win more customers.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#E6E9EF] font-medium uppercase tracking-wider text-sm transition-opacity duration-200 hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#E6E9EF] transition-colors duration-200 hover:bg-white/10"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 md:mt-14 flex flex-col sm:flex-row justify-between gap-4 text-xs text-[#E6E9EF]/40 uppercase tracking-wider">
          <span>&copy; {new Date().getFullYear()} Elev8 Co. All rights reserved.</span>
          <span>Websites &middot; Videography &middot; Growth</span>
        </div>
      </FadeIn>
    </footer>
  );
}
