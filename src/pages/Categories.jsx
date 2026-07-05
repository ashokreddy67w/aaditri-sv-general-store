import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import ProductGrid from "../components/ProductGrid";
import { ProductService } from "../services/ProductService";

const categoryEmojis = {
  "Staples": "🌾",
  "Vegetables": "🥦",
  "Fruits": "🍎",
  "Dairy": "🥛",
  "Snacks": "🍪",
  "Beverages": "🥤",
  "Cooking Essentials": "🫒",
  "Pulses & Grains": "🍚",
  "Personal Care": "🧴",
  "Home Care": "🧹",
  "Baby Care": "👶",
  "Stationery": "✏️",
};
function CategoryGridPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const products = await ProductService.getAllProducts();

      const uniqueCategories = [...new Set(products.map((p) => p.category))]
        .filter(Boolean)
        .sort();

      setCategories(uniqueCategories);
    }

    loadCategories();
  }, []);

  return (
    <div className="px-4 pb-4 pt-2">
      <h1 className="mb-4 font-display text-xl font-bold text-[color:var(--color-green-dark)]">
        Shop by Category
      </h1>

      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/categories/${encodeURIComponent(category)}`}
            className="flex flex-col items-center gap-2 rounded-2xl bg-white p-3 text-center shadow-card active:scale-95 transition"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--color-green-50)] text-2xl">
              {categoryEmojis[category] || "🛒"}
            </span>

            <span className="text-[11px] font-medium leading-tight text-[color:var(--color-green-dark)]">
              {category}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function CategoryDetailPage({ categoryId }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);

      const data = await ProductService.getProductsByCategory(
        decodeURIComponent(categoryId)
      );

      setProducts(data);
      setLoading(false);
    }

    loadProducts();
  }, [categoryId]);

  return (
    <div className="px-4 pb-4 pt-2">
      <div className="mb-4 flex items-center gap-2">
        <Link
          to="/categories"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-card active:scale-90"
        >
          <ChevronLeft size={18} />
        </Link>

        <h1 className="font-display text-xl font-bold text-[color:var(--color-green-dark)]">
          {decodeURIComponent(categoryId)}
        </h1>
      </div>

      <ProductGrid
        products={products}
        loading={loading}
        emptyMessage="No products found."
      />
    </div>
  );
}

export default function Categories() {
  const { categoryId } = useParams();

  return categoryId ? (
    <CategoryDetailPage categoryId={categoryId} />
  ) : (
    <CategoryGridPage />
  );
}