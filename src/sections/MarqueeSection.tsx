const items = ['Website Design', 'Videography', 'Brand Growth', 'More Customers'];
const tripled = [...items, ...items, ...items];

export default function MarqueeSection() {
  return (
    <section className="border-y border-white/10 py-6 md:py-8 overflow-hidden">
      <div
        className="flex whitespace-nowrap w-max"
        style={{ animation: 'marquee-scroll 28s linear infinite' }}
      >
        {tripled.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="mx-6 md:mx-10 text-2xl md:text-4xl font-black uppercase tracking-tight text-white/15">
              {item}
            </span>
            <span
              className="h-2 w-2 rounded-full flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #7C3AED, #22D3EE)' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
