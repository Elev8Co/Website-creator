import type { ReactNode } from 'react';

interface GhostButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

export default function GhostButton({ children, href = '#services', className }: GhostButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-ink transition-colors duration-200 hover:bg-white/10 hover:border-white/50 ${className ?? ''}`}
    >
      {children}
    </a>
  );
}
