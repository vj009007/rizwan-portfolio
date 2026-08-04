"use client";

import { useEffect, useRef, useState } from "react";

export function BackToTop() {
  const pathRef = useRef<SVGPathElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = `${pathLength} ${pathLength}`;

    function update() {
      if (!path) return;
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength) / height;
      path.style.strokeDashoffset = String(progress);
      setVisible(scroll > 50);
    }

    update();
    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <a
      href="#Top"
      className="back-to-top result-placeholder"
      style={{ display: visible ? "block" : "none" }}
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <i className="ri-arrow-up-line" />
      <div className="back-to-top-wrap active-progress">
        <svg viewBox="-1 -1 102 102">
          <path ref={pathRef} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </a>
  );
}
