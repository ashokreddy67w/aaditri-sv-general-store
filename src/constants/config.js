// ---------------------------------------------------------------------------
// AADITRI SV GENERAL STORE — Central Config
// ---------------------------------------------------------------------------

export const STORE = {
  name: "AADITRI SV GENERAL STORE",
  brand: "AADITRI",
  tagline: "Fresh Groceries, Daily Essentials & Snacks",
  address: "Main Road, Rajamahendravaram, Andhra Pradesh",
  hours: "7:00 AM – 10:00 PM, All Days",
};

// WhatsApp Number (Country Code + Number)
// India = 91
export const ADMIN_WHATSAPP_NUMBER = "919652085328";

// Google Sheet CSV URL
export const PRODUCTS_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSvMCAqVEXMTuHoLEN-C6Xgg9_WHb0qBgn7FoRXPA3rI2NXquorbmBQN7enzT-pk1HpMAGot_-2AgVi/pub?gid=0&single=true&output=csv";

// If Google Sheet fails to load,
// products.js will be used.
export const USE_MOCK_DATA_FALLBACK = false;

export const CATEGORIES = [
  { id: "staples", name: "Staples", emoji: "🌾" },
  { id: "vegetables", name: "Vegetables", emoji: "🥦" },
  { id: "fruits", name: "Fruits", emoji: "🍎" },
  { id: "dairy", name: "Dairy", emoji: "🥛" },
  { id: "snacks", name: "Snacks", emoji: "🍪" },
  { id: "beverages", name: "Beverages", emoji: "🥤" },
  { id: "personal-care", name: "Personal Care", emoji: "🧴" },
  { id: "household", name: "Household", emoji: "🧹" },
  { id: "masalas", name: "Masalas", emoji: "🌶️" },
  { id: "bakery", name: "Bakery", emoji: "🍞" },
  { id: "frozen", name: "Frozen", emoji: "🧊" },
  { id: "baby-care", name: "Baby Care", emoji: "🍼" },
  { id: "pooja", name: "Pooja Needs", emoji: "🪔" },
];

export const STORAGE_KEYS = {
  cart: "aaditri_cart",
  customerDetails: "aaditri_customer_details",
};