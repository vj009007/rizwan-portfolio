"use client";

import { useEffect } from "react";
import AOS from "aos";

export function AosInit() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return null;
}
