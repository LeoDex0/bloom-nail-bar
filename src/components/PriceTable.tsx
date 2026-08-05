export interface PriceRow {
  name: string;
  price: string;
  note?: string;
}

export default function PriceTable({ rows }: { rows: PriceRow[] }) {
  return (
    <div className="overflow-hidden rounded-3xl border-2 border-ink/10 bg-white shadow-[0_10px_24px_rgba(58,44,54,0.08)]">
      <ul className="divide-y divide-ink/10">
        {rows.map((row) => (
          <li
            key={row.name}
            className="flex items-baseline justify-between gap-4 px-5 py-4 sm:px-6"
          >
            <div>
              <p className="font-semibold text-ink">{row.name}</p>
              {row.note && (
                <p className="mt-0.5 text-xs text-ink-soft">{row.note}</p>
              )}
            </div>
            <span className="whitespace-nowrap font-display text-lg font-semibold text-accent-deep">
              {row.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
