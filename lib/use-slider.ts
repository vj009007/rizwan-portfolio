"use client";

import { useEffect, useState } from "react";

/** Cycles through `length` slides automatically, matching the original owl-carousel autoplay behavior. */
export function useSlider(length: number, intervalMs = 4000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % length), intervalMs);
    return () => clearInterval(id);
  }, [length, intervalMs]);

  return [index, setIndex] as const;
}
