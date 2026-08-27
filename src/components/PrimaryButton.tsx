import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface PrimaryButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  showIcon?: boolean;
}

export default function PrimaryButton({
  children,
  href = '#contact',
  className,
  showIcon = true,
}: PrimaryButtonProps) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white transition-transform duration-200 hover:scale-[1.03] ${className ?? ''}`}
      style={{
        background: 'linear-gradient(135deg, #7C3AED 0%, #2563EB 55%, #22D3EE 100%)',
        boxShadow: '0px 4px 20px rgba(37, 99, 235, 0.35)',
      }}
    >
      {children}
      {showIcon && (
        <ArrowUpRight
          size={18}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </a>
  );
}
