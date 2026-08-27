import FadeIn from '../components/FadeIn';
import { values } from '../data/values';

export default function WhyUsSection() {
  return (
    <section id="why-us" className="px-6 md:px-10 py-24 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(2.5rem, 9vw, 110px)' }}
        >
          Why Elev8
        </h2>
      </FadeIn>

      <div className="mt-16 md:mt-20 grid sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
        {values.map((value, i) => {
          const Icon = value.icon;
          return (
            <FadeIn key={value.title} delay={i * 0.1} y={30}>
              <div className="h-full rounded-[28px] border border-white/10 bg-white/[0.02] p-8 flex flex-col gap-4 transition-colors duration-300 hover:border-white/20">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: 'linear-gradient(135deg, #7C3AED33, #22D3EE33)' }}
                >
                  <Icon size={22} className="text-[#E6E9EF]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold uppercase text-white">
                  {value.title}
                </h3>
                <p className="text-[#E6E9EF]/60 font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
