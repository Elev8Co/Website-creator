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
      className={`group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-[#0A0A0A] transition-all duration-200 hover:opacity-90 hover:shadow-[0_0_0_1px_rgba(242,239,233,0.3),0_8px_30px_rgba(242,239,233,0.15)] ${className ?? ''}`}
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
