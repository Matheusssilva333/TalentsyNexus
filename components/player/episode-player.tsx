"use client";

import Link from "next/link";
import { useState } from "react";
import type { Episode, Series } from "@/lib/content";

export function EpisodePlayer({
  item,
  episode,
  nextEpisode,
  coins,
  onUnlock,
}: {
  item: Series;
  episode: Episode;
  nextEpisode?: Episode;
  coins: number;
  onUnlock: (cost: number) => void;
}) {
  const [unlocked, setUnlocked] = useState(!episode.isPremium);
  const [message, setMessage] = useState("");

  function unlockEpisode() {
    if (coins < episode.coins) {
      setMessage("Moedas insuficientes. Volte mais tarde para continuar.");
      return;
    }
    onUnlock(episode.coins);
    setUnlocked(true);
    setMessage("");
  }

  return (
    <article className="player-frame" style={{ "--poster-a": item.colors[0], "--poster-b": item.colors[1] } as React.CSSProperties}>
      {/* Troque este placeholder visual pelo vídeo real 9:16 e sincronize as legendas. */}
      <div className="player-art" aria-hidden="true">
        <span className="player-orb" />
        <span className="player-mark">{item.symbol}</span>
      </div>
      <div className="player-overlay">
        <div className="player-topline">
          <Link href={`/series/${item.slug}`} className="player-series">{item.title}</Link>
          <span className="pill">EP. {String(episode.number).padStart(2, "0")}</span>
        </div>
        {!unlocked ? (
          <div className="premium-gate" role="group" aria-label="Desbloquear episódio premium">
            <div>
              <span className="pill">EPISÓDIO PREMIUM</span>
              <h2>Desbloqueie a história</h2>
              <p>Use moedas de demonstração para continuar assistindo.</p>
              <span className="coin-balance">◈ {coins} moedas disponíveis</span>
              <div className="mt-4">
                <button className="accent-button" onClick={unlockEpisode} type="button">Desbloquear · ◈ {episode.coins}</button>
              </div>
              {message ? <span role="status" className="gate-error">{message}</span> : null}
            </div>
          </div>
        ) : (
          <>
            <p className="player-caption" aria-label={`Legenda: ${episode.caption}`}>{episode.caption}</p>
            <div>
              <div className="player-description">
                <strong>{episode.title}</strong>
                <p>{episode.synopsis}</p>
              </div>
              <div className="player-controls">
                <span className="player-control" aria-label="Duração do episódio">{episode.duration}</span>
                <div className="progress-track" role="progressbar" aria-label="Progresso do episódio" aria-valuemin={0} aria-valuemax={100} aria-valuenow={38}>
                  <div className="progress-fill" />
                </div>
                {nextEpisode ? (
                  <Link
                    className="player-control"
                    href={`/feed?series=${item.slug}&episode=${nextEpisode.number}`}
                    aria-label={`Próximo episódio: ${nextEpisode.title}`}
                  >▶</Link>
                ) : (
                  <Link className="player-control" href={`/series/${item.slug}`} aria-label="Ver detalhes da série">↗</Link>
                )}
              </div>
              <div className="continue-card">
                <div>
                  <strong>{nextEpisode ? "Continua no próximo episódio" : "Fim da temporada"}</strong>
                  <span>{nextEpisode ? `EP. ${String(nextEpisode.number).padStart(2, "0")} · ${nextEpisode.title}` : "Confira outras histórias"}</span>
                </div>
                {nextEpisode ? (
                  <Link className="text-link" href={`/feed?series=${item.slug}&episode=${nextEpisode.number}`} aria-label="Continuar para próximo episódio">→</Link>
                ) : <Link className="text-link" href="/">Ver mais</Link>}
              </div>
            </div>
          </>
        )}
      </div>
    </article>
  );
}
