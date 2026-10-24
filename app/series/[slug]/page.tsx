import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SeriesCard } from "@/components/ui/series-card";
import { series } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return series.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = series.find((entry) => entry.slug === slug);
  if (!item) return { title: "Série não encontrada" };
  return {
    title: item.title,
    description: item.synopsis,
    openGraph: {
      title: `${item.title} | Talentsy Nexus`,
      description: item.synopsis,
      locale: "pt_BR",
      type: "video.tv_show",
    },
  };
}

export default async function SeriesPage({ params }: Props) {
  const { slug } = await params;
  const item = series.find((entry) => entry.slug === slug);
  if (!item) notFound();

  return (
    <main className="shell">
      <section className="page-intro pb-5">
        <span className="eyebrow">Série original</span>
        <div className="detail-layout">
          <div className="detail-copy">
            <div className="detail-meta">
              <span className="pill">{item.badge}</span>
              <span className="muted">{item.genre}</span>
              <span className="muted">{item.episodes.length} episódios</span>
            </div>
            <h1 className="m-0 text-[clamp(2.2rem,5vw,4rem)] font-extrabold tracking-[-.06em]">{item.title}</h1>
            <p>{item.synopsis}</p>
            <p className="!mt-2 !text-sm !text-[#d4d9d4]"><strong>{item.tagline}</strong></p>
            <Link className="accent-button mt-3" href={`/feed?series=${item.slug}`}>▶ <span>Assistir do início</span></Link>
          </div>
          <div className="detail-poster">
            <SeriesCard item={item} />
          </div>
        </div>
      </section>

      <section className="content-section !mt-8" aria-labelledby="episode-list-title">
        <div className="section-heading">
          <h2 className="section-title" id="episode-list-title">Episódios</h2>
          <span className="muted text-sm">{item.episodes.length} capítulos · episódios verticais</span>
        </div>
        <div className="episode-list">
          {item.episodes.map((episode) => (
            <Link
              key={episode.id}
              className="episode-row"
              href={`/feed?series=${item.slug}&episode=${episode.number}`}
              aria-label={`Assistir episódio ${episode.number}: ${episode.title}`}
            >
              <span className="episode-number">{String(episode.number).padStart(2, "0")}</span>
              <span>
                <h3>{episode.title}</h3>
                <p>{episode.synopsis}</p>
              </span>
              <span className="episode-label">{episode.isPremium ? "◈ Premium" : "Grátis"}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
