import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import PrimaryButton from '../components/PrimaryButton';
import GhostButton from '../components/GhostButton';

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-32 md:py-40 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full blur-[120px] opacity-30"
        style={{ background: '#7C3AED' }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full blur-[120px] opacity-30"
        style={{ background: '#22D3EE' }}
      />

      <FadeIn delay={0} y={20}>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs sm:text-sm uppercase tracking-widest text-[#E6E9EF]/80">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: 'linear-gradient(135deg, #7C3AED, #22D3EE)' }}
          />
          Web Design &amp; Videography Studio
        </div>
      </FadeIn>

      <div className="overflow-hidden mt-6 md:mt-8">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-[0.95] text-[13vw] sm:text-[10vw] md:text-[8vw] lg:text-[6.5vw]">
            Elevate your
            <br />
            business online
          </h1>
        </FadeIn>
      </div>

      <FadeIn delay={0.35} y={20}>
        <p className="mt-8 md:mt-10 max-w-2xl text-[#E6E9EF]/70 font-light text-base sm:text-lg md:text-xl leading-relaxed">
          Elev8 Co. builds high-converting websites and creates scroll-stopping videography that
          help businesses win more customers.
        </p>
      </FadeIn>

      <FadeIn delay={0.5} y={20}>
        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center gap-4">
          <PrimaryButton href="#contact">Book a Call</PrimaryButton>
          <GhostButton href="#services">See Our Services</GhostButton>
        </div>
      </FadeIn>

      <motion.div
        className="absolute bottom-10 text-[#E6E9EF]/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
