import { Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import QuantitySelector from './QuantitySelector';

export default function ProductCard({ product }) {
  const { getQty, addItem, setQty } = useCart();
  const { showToast } = useToast();
  const qty = getQty(product.id);
  const outOfStock = product.stock === false;

  const handleAdd = () => {
    if (outOfStock) return;
    addItem(product, 1);
    showToast(`${product.name} added to cart`);
  };

  return (
    <div className="group relative flex w-full flex-col overflow-hidden rounded-2xl bg-white shadow-card transition hover:shadow-card-lg">
      <div className="relative aspect-square w-full overflow-hidden bg-[color:var(--color-green-50)]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className={`h-full w-full object-cover transition duration-300 ${outOfStock ? 'grayscale opacity-60' : 'group-hover:scale-105'}`}
        />
        {product.popular && !outOfStock && (
          <span className="absolute left-2 top-2 rounded-full bg-[color:var(--color-yellow)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[color:var(--color-green-dark)]">
            Popular
          </span>
        )}
        {outOfStock && (
          <span className="absolute inset-0 flex items-center justify-center bg-black/30">
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[color:var(--color-green-dark)]">
              Out of Stock
            </span>
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1 p-3">
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-[color:var(--color-green-dark)]">
          {product.name}
        </h3>
        <p className="text-xs text-neutral-500">{product.weight}</p>
        <div className="mt-auto flex items-end justify-between pt-2">
          <span className="font-display text-base font-bold text-[color:var(--color-green-dark)]">
            ₹{product.price}
          </span>
          {qty === 0 ? (
            <button
              type="button"
              onClick={handleAdd}
              disabled={outOfStock}
              aria-label={`Add ${product.name} to cart`}
              className="flex h-9 items-center gap-1 rounded-full bg-[color:var(--color-green)] px-3 text-sm font-semibold text-white shadow-card transition active:scale-90 disabled:cursor-not-allowed disabled:bg-neutral-300"
            >
              <Plus size={16} strokeWidth={2.5} />
              Add
            </button>
          ) : (
            <QuantitySelector
              qty={qty}
              onIncrease={() => setQty(product.id, qty + 1)}
              onDecrease={() => setQty(product.id, qty - 1)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
