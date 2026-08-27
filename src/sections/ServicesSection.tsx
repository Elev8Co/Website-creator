import { CheckCircle2 } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { services } from '../data/services';

export default function ServicesSection() {
  return (
    <section id="services" className="px-6 md:px-10 py-24 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-semibold leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(2.25rem, 6.5vw, 72px)' }}
        >
          Our Services
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p className="mt-6 text-center text-muted font-light max-w-xl mx-auto text-base sm:text-lg">
          Two things, done exceptionally well -- built to work together and bring in more
          customers.
        </p>
      </FadeIn>

      <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <FadeIn key={service.number} delay={i * 0.15} y={30}>
              <div className="h-full rounded-[28px] border border-white/10 bg-surface p-8 md:p-10 flex flex-col gap-6 transition-colors duration-300 hover:border-white/25">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/[0.03]">
                    <Icon size={24} className="text-ink" strokeWidth={1.5} />
                  </div>
                  <span className="brand-italic text-white/20 text-4xl md:text-5xl">
                    {service.number}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-ink">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-muted font-medium uppercase tracking-wide text-xs sm:text-sm">
                    {service.tagline}
                  </p>
                </div>

                <p className="text-muted font-light leading-relaxed">{service.description}</p>

                <ul className="mt-auto flex flex-col gap-3 pt-4 border-t border-white/10">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-ink/80">
                      <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-muted" strokeWidth={1.5} />
                      <span className="text-sm sm:text-base font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
