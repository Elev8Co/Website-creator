import AnimatedText from '../components/AnimatedText';

export default function StatementSection() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-32 flex justify-center">
      <AnimatedText
        text="One studio. Two crafts. Websites that convert and videos that get watched, built to bring your business more customers."
        className="text-[#E6E9EF] font-medium text-center leading-relaxed max-w-[720px]"
        style={{ fontSize: 'clamp(1.25rem, 3.2vw, 2.25rem)' }}
      />
    </section>
  );
}
