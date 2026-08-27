import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import FadeIn from './FadeIn';
import PrimaryButton from './PrimaryButton';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={0} y={-20} as="header">
      <div className="sticky top-0 z-50 backdrop-blur-md bg-[#0A0A0A]/70 border-b border-white/5">
        <nav className="flex items-center justify-between px-6 md:px-10 py-4 md:py-5">
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/logo-circle.png"
              alt="Elev8 Co."
              className="h-10 w-10 md:h-12 md:w-12 rounded-full flex-shrink-0"
            />
            <span className="text-base sm:text-lg md:text-xl font-semibold tracking-tight text-white">
              Elev8 Co.
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#E6E9EF] font-medium uppercase tracking-wider text-sm lg:text-base transition-opacity duration-200 hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <PrimaryButton href="#contact" showIcon={false} className="!px-6 !py-2.5 text-xs">
              Start a Project
            </PrimaryButton>
          </div>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-white"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="md:hidden overflow-hidden border-t border-white/5"
            >
              <div className="flex flex-col gap-6 px-6 py-8">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-[#E6E9EF] font-medium uppercase tracking-wider text-lg"
                  >
                    {link.label}
                  </a>
                ))}
                <PrimaryButton href="#contact" showIcon={false} className="w-fit">
                  Start a Project
                </PrimaryButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
}
