const items = ["Shopify", "Klaviyo", "Email Marketing", "Stratégie E-commerce", "React", "TypeScript", "GRDN Freelance"];

export function Marquee() {
  const track = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-border">
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap py-3 text-xs uppercase tracking-[0.3em] text-muted">
        {track.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-10">
            {item}
            <span className="text-accent" aria-hidden>
              •
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
