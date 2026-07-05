import ProductCard from './ProductCard';
import { ProductCardSkeleton } from './Skeletons';

export default function ProductGrid({ products, loading, emptyMessage = 'No products found.' }) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!products?.length) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-white/60 py-14 text-center">
        <span className="text-3xl">🧺</span>
        <p className="text-sm font-medium text-neutral-500">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
