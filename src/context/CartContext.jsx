import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';
import { STORAGE_KEYS } from '../constants/config';
import { readStorage, writeStorage, removeStorage } from '../utils/storage';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => readStorage(STORAGE_KEYS.cart, []));
  const [customer, setCustomer] = useState(() =>
    readStorage(STORAGE_KEYS.customerDetails, { phone: '', plot: '', remember: false })
  );

  useEffect(() => {
    writeStorage(STORAGE_KEYS.cart, items);
  }, [items]);

  const addItem = useCallback((product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + qty } : i));
      }
     return [
  ...prev,
  {
    id: product.id,
    sku: product.sku,
    name: product.name,
    weight: product.weight,
    price: product.price,
    image: product.image,
    qty,
  },
];
    });
  }, []);

  const setQty = useCallback((productId, qty) => {
    setItems((prev) => {
      if (qty <= 0) return prev.filter((i) => i.id !== productId);
      return prev.map((i) => (i.id === productId ? { ...i, qty } : i));
    });
  }, []);

  const removeItem = useCallback((productId) => {
    setItems((prev) => prev.filter((i) => i.id !== productId));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const getQty = useCallback(
    (productId) => items.find((i) => i.id === productId)?.qty ?? 0,
    [items]
  );

  const saveCustomer = useCallback((details) => {
    setCustomer(details);
    if (details.remember) {
      writeStorage(STORAGE_KEYS.customerDetails, details);
    } else {
      removeStorage(STORAGE_KEYS.customerDetails);
    }
  }, []);

  const totals = useMemo(() => {
    const totalItems = items.reduce((sum, i) => sum + i.qty, 0);
    const totalAmount = items.reduce((sum, i) => sum + i.qty * i.price, 0);
    return { totalItems, totalAmount };
  }, [items]);

  const value = useMemo(
    () => ({ items, addItem, setQty, removeItem, clearCart, getQty, customer, saveCustomer, ...totals }),
    [items, addItem, setQty, removeItem, clearCart, getQty, customer, saveCustomer, totals]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
