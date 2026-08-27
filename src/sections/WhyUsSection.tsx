import FadeIn from '../components/FadeIn';
import { values } from '../data/values';

export default function WhyUsSection() {
  return (
    <section id="why-us" className="px-6 md:px-10 py-24 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-semibold leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(2.25rem, 6.5vw, 72px)' }}
        >
          Why Elev8
        </h2>
      </FadeIn>

      <div className="mt-16 md:mt-20 grid sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
        {values.map((value, i) => {
          const Icon = value.icon;
          return (
            <FadeIn key={value.title} delay={i * 0.1} y={30}>
              <div className="h-full rounded-[24px] border border-white/10 bg-surface p-8 flex flex-col gap-4 transition-colors duration-300 hover:border-white/25">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.03]">
                  <Icon size={20} className="text-ink" strokeWidth={1.5} />
                </div>
                <h3 className="text-ink font-medium uppercase tracking-wide text-base sm:text-lg">
                  {value.title}
                </h3>
                <p className="text-muted font-light leading-relaxed">{value.description}</p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
