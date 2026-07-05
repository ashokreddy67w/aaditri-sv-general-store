import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import Navbar from './components/Navbar';
import BottomNavigation from './components/BottomNavigation';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Search from './pages/Search';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function Layout({ children }) {
  const { pathname } = useLocation();
  const hideNavbar = pathname === '/search';

  return (
    <div className="mx-auto min-h-screen max-w-lg bg-[color:var(--color-cream)] pb-20">
      {!hideNavbar && <Navbar />}
      <main>{children}</main>
      <BottomNavigation />
    </div>
  );
}

function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:categoryId" element={<Categories />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}
