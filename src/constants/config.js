// ---------------------------------------------------------------------------
// AADITRI SV GENERAL STORE — Central Config
// ---------------------------------------------------------------------------

export const STORE = {
  name: "AADITRI SV GENERAL STORE",
  brand: "AADITRI",
  tagline: "Fresh Groceries, Daily Essentials & Snacks",
  address: "AADITRI,Guntur, Andhra Pradesh",
  hours: "7:00 AM – 10:00 PM, All Days",
};

// WhatsApp Number (Country Code + Number)
// India = 91
export const ADMIN_WHATSAPP_NUMBER = "7799911166";

// Google Sheet CSV URL
export const PRODUCTS_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSvMCAqVEXMTuHoLEN-C6Xgg9_WHb0qBgn7FoRXPA3rI2NXquorbmBQN7enzT-pk1HpMAGot_-2AgVi/pub?gid=0&single=true&output=csv";

// If Google Sheet fails to load,
// products.js will be used.
export const USE_MOCK_DATA_FALLBACK = false;

export const CATEGORIES = [
  { id: "Staples", name: "Staples", emoji: "🌾" },
  { id: "Vegetables", name: "Vegetables", emoji: "🥦" },
  { id: "Fruits", name: "Fruits", emoji: "🍎" },
  { id: "Dairy", name: "Dairy", emoji: "🥛" },
  { id: "Snacks", name: "Snacks", emoji: "🍪" },
  { id: "Beverages", name: "Beverages", emoji: "🥤" },
  { id: "Cooking Essentials", name: "Cooking Essentials", emoji: "🫒" },
  { id: "Pulses & Grains", name: "Pulses & Grains", emoji: "🌾" },
  { id: "Personal Care", name: "Personal Care", emoji: "🧴" },
  { id: "Home Care", name: "Home Care", emoji: "🧹" },
  { id: "Baby Care", name: "Baby Care", emoji: "🍼" },
  { id: "Stationery", name: "Stationery", emoji: "✏️" },
];

export const STORAGE_KEYS = {
  cart: "aaditri_cart",
  customerDetails: "aaditri_customer_details",
};