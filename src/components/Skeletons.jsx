export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-card">
      <div className="aspect-square w-full animate-pulse bg-[color:var(--color-green-50)]" />
      <div className="flex flex-col gap-2 p-3">
        <div className="h-3.5 w-3/4 animate-pulse rounded bg-neutral-200" />
        <div className="h-3 w-1/2 animate-pulse rounded bg-neutral-100" />
        <div className="mt-2 flex items-center justify-between">
          <div className="h-4 w-10 animate-pulse rounded bg-neutral-200" />
          <div className="h-9 w-16 animate-pulse rounded-full bg-neutral-200" />
        </div>
      </div>
    </div>
  );
}

export function CategoryCardSkeleton() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="h-16 w-16 animate-pulse rounded-2xl bg-neutral-200" />
      <div className="h-2.5 w-10 animate-pulse rounded bg-neutral-200" />
    </div>
  );
}
