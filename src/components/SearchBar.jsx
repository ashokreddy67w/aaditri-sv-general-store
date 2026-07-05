import { Search, X } from 'lucide-react';

export default function SearchBar({ value, onChange, onFocus, placeholder = 'Search for rice, milk, oil…', autoFocus = false }) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-[color:var(--color-green-50)] px-4 py-2.5">
      <Search size={18} className="shrink-0 text-[color:var(--color-green)]" />
      <input
        type="text"
        inputMode="search"
        autoFocus={autoFocus}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-[color:var(--color-green-dark)] outline-none placeholder:text-neutral-400"
      />
      {value && (
        <button
          type="button"
          aria-label="Clear search"
          onClick={() => onChange('')}
          className="shrink-0 rounded-full p-0.5 text-neutral-400 active:scale-90"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
