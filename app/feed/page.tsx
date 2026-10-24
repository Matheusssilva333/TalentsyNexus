import type { Metadata } from "next";
import { Suspense } from "react";
import { EpisodeFeed } from "@/components/player/episode-feed";

export const metadata: Metadata = {
  title: "Assistir episódios",
  description: "Assista ao feed vertical de webdramas da Talentsy Nexus.",
  openGraph: {
    title: "Assistir episódios | Talentsy Nexus",
    description: "Histórias curtas para assistir em qualquer lugar.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function FeedPage() {
  return (
    <main className="shell feed-page">
      <div className="feed-heading">
        <div>
          <span className="eyebrow">Sua próxima história</span>
          <h1>Feed de episódios</h1>
        </div>
        <span className="pill">Role para descobrir ↓</span>
      </div>
      <Suspense fallback={<div className="player-frame" aria-label="Carregando episódios" />}>
        <EpisodeFeed />
      </Suspense>
      <p className="feed-hint">Role para cima ou para baixo para trocar de episódio.</p>
    </main>
  );
}
