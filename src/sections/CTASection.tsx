import { Mail } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import PrimaryButton from '../components/PrimaryButton';
import BrandRing from '../components/BrandRing';

export default function CTASection() {
  return (
    <section id="contact" className="px-6 md:px-10 py-24 md:py-32">
      <FadeIn delay={0} y={30}>
        <div className="relative max-w-5xl mx-auto rounded-[40px] sm:rounded-[50px] border border-white/15 bg-surface overflow-hidden px-6 sm:px-12 md:px-16 py-16 sm:py-20 md:py-24 text-center">
          <BrandRing className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[480px] w-[480px] md:h-[620px] md:w-[620px] opacity-[0.05]" />
          <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[280px] w-[480px] rounded-full blur-[120px] bg-white/[0.05]" />

          <div className="relative">
            <h2
              className="hero-heading font-semibold leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2rem, 6vw, 64px)' }}
            >
              Ready to elevate
              <br />
              your business?
            </h2>

            <p className="mt-6 text-muted font-light max-w-xl mx-auto text-base sm:text-lg">
              Tell us about your business and we&apos;ll show you how a new website and better
              video content can bring in more customers.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <PrimaryButton href="mailto:hello@elev8co.com">Book a Call</PrimaryButton>
              <a
                href="mailto:hello@elev8co.com"
                className="inline-flex items-center gap-2 text-muted font-medium uppercase tracking-widest text-sm transition-colors duration-200 hover:text-ink"
              >
                <Mail size={18} strokeWidth={1.5} />
                hello@elev8co.com
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
