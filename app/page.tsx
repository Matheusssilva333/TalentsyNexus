import Link from "next/link";
import { SeriesShelf } from "@/components/sections/series-shelf";
import { featuredSeries, newSeries, trendingSeries } from "@/lib/content";

export default function HomePage() {
  return (
    <main className="shell pb-10">
      <section className="hero mt-6" aria-labelledby="hero-title">
        <div className="hero-copy">
          <span className="eyebrow">Uma estreia original Talentsy Nexus</span>
          <h1 id="hero-title">{featuredSeries.title}</h1>
          <p>{featuredSeries.tagline} Uma história de suspense sobre tecnologia, pessoas e as escolhas que transformam o futuro.</p>
          <div className="hero-meta">
            <span className="pill">{featuredSeries.badge}</span>
            <span>{featuredSeries.genre}</span>
            <span>{featuredSeries.episodes.length} episódios</span>
          </div>
          <div className="hero-actions">
            <Link className="accent-button" href={`/feed?series=${featuredSeries.slug}`}>▶ <span>Assistir agora</span></Link>
            <Link className="outline-button" href={`/series/${featuredSeries.slug}`}>＋ <span>Ver série</span></Link>
          </div>
        </div>
      </section>

      <SeriesShelf title="Em alta agora" items={trendingSeries} href="/feed" />
      <SeriesShelf title="Novidades para você" items={newSeries} />

      <aside className="brand-note">
        <div>
          <span className="eyebrow">Histórias com propósito</span>
          <h2>Tecnologia que transforma negócios. Histórias que aproximam pessoas.</h2>
          <p>A Talentsy Nexus conecta inovação e imaginação em uma nova forma de contar histórias.</p>
        </div>
        <Link className="outline-button shrink-0" href="/sobre">Conheça a Talentsy <span aria-hidden="true">→</span></Link>
      </aside>
    </main>
  );
}
