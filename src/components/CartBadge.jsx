import { useCart } from '../context/CartContext';

export default function CartBadge() {
  const { totalItems } = useCart();
  if (!totalItems) return null;

  return (
    <span className="absolute -right-2 -top-2 flex h-4 min-w-[1rem] animate-pop items-center justify-center rounded-full bg-[color:var(--color-yellow)] px-1 text-[9px] font-bold text-[color:var(--color-green-dark)]">
      {totalItems > 99 ? '99+' : totalItems}
    </span>
  );
}
