import { Link } from 'react-router-dom';

export default function HeroBanner() {
  return (
    <section className="relative mx-4 mt-1 overflow-hidden rounded-3xl bg-[color:var(--color-green-dark)] px-5 py-7 text-white shadow-card-lg">
      <svg
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 opacity-90"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M45.5,-58.3C58.4,-49.6,68.2,-35.4,71.9,-19.6C75.6,-3.8,73.2,13.6,65.2,27.9C57.2,42.2,43.6,53.4,28.3,60.8C13,68.2,-4,71.8,-19.8,68.1C-35.6,64.4,-50.2,53.4,-59.6,39.1C-69,24.8,-73.2,7.2,-70.7,-9.1C-68.2,-25.4,-59,-40.4,-46.2,-49.3C-33.4,-58.2,-16.7,-61,0.3,-61.4C17.3,-61.8,34.6,-57,45.5,-58.3Z"
          fill="#F4C430"
          transform="translate(100 100)"
        />
      </svg>

      <p className="relative text-xs font-semibold uppercase tracking-wider text-[color:var(--color-yellow)]">
        Order in under 30 seconds
      </p>
      <h1 className="relative mt-2 max-w-[13rem] font-display text-2xl font-extrabold leading-tight">
        Fresh groceries, straight to WhatsApp
      </h1>
      <p className="relative mt-2 max-w-[15rem] text-sm text-white/80">
        Pick what you need, tell us where — send. No app forms, no waiting.
      </p>

      <Link
        to="/categories"
        className="relative mt-5 inline-flex items-center rounded-full bg-[color:var(--color-yellow)] px-5 py-2.5 text-sm font-bold text-[color:var(--color-green-dark)] shadow-card active:scale-95"
      >
        Start Shopping
      </Link>
    </section>
  );
}
