import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 px-4 py-28 text-center">
      <span className="text-4xl">🧭</span>
      <h1 className="font-display text-xl font-bold text-[color:var(--color-green-dark)]">Page not found</h1>
      <p className="text-sm text-neutral-500">The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-2 rounded-full bg-[color:var(--color-green)] px-5 py-2.5 text-sm font-semibold text-white active:scale-95"
      >
        Back to Home
      </Link>
    </div>
  );
}
