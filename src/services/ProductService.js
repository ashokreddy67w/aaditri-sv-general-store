// ---------------------------------------------------------------------------
// ProductService
// ---------------------------------------------------------------------------
// This is the ONLY module allowed to know where product data comes from.
// Pages and components must never fetch data directly — they call the
// functions exported here. To move from Google Sheets to a real backend
// API later, rewrite the internals of this file only; every function
// signature below can stay exactly the same.
// ---------------------------------------------------------------------------

import { PRODUCTS_SHEET_CSV_URL, USE_MOCK_DATA_FALLBACK } from '../constants/config';
import { MOCK_PRODUCTS } from '../data/mockProducts';
const CATEGORY_MAP = {
  rice: "Staples",
  atta: "Staples",
  flour: "Staples",
  oats: "Staples",
  poha: "Staples",
  vermicelli: "Staples",

  dal: "Pulses & Grains",
  pulses: "Pulses & Grains",

  "cooking oil": "Cooking Essentials",
  oil: "Cooking Essentials",
  ghee: "Cooking Essentials",
  sugar: "Cooking Essentials",
  salt: "Cooking Essentials",
  spices: "Cooking Essentials",
  masalas: "Cooking Essentials",
  honey: "Cooking Essentials",

  milk: "Dairy",
  butter: "Dairy",
  curd: "Dairy",
  cheese: "Dairy",
  paneer: "Dairy",
  bread: "Dairy",
  eggs: "Dairy",
  "corn flakes": "Dairy",

  tea: "Beverages",
  coffee: "Beverages",
  "green tea": "Beverages",
  juices: "Beverages",
  "cold drinks": "Beverages",
  "energy drinks": "Beverages",
  "mineral water": "Beverages",

  biscuits: "Snacks",
  cookies: "Snacks",
  chips: "Snacks",
  chocolates: "Snacks",
  namkeen: "Snacks",
  "dry fruits": "Snacks",

  soap: "Personal Care",
  shampoo: "Personal Care",
  toothpaste: "Personal Care",
  toothbrush: "Personal Care",
  "hair oil": "Personal Care",
  "face wash": "Personal Care",
  "hand wash": "Personal Care",

  detergent: "Home Care",
  dishwash: "Home Care",
  "floor cleaner": "Home Care",
  "toilet cleaner": "Home Care",
  sanitizer: "Home Care",
  "tissue paper": "Home Care",
  "garbage bags": "Home Care",

  "baby soap": "Baby Care",
  "baby shampoo": "Baby Care",
  "baby powder": "Baby Care",
  diapers: "Baby Care",

  pens: "Stationery",
  pencils: "Stationery",
  notebooks: "Stationery",
  markers: "Stationery",
  erasers: "Stationery",
  batteries: "Stationery",
  candles: "Stationery",
  "match box": "Stationery",

  vegetables: "Vegetables",
  fruits: "Fruits",
};


let cache = null;
let cacheTimestamp = 0;
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

function toBoolean(value) {
  if (typeof value === 'boolean') return value;
  if (value === undefined || value === null) return false;
  const v = String(value).trim().toLowerCase();
  return v === 'true' || v === '1' || v === 'yes';
}

function toNumber(value, fallback = 0) {
  const n = Number(String(value).replace(/[^\d.-]/g, ''));
  return Number.isFinite(n) ? n : fallback;
}

