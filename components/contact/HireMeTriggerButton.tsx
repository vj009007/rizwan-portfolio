"use client";

import type { ReactNode } from "react";

declare global {
  interface Window {
    bootstrap?: {
      Modal: {
        getOrCreateInstance: (el: Element) => { show: () => void };
      };
    };
  }
}

export function openHireModal() {
  const el = document.getElementById("bid");
  if (el && window.bootstrap) {
    window.bootstrap.Modal.getOrCreateInstance(el).show();
  }
}

export function HireMeTriggerButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={className}
      data-bs-toggle="modal"
      data-bs-target="#bid"
      onClick={openHireModal}
    >
      {children}
    </button>
  );
}
