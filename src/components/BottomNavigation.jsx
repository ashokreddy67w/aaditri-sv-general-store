import { NavLink } from 'react-router-dom';
import { Home, LayoutGrid, ShoppingCart, Phone } from 'lucide-react';
import CartBadge from './CartBadge';

const TABS = [
  { to: '/', label: 'Home', icon: Home, end: true },
  { to: '/categories', label: 'Categories', icon: LayoutGrid },
  { to: '/cart', label: 'Cart', icon: ShoppingCart, badge: true },
  { to: '/contact', label: 'Contact', icon: Phone },
];

export default function BottomNavigation() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 safe-bottom border-t border-[color:var(--color-green-50)] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-lg items-center justify-around px-2 py-2">
        {TABS.map(({ to, label, icon: Icon, end, badge }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `relative flex flex-col items-center gap-0.5 rounded-xl px-4 py-1.5 text-[11px] font-medium transition ${
                isActive ? 'text-[color:var(--color-green)]' : 'text-neutral-400'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className="relative">
                  <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                  {badge && <CartBadge />}
                </span>
                {label}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
