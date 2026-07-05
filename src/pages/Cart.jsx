import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import CartItem from '../components/CartItem';
import { getWhatsAppOrderLink } from '../utils/whatsapp';

export default function Cart() {
  const { items, totalItems, totalAmount, customer, saveCustomer, clearCart } = useCart();
  const { showToast } = useToast();
  const [phone, setPhone] = useState(customer.phone || '');
  const [plot, setPlot] = useState(customer.plot || '');
  const [remember, setRemember] = useState(customer.remember || false);
  const [errors, setErrors] = useState({});

  const isEmpty = items.length === 0;

  const validate = () => {
    const next = {};
    if (!/^\d{10}$/.test(phone.trim())) next.phone = 'Enter a valid 10-digit phone number';
    if (!plot.trim()) next.plot = 'Plot / house number is required';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

 const handleOrder = () => {
  if (!validate()) return;

  // Save customer details
  saveCustomer({
    phone: phone.trim(),
    plot: plot.trim(),
    remember,
  });

  // Create WhatsApp link
  const link = getWhatsAppOrderLink({
    items,
    phone: phone.trim(),
    plot: plot.trim(),
  });

  // Open WhatsApp
  window.open(link, "_blank", "noopener,noreferrer");

  // Clear cart after WhatsApp opens
  setTimeout(() => {
    clearCart();

    if (!remember) {
      setPhone("");
      setPlot("");
    }

    showToast("Order opened in WhatsApp.");
  }, 500);
};
  if (isEmpty) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 px-4 py-24 text-center">
        <span className="text-4xl">🛒</span>
        <p className="font-display text-lg font-bold text-[color:var(--color-green-dark)]">Your cart is empty</p>
        <p className="text-sm text-neutral-500">Add a few essentials to get started.</p>
        <Link
          to="/categories"
          className="mt-2 rounded-full bg-[color:var(--color-green)] px-5 py-2.5 text-sm font-semibold text-white active:scale-95"
        >
          Browse Categories
        </Link>
      </div>
    );
  }

  return (
    <div className="px-4 pb-40 pt-2">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="font-display text-xl font-bold text-[color:var(--color-green-dark)]">
          Your Cart ({totalItems})
        </h1>
        <button
          type="button"
          onClick={clearCart}
          className="text-xs font-semibold text-red-500 active:scale-95"
        >
          Clear
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-6 rounded-2xl bg-white p-4 shadow-card">
        <h2 className="mb-3 text-sm font-bold text-[color:var(--color-green-dark)]">Delivery Details</h2>

        <label className="mb-1 block text-xs font-medium text-neutral-500" htmlFor="phone">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          inputMode="numeric"
          maxLength={10}
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
          placeholder="10-digit mobile number"
          className="mb-1 w-full rounded-xl border border-[color:var(--color-green-50)] bg-[color:var(--color-cream)] px-3 py-2.5 text-sm outline-none focus:border-[color:var(--color-green)]"
        />
        {errors.phone && <p className="mb-2 text-xs text-red-500">{errors.phone}</p>}

        <label className="mb-1 mt-2 block text-xs font-medium text-neutral-500" htmlFor="plot">
          Plot / House Number
        </label>
        <input
          id="plot"
          type="text"
          value={plot}
          onChange={(e) => setPlot(e.target.value)}
          placeholder="e.g. Plot No 12, Street 4"
          className="mb-1 w-full rounded-xl border border-[color:var(--color-green-50)] bg-[color:var(--color-cream)] px-3 py-2.5 text-sm outline-none focus:border-[color:var(--color-green)]"
        />
        {errors.plot && <p className="mb-2 text-xs text-red-500">{errors.plot}</p>}

        <label className="mt-3 flex items-center gap-2 text-xs text-neutral-600">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="h-4 w-4 accent-[color:var(--color-green)]"
          />
          Remember my details on this device
        </label>
      </div>

      <div className="fixed inset-x-0 bottom-16 z-30 border-t border-[color:var(--color-green-50)] bg-white/95 px-4 py-3 backdrop-blur safe-bottom">
        <div className="mx-auto flex max-w-lg items-center justify-between gap-4">
          <div>
            <p className="text-[11px] text-neutral-500">Total Amount</p>
            <p className="font-display text-lg font-extrabold text-[color:var(--color-green-dark)]">
              ₹{totalAmount}
            </p>
          </div>
          <button
            type="button"
            onClick={handleOrder}
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[color:var(--color-green)] py-3 text-sm font-bold text-white shadow-card-lg active:scale-95"
          >
            <MessageCircle size={18} />
            Order on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
