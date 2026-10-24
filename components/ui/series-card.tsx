import Link from "next/link";
import type { Series } from "@/lib/content";

export function SeriesCard({ item }: { item: Series }) {
  return (
    <article className="series-card">
      <Link href={`/series/${item.slug}`} aria-label={`Ver série ${item.title}`}>
        <div
          className="series-poster"
          style={{ "--poster-a": item.colors[0], "--poster-b": item.colors[1] } as React.CSSProperties}
        >
          <div className="poster-art" aria-hidden="true">
            <span className="poster-glow" />
            <span className="poster-symbol">{item.symbol}</span>
          </div>
          <div className="series-poster-content">
            <span className="pill">{item.badge}</span>
            <h3>{item.title}</h3>
            <p>{item.genre}</p>
          </div>
        </div>
      </Link>
      <div className="series-info">
        <span>{item.episodes.length} episódios</span>
        <span>{item.episodes[0].duration} / ep.</span>
      </div>
    </article>
  );
}