// Minimal CSV parser that handles quoted fields with embedded commas.
function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (char === '"' && next === '"') { field += '"'; i++; }
      else if (char === '"') { inQuotes = false; }
      else { field += char; }
    } else {
      if (char === '"') inQuotes = true;
      else if (char === ',') { row.push(field); field = ''; }
      else if (char === '\n' || char === '\r') {
        if (char === '\r' && next === '\n') i++;
        row.push(field);
        rows.push(row);
        row = [];
        field = '';
      } else field += char;
    }
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows.filter((r) => r.some((cell) => cell.trim() !== ''));
}
function normalizeRow(headers, row) {
  const record = {};

  headers.forEach((header, i) => {
    record[header.trim()] = row[i] ?? "";
  });

  const rawCategory = (record.category ?? "").trim().toLowerCase();

  return {
    id: String(record.id ?? "").trim(),
    sku: String(record.sku ?? "").trim().toUpperCase(),
    name: record.name ?? "",
    weight: record.weight ?? "",

    // Convert sheet category into display category
    category: CATEGORY_MAP[rawCategory] ?? record.category,

    brand: record.brand ?? "",
    price: toNumber(record.price),
    image: record.image ?? "",
    description: record.description ?? "",
    featured: toBoolean(record.featured),
    popular: toBoolean(record.popular),
    stock: record.stock === "" ? true : toBoolean(record.stock),
    displayOrder: toNumber(record.displayOrder, 999),
  };
}
async function fetchFromSheet() {
  if (!PRODUCTS_SHEET_CSV_URL) throw new Error('No sheet URL configured');
  const res = await fetch(PRODUCTS_SHEET_CSV_URL, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Sheet fetch failed: ${res.status}`);
  const text = await res.text();
  const rows = parseCSV(text);
  const [headerRow, ...dataRows] = rows;
  return dataRows.map((row) => normalizeRow(headerRow, row));
}
function getMockData() {
  return MOCK_PRODUCTS
    .filter((p) => p.stock)
    .map((p) => ({ ...p }));
}

async function loadAllProducts({ force = false } = {}) {
  const isFresh = cache && Date.now() - cacheTimestamp < CACHE_TTL_MS;
  if (isFresh && !force) return cache;

  try {
  const products = (await fetchFromSheet()).filter(
  (product) => product.stock
);

cache = products;
cacheTimestamp = Date.now();

return products;
  } catch (err) {
    if (USE_MOCK_DATA_FALLBACK) {
      cache = getMockData();
      cacheTimestamp = Date.now();
      return cache;
    }
    throw err;
  }
}

function sortByDisplayOrder(products) {
  return [...products].sort((a, b) => (a.displayOrder ?? 999) - (b.displayOrder ?? 999));
}

export const ProductService = {
  /** All products, sorted by displayOrder. */
  async getAllProducts() {
    const products = await loadAllProducts();
    return sortByDisplayOrder(products);
  },

  /** Products in a given category id. */
async getProductsByCategory(categoryId) {
  const products = await loadAllProducts();

  return sortByDisplayOrder(
    products.filter(
      (p) =>
        p.category.toLowerCase() ===
        decodeURIComponent(categoryId).toLowerCase()
    )
  );
},
  /** Products marked featured = TRUE. */
  async getFeaturedProducts() {
    const products = await loadAllProducts();
    return sortByDisplayOrder(products.filter((p) => p.featured));
  },

  /** Products marked popular = TRUE. */
  async getPopularProducts() {
    const products = await loadAllProducts();
    return sortByDisplayOrder(products.filter((p) => p.popular));
  },

  /** Most recently added — falls back to reverse displayOrder if no createdAt. */
  async getRecentProducts(limit = 8) {
    const products = await loadAllProducts();
    return [...products].reverse().slice(0, limit);
  },

  /** Realtime search across name, SKU, weight, brand, category, description. */
async searchProducts(query) {
  const products = await loadAllProducts();

  const q = query.trim().toLowerCase();

  if (!q) return [];

  // Split search into words
  const words = q.split(/\s+/);

  const results = products.filter((p) => {
    const searchable = [
      p.name,
      p.sku,
      p.weight,
      p.brand,
      p.category,
      p.description,
    ]
      .join(" ")
      .toLowerCase();

    // Every typed word must exist somewhere
    return words.every((word) => searchable.includes(word));
  });

  console.log("Query:", q);
  console.log("Results:", results);

  return sortByDisplayOrder(results);
},

  /** Get product by ID */
  async getProductById(id) {
    const products = await loadAllProducts();

    return products.find((p) => p.id === String(id)) ?? null;
  },

  /** Get product by SKU */
  async getProductBySku(sku) {
    const products = await loadAllProducts();

    return (
      products.find(
        (p) => p.sku?.toLowerCase() === sku.toLowerCase()
      ) ?? null
    );
  },

  /** Get all categories */
  async getCategories() {
    const products = await loadAllProducts();

    return [...new Set(products.map((p) => p.category))]
      .filter(Boolean)
      .sort();
  },

  /** Force refresh */
  async refresh() {
    return loadAllProducts({ force: true });
  },
};

export default ProductService;