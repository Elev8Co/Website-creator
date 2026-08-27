import { Mail } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import PrimaryButton from '../components/PrimaryButton';

export default function CTASection() {
  return (
    <section id="contact" className="px-6 md:px-10 py-24 md:py-32">
      <FadeIn delay={0} y={30}>
        <div className="relative max-w-5xl mx-auto rounded-[40px] sm:rounded-[50px] border border-white/10 overflow-hidden px-6 sm:px-12 md:px-16 py-16 sm:py-20 md:py-24 text-center">
          <div
            className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[300px] w-[500px] rounded-full blur-[120px] opacity-30"
            style={{ background: 'linear-gradient(135deg, #7C3AED, #2563EB, #22D3EE)' }}
          />

          <div className="relative">
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.25rem, 7vw, 80px)' }}
            >
              Ready to elevate
              <br />
              your business?
            </h2>

            <p className="mt-6 text-[#E6E9EF]/70 font-light max-w-xl mx-auto text-base sm:text-lg">
              Tell us about your business and we&apos;ll show you how a new website and better
              video content can bring in more customers.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <PrimaryButton href="mailto:hello@elev8co.com">Book a Call</PrimaryButton>
              <a
                href="mailto:hello@elev8co.com"
                className="inline-flex items-center gap-2 text-[#E6E9EF]/70 font-medium uppercase tracking-widest text-sm transition-opacity duration-200 hover:opacity-70"
              >
                <Mail size={18} />
                hello@elev8co.com
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
