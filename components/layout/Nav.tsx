"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/data/nav";

export function Nav() {
  const [fixed, setFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setFixed(window.scrollY >= 10);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className={fixed ? "bix-fixed" : "bix-static"}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg bix-navbar">
                <Link className="navbar-brand" href="/" style={{ padding: "0 15px" }}>
                  <span style={{ fontSize: "26px", fontWeight: 700, color: "#111a24" }}>
                    Riz<span style={{ color: "#f41a4a" }}>wan</span>
                  </span>
                </Link>
                <button
                  className="navbar-toggler shadow-none"
                  type="button"
                  aria-label="Toggle navigation"
                  onClick={() => setMenuOpen(true)}
                >
                  <i className="ri-menu-2-line" />
                </button>
                <div className="bix-main-menu" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    {navLinks.map((link) => (
                      <li className="nav-item" key={link.href}>
                        <Link className="nav-link" href={link.href}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile-menu */}
      <div
        className="bix-sidebar-overlay"
        style={{ display: menuOpen ? "block" : "none" }}
        onClick={() => setMenuOpen(false)}
      />
      <div className={`bix-side-cart bix-mobile-menu ${menuOpen ? "bix-menu-open" : ""}`}>
        <div className="bix-menu-title">
          <div className="menu-title">
            <h4>Menu</h4>
          </div>
          <button type="button" className="bix-close" onClick={() => setMenuOpen(false)}>
            ×
          </button>
        </div>
        <div className="bix-menu-inner">
          <div className="bix-menu-content">
            <ul>
              {navLinks.map((link) => (
                <li className="nav-item" key={link.href}>
                  <Link href={link.href} className="nav-link" onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
