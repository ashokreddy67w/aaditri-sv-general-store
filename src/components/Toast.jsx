export default function Toast({ message }) {
  return (
    <div
      role="status"
      className="fixed bottom-24 left-1/2 z-[100] -translate-x-1/2 animate-toast-in rounded-full bg-[color:var(--color-green-dark)] px-5 py-3 text-sm font-medium text-white shadow-card-lg"
    >
      {message}
    </div>
  );
}
