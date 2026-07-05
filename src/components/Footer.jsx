import { STORE } from '../constants/config';

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-[color:var(--color-green-50)] px-4 py-6 text-center">
      <p className="font-display text-sm font-bold text-[color:var(--color-green-dark)]">{STORE.name}</p>
      <p className="mt-1 text-xs text-neutral-500">{STORE.address}</p>
      <p className="mt-1 text-xs text-neutral-500">{STORE.hours}</p>
      <p className="mt-3 text-[11px] text-neutral-400">
        © {new Date().getFullYear()} {STORE.brand}. Order fast, order fresh.
      </p>
    </footer>
  );
}
