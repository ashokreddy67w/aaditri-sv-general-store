import { Plus } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import QuantitySelector from "./QuantitySelector";

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
      <div className="relative aspect-square overflow-hidden bg-[color:var(--color-green-50)]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className={`h-full w-full object-cover transition duration-300 ${
            outOfStock ? "grayscale opacity-60" : "group-hover:scale-105"
          }`}
        />

        {product.popular && !outOfStock && (
          <span className="absolute left-2 top-2 rounded-full bg-[color:var(--color-yellow)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[color:var(--color-green-dark)]">
            Popular
          </span>
        )}

        {outOfStock && (
          <span className="absolute inset-0 flex items-center justify-center bg-black/30">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold">
              Out of Stock
            </span>
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-3">
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-[color:var(--color-green-dark)]">
          {product.name}
        </h3>

        {product.weight && (
          <div className="mt-1">
            <span className="inline-block rounded-full bg-[color:var(--color-green-50)] px-2 py-0.5 text-[11px] font-medium text-[color:var(--color-green-dark)]">
              {product.weight}
            </span>
          </div>
        )}

        <div className="mt-auto flex items-end justify-between pt-3">
          <span className="font-display text-base font-bold text-[color:var(--color-green-dark)]">
            ₹{product.price}
          </span>

          {qty === 0 ? (
            <button
              type="button"
              onClick={handleAdd}
              disabled={outOfStock}
              className="flex h-9 items-center gap-1 rounded-full bg-[color:var(--color-green)] px-3 text-sm font-semibold text-white shadow-card active:scale-90 disabled:bg-neutral-300"
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