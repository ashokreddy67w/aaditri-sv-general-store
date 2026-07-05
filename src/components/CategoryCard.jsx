import { Link } from 'react-router-dom';

export default function CategoryCard({ category }) {
  return (
    <Link
      to={`/categories/${category.id}`}
      className="flex flex-col items-center gap-2 text-center active:scale-95 transition"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[color:var(--color-green-50)] text-3xl shadow-card">
        {category.emoji}
      </span>
      <span className="w-16 text-[11px] font-medium leading-tight text-[color:var(--color-green-dark)]">
        {category.name}
      </span>
    </Link>
  );
}
