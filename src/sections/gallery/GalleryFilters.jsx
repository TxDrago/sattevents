"use client";

const filters = [
  "All",
  "Festivals",
  "Corporate",
  "Weddings",
  "Sports",
  "MICE",
  "Concerts",
  "Behind The Scenes",
];

const GalleryFilters = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {filters.map((filter) => {
        const active = activeFilter === filter;

        return (
          <button
            key={filter}
            type="button"
            onClick={() => onFilterChange(filter)}
            className={`whitespace-nowrap border px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
              active
                ? "border-[var(--satt-gold)] bg-[var(--satt-gold)] text-[var(--satt-text-primary)]"
                : "border-[var(--satt-border)]/40 hover:border-[var(--satt-gold)]"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};

export default GalleryFilters;