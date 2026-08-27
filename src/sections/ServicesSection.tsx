import { CheckCircle2 } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { services } from '../data/services';

export default function ServicesSection() {
  return (
    <section id="services" className="px-6 md:px-10 py-24 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(2.5rem, 9vw, 110px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p className="mt-6 text-center text-[#E6E9EF]/60 font-light max-w-xl mx-auto text-base sm:text-lg">
          Two things, done exceptionally well -- built to work together and bring in more
          customers.
        </p>
      </FadeIn>

      <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <FadeIn key={service.number} delay={i * 0.15} y={30}>
              <div className="h-full rounded-[32px] border border-white/10 bg-white/[0.02] p-8 md:p-10 flex flex-col gap-6 transition-colors duration-300 hover:border-white/20">
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ background: 'linear-gradient(135deg, #7C3AED33, #22D3EE33)' }}
                  >
                    <Icon size={26} className="text-[#E6E9EF]" />
                  </div>
                  <span className="text-[#E6E9EF]/20 font-black text-4xl md:text-5xl">
                    {service.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold uppercase text-white">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-[#E6E9EF]/70 font-medium">{service.tagline}</p>
                </div>

                <p className="text-[#E6E9EF]/60 font-light leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-auto flex flex-col gap-3 pt-4 border-t border-white/10">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[#E6E9EF]/80">
                      <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0 text-[#22D3EE]" />
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
