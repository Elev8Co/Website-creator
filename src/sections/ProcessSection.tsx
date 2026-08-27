import FadeIn from '../components/FadeIn';
import { processSteps } from '../data/process';

export default function ProcessSection() {
  return (
    <section id="process" className="px-6 md:px-10 py-24 md:py-32 bg-surface">
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-semibold leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(2.25rem, 6.5vw, 72px)' }}
        >
          Our Process
        </h2>
      </FadeIn>

      <div className="mt-16 md:mt-20 max-w-4xl mx-auto">
        {processSteps.map((step, i) => (
          <FadeIn key={step.number} delay={i * 0.1}>
            <div
              className="flex items-start gap-6 sm:gap-10 py-8 sm:py-10"
              style={{
                borderBottom:
                  i < processSteps.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : undefined,
              }}
            >
              <span
                className="brand-italic text-white/30 leading-none flex-shrink-0"
                style={{ fontSize: 'clamp(2.25rem, 6vw, 72px)' }}
              >
                {step.number}
              </span>
              <div className="flex flex-col gap-2 pt-2 sm:pt-3">
                <h3 className="text-ink font-medium uppercase tracking-wide text-lg sm:text-xl md:text-2xl">
                  {step.name}
                </h3>
                <p className="text-muted font-light leading-relaxed max-w-xl text-sm sm:text-base md:text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
