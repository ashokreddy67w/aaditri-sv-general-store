import { Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import QuantitySelector from './QuantitySelector';

export default function CartItem({ item }) {
  const { setQty, removeItem } = useCart();

  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-card animate-slide-up">
      <img
        src={item.image}
        alt={item.name}
        className="h-16 w-16 shrink-0 rounded-xl object-cover"
      />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-[color:var(--color-green-dark)]">{item.name}</p>
        <p className="text-xs text-neutral-500">{item.weight}</p>
        <p className="mt-1 font-display text-sm font-bold text-[color:var(--color-green-dark)]">
          ₹{item.price * item.qty}
        </p>
      </div>
      <div className="flex shrink-0 flex-col items-end gap-2">
        <button
          type="button"
          aria-label={`Remove ${item.name}`}
          onClick={() => removeItem(item.id)}
          className="text-neutral-300 transition active:scale-90 hover:text-red-500"
        >
          <Trash2 size={16} />
        </button>
        <QuantitySelector
          size="sm"
          qty={item.qty}
          onIncrease={() => setQty(item.id, item.qty + 1)}
          onDecrease={() => setQty(item.id, item.qty - 1)}
        />
      </div>
    </div>
  );
}
