import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { STORE } from '../constants/config';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 bg-[color:var(--color-cream)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-lg items-center gap-3 px-4 pb-3 pt-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-green)] font-display text-lg font-extrabold text-white">
            A
          </span>
          <div className="leading-tight">
            <p className="font-display text-sm font-bold text-[color:var(--color-green-dark)]">
              {STORE.brand}
            </p>
            <p className="text-[10px] text-neutral-500">SV GENERAL STORE</p>
          </div>
        </Link>

        <button
          type="button"
          onClick={() => navigate('/search')}
          aria-label="Search products"
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-green-50)] text-[color:var(--color-green)] active:scale-90"
        >
          <Search size={18} />
        </button>
      </div>
    </header>
  );
}
