import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import PrimaryButton from '../components/PrimaryButton';
import GhostButton from '../components/GhostButton';
import BrandRing from '../components/BrandRing';

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-32 md:py-40 overflow-hidden"
    >
      <BrandRing className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[560px] w-[560px] md:h-[760px] md:w-[760px] opacity-[0.06]" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full blur-[140px] bg-white/[0.04]" />

      <FadeIn delay={0} y={20}>
        <div className="relative inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs sm:text-sm uppercase tracking-widest text-ink/80">
          <span className="h-1.5 w-1.5 rounded-full bg-muted" />
          Web Design &amp; Videography Studio
        </div>
      </FadeIn>

      <div className="relative overflow-hidden mt-8 md:mt-10">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-semibold leading-[1.05] text-[11vw] sm:text-[8vw] md:text-[6vw] lg:text-[5vw]">
            Elevate your
            <br />
            business online
          </h1>
        </FadeIn>
      </div>

      <FadeIn delay={0.35} y={20}>
        <p className="relative mt-8 md:mt-10 max-w-2xl text-muted font-light text-base sm:text-lg md:text-xl leading-relaxed">
          Elev8 Co. builds high-converting websites and creates scroll-stopping videography that
          help businesses win more customers.
        </p>
      </FadeIn>

      <FadeIn delay={0.5} y={20}>
        <div className="relative mt-10 md:mt-12 flex flex-col sm:flex-row items-center gap-4">
          <PrimaryButton href="#contact">Book a Call</PrimaryButton>
          <GhostButton href="#services">See Our Services</GhostButton>
        </div>
      </FadeIn>

      <motion.div
        className="absolute bottom-10 text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
