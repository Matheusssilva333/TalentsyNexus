"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { EpisodePlayer } from "@/components/player/episode-player";
import { mockUser, series } from "@/lib/content";

export function EpisodeFeed() {
  const [coins, setCoins] = useState(mockUser.coins);
  const searchParams = useSearchParams();
  const requestedSlug = searchParams.get("series");
  const requestedEpisode = Number(searchParams.get("episode") ?? 1);
  const selectedSeries = series.find((item) => item.slug === requestedSlug) ?? series[0];
  const orderedSeries = [selectedSeries, ...series.filter((item) => item.id !== selectedSeries.id)];
  const feedEntries = orderedSeries.flatMap((item) =>
    item.episodes.map((episode) => ({ item, episode })),
  );
  const startIndex = feedEntries.findIndex(
    ({ item, episode }) => item.slug === selectedSeries.slug && episode.number === requestedEpisode,
  );
  const visibleEntries = startIndex > 0
    ? [...feedEntries.slice(startIndex), ...feedEntries.slice(0, startIndex)]
    : feedEntries;

  return (
    <div className="feed-track" aria-label="Feed vertical de episódios">
      {visibleEntries.map(({ item, episode }) => {
        const nextEpisode = item.episodes[episode.number];
        return (
          <div className="feed-snap" key={episode.id}>
            <EpisodePlayer
              item={item}
              episode={episode}
              nextEpisode={nextEpisode}
              coins={coins}
              onUnlock={(cost) => setCoins((balance) => balance - cost)}
            />
          </div>
        );
      })}
    </div>
  );
}
