import { MessageCircle, Phone, MapPin, Clock } from 'lucide-react';
import { STORE, ADMIN_WHATSAPP_NUMBER } from '../constants/config';

export default function Contact() {
  return (
    <div className="px-4 pb-8 pt-2">
      <h1 className="mb-1 font-display text-xl font-bold text-[color:var(--color-green-dark)]">
        Get in Touch
      </h1>
      <p className="mb-6 text-sm text-neutral-500">
        Questions about an order or a product? Reach us directly.
      </p>

      <div className="flex flex-col gap-3">
        <a
          href={`https://wa.me/${ADMIN_WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-2xl bg-[color:var(--color-green)] p-4 text-white shadow-card active:scale-95"
        >
          <MessageCircle size={22} />
          <div>
            <p className="text-sm font-semibold">Chat on WhatsApp</p>
            <p className="text-xs text-white/80">Fastest way to reach us</p>
          </div>
        </a>

        <a
          href={`tel:+${ADMIN_WHATSAPP_NUMBER}`}
          className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-card active:scale-95"
        >
          <Phone size={22} className="text-[color:var(--color-green)]" />
          <div>
            <p className="text-sm font-semibold text-[color:var(--color-green-dark)]">Call the Store</p>
            <p className="text-xs text-neutral-500">+{ADMIN_WHATSAPP_NUMBER}</p>
          </div>
        </a>

        <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-card">
          <MapPin size={22} className="text-[color:var(--color-green)]" />
          <div>
            <p className="text-sm font-semibold text-[color:var(--color-green-dark)]">{STORE.name}</p>
            <p className="text-xs text-neutral-500">{STORE.address}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-card">
          <Clock size={22} className="text-[color:var(--color-green)]" />
          <div>
            <p className="text-sm font-semibold text-[color:var(--color-green-dark)]">Store Hours</p>
            <p className="text-xs text-neutral-500">{STORE.hours}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
