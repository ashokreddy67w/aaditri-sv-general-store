import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import HeroBanner from '../components/HeroBanner';
import CategoryCard from '../components/CategoryCard';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';
import { CategoryCardSkeleton } from '../components/Skeletons';
import { CATEGORIES } from '../constants/config';
import { ProductService } from '../services/ProductService';

function SectionHeader({ title, to }) {
  return (
    <div className="mb-3 flex items-center justify-between px-4">
      <h2 className="font-display text-lg font-bold text-[color:var(--color-green-dark)]">{title}</h2>
      {to && (
        <Link to={to} className="flex items-center text-xs font-semibold text-[color:var(--color-green)]">
          See all <ChevronRight size={14} />
        </Link>
      )}
    </div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [popular, setPopular] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    let active = true;
    (async () => {
      const [p, f, r] = await Promise.all([
        ProductService.getPopularProducts(),
        ProductService.getFeaturedProducts(),
        ProductService.getRecentProducts(8),
      ]);
      if (!active) return;
      setPopular(p);
      setFeatured(f);
      setRecent(r);
      setLoading(false);
    })();
    return () => { active = false; };
  }, []);

  return (
    <div className="pb-4">
      <HeroBanner />

      <section className="mt-7">
        <SectionHeader title="Categories" to="/categories" />
        <div className="flex gap-4 overflow-x-auto px-4 pb-1 no-scrollbar">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <CategoryCardSkeleton key={i} />)
            : CATEGORIES.map((cat) => <CategoryCard key={cat.id} category={cat} />)}
        </div>
      </section>

      <section className="mt-8 px-4">
        <SectionHeader title="Popular Right Now" />
        <ProductGrid products={popular} loading={loading} />
      </section>

      <section className="mt-8 px-4">
        <SectionHeader title="Featured" />
        <ProductGrid products={featured} loading={loading} />
      </section>

      <section className="mt-8 px-4">
        <SectionHeader title="Recently Added" />
        <ProductGrid products={recent} loading={loading} />
      </section>

      <section className="mx-4 mt-8 rounded-2xl bg-[color:var(--color-yellow)]/20 p-4 text-center">
        <p className="text-sm font-semibold text-[color:var(--color-green-dark)]">
          🎉 Free delivery on orders above ₹300 in your neighbourhood
        </p>
      </section>

      <Footer />
    </div>
  );
}
