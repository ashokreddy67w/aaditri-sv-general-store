import { Minus, Plus } from 'lucide-react';

export default function QuantitySelector({ qty, onIncrease, onDecrease, size = 'md' }) {
  const isSmall = size === 'sm';
  const btn = isSmall ? 'h-7 w-7' : 'h-9 w-9';
  const text = isSmall ? 'text-sm' : 'text-base';

  return (
    <div
      className={`flex items-center gap-1 rounded-full bg-[color:var(--color-green)] px-1 py-1 shadow-card animate-pop`}
    >
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={onDecrease}
        className={`${btn} flex items-center justify-center rounded-full text-white transition active:scale-90`}
      >
        <Minus size={isSmall ? 14 : 16} strokeWidth={2.5} />
      </button>
      <span className={`min-w-[1.5rem] text-center font-semibold text-white ${text}`}>{qty}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={onIncrease}
        className={`${btn} flex items-center justify-center rounded-full text-white transition active:scale-90`}
      >
        <Plus size={isSmall ? 14 : 16} strokeWidth={2.5} />
      </button>
    </div>
  );
}
