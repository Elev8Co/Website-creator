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
      className={`inline-flex items-center gap-2 rounded-full border-2 border-[#E6E9EF] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#E6E9EF] transition-colors duration-200 hover:bg-[#E6E9EF]/10 ${className ?? ''}`}
    >
      {children}
    </a>
  );
}
