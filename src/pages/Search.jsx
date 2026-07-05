import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import ProductGrid from '../components/ProductGrid';
import { CATEGORIES } from '../constants/config';
import { ProductService } from '../services/ProductService';

export default function Search() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let active = true;
    if (!query.trim()) {
      setResults([]);
      return;
    }
    setLoading(true);
    const timer = setTimeout(async () => {
      const data = await ProductService.searchProducts(query);
      if (!active) return;
      const filtered = activeCategory ? data.filter((p) => p.category === activeCategory) : data;
      setResults(filtered);
      setLoading(false);
    }, 150);
    return () => { active = false; clearTimeout(timer); };
  }, [query, activeCategory]);

  return (
    <div className="px-4 pb-4 pt-2">
      <SearchBar value={query} onChange={setQuery} autoFocus placeholder="Search for rice, milk, oil…" />

      <div className="mt-3 flex gap-2 overflow-x-auto no-scrollbar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
            className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition ${
              activeCategory === cat.id
                ? 'bg-[color:var(--color-green)] text-white'
                : 'bg-[color:var(--color-green-50)] text-[color:var(--color-green-dark)]'
            }`}
          >
            {cat.emoji} {cat.name}
          </button>
        ))}
      </div>

      <div className="mt-5">
        {!query.trim() ? (
          <div className="flex flex-col items-center justify-center gap-2 py-16 text-center">
            <span className="text-3xl">🔍</span>
            <p className="text-sm text-neutral-400">Start typing to find products</p>
          </div>
        ) : (
          <ProductGrid products={results} loading={loading} emptyMessage={`No results for "${query}"`} />
        )}
      </div>
    </div>
  );
}
