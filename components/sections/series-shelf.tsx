import Link from "next/link";
import type { Series } from "@/lib/content";
import { SeriesCard } from "@/components/ui/series-card";

export function SeriesShelf({ title, items, href }: { title: string; items: Series[]; href?: string }) {
  return (
    <section className="content-section" aria-label={title}>
      <div className="section-heading">
        <h2 className="section-title">{title}</h2>
        {href ? <Link className="text-link" href={href}>Ver tudo <span aria-hidden="true">→</span></Link> : null}
      </div>
      <div className="series-grid">
        {items.map((item) => <SeriesCard key={item.id} item={item} />)}
      </div>
    </section>
  );
}
