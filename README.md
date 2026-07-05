# AADITRI SV GENERAL STORE — WhatsApp Grocery Ordering PWA

A fast, no-backend grocery ordering app. Customers browse, add items to a
cart, enter their phone number and plot number once, and tap **Order on
WhatsApp** — no accounts, no payment gateway, no checkout page.

## Tech stack

React 19 · Vite · Tailwind CSS 4 · React Router · Context API · LocalStorage
· Lucide React · PWA (installable, offline-capable shell)

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

## 1. Set your WhatsApp number

Open `src/constants/config.js` and set:

```js
export const ADMIN_WHATSAPP_NUMBER = '91XXXXXXXXXX'; // country code + number, no + or spaces
```

## 2. Connect your Google Sheet (product database)

The app never hardcodes products — everything flows through
`src/services/ProductService.js`, which is the **only** file that talks to
the data source.

1. Create a Google Sheet with these exact column headers in row 1:

   ```
   id | name | category | brand | price | image | description | featured | popular | stock | displayOrder
   ```

   - `category` should match one of the ids in `src/constants/config.js` →
     `CATEGORIES` (e.g. `staples`, `vegetables`, `dairy`...).
   - `featured` / `popular` / `stock` should be `TRUE` or `FALSE`.
   - `stock = FALSE` hides the "Add" action and shows an "Out of Stock" badge.
   - `image` should be a direct image URL (Google Drive public link, Imgur,
     or your own CDN).
   - `displayOrder` is a number controlling sort order (lower = first).

2. In Google Sheets: **File → Share → Publish to web** → choose the sheet →
   format **Comma-separated values (.csv)** → Publish. Copy the generated
   link.

3. Paste that link into `src/constants/config.js`:

   ```js
   export const PRODUCTS_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/.../pub?output=csv';
   ```

Until you add a real sheet URL, the app automatically falls back to the
bundled demo catalog in `src/data/mockProducts.js` so you can preview and
deploy immediately.

### Swapping Google Sheets for a real backend later

Everything downstream of `ProductService` (pages, components, cart) calls
functions like `ProductService.getAllProducts()` and
`ProductService.searchProducts(query)`. To move to a real API, rewrite the
internals of `src/services/ProductService.js` only — every function
signature can stay exactly the same, so no other file needs to change.

## 3. Branding

Colors, store name, address and hours live in
`src/constants/config.js` (`STORE`) and `src/index.css` (`@theme` tokens):

| Token | Hex |
|---|---|
| Primary Green | `#0A5A2A` |
| Dark Green | `#07441F` |
| Yellow | `#F4C430` |
| Cream | `#FFF9E8` |
| White | `#FFFFFF` |

To use your real AADITRI logo instead of the generated "A" mark:

- Replace `public/favicon.svg`, `public/apple-touch-icon.png`, and the three
  files in `public/icons/` with your exported logo assets (same filenames
  and sizes).
- Swap the inline logo badge in `src/components/Navbar.jsx` for an
  `<img>` tag pointing at your logo file.

## 4. Deploying to Vercel

```bash
npm i -g vercel
vercel
```

Or connect the GitHub repo in the Vercel dashboard — it auto-detects Vite
and needs no extra configuration.

## Project structure

```
src/
  constants/config.js         Store info, WhatsApp number, sheet URL, categories
  services/ProductService.js  The only module that talks to the data source
  data/mockProducts.js        Demo fallback data (same shape as the Sheet)
  context/CartContext.jsx     Cart state + localStorage persistence
  context/ToastContext.jsx    Toast notifications
  utils/whatsapp.js           Builds the WhatsApp order message + link
  utils/storage.js            localStorage helpers
  components/                 Reusable UI: Navbar, ProductCard, CartItem, etc.
  pages/                      Home, Categories, Search, Cart, Contact, NotFound
```

## Notes

- No login, signup, OTP, email, payment gateway, or admin panel — by design.
- The cart page doubles as checkout: delivery details are collected inline,
  then handed straight to WhatsApp.
- "Remember my details" stores phone + plot number in `localStorage` so
  repeat customers skip typing them again.
