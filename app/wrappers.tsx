// app/wrappers.tsx
"use client";

import { useEffect, useState, ReactNode } from "react";
import Link from "next/link";

type RootClientProps = {
  children: ReactNode;
};

export default function RootClient({ children }: RootClientProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerAlt, setHeaderAlt] = useState(true);

  // Header alt behavior based on banner visibility (replaces scrollex section)
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      const banner = document.getElementById("banner");

      if (!header || !banner) {
        setHeaderAlt(false);
        return;
      }

      const headerHeight = header.offsetHeight;
      const bannerRect = banner.getBoundingClientRect();

      // similar semantics to original: header.alt while banner is "behind" it :contentReference[oaicite:4]{index=4}
      const isAlt = bannerRect.bottom > headerHeight + 1;
      setHeaderAlt(isAlt);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Sync body class with menu visibility (replaces panel plugin)
  useEffect(() => {
    const body = document.body;
    if (menuOpen) {
      body.classList.add("is-menu-visible");
    } else {
      body.classList.remove("is-menu-visible");
    }
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <div id="page-wrapper">
      {/* Header */}
      <header id="header" className={headerAlt ? "alt" : ""}>
        <h1>
          <Link href="/">Dr. T's</Link>
        </h1>
        <nav id="nav">
          <ul>
            <li className="special">
              <a
                href="#menu"
                className="menuToggle"
                onClick={(e) => {
                  e.preventDefault();
                  toggleMenu();
                }}
              >
                <span>Menu</span>
              </a>
              <div id="menu" className={menuOpen ? "visible" : ""}>
                <ul>
                  <li>
                    <Link href="/" onClick={closeMenu}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/generic" onClick={closeMenu}>
                      Generic
                    </Link>
                  </li>
                  <li>
                    <Link href="/elements" onClick={closeMenu}>
                      Elements
                    </Link>
                  </li>
                  <li>
                    <a href="#" onClick={closeMenu}>
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={closeMenu}>
                      Log In
                    </a>
                  </li>
                </ul>
                <a
                  href="#menu"
                  className="close"
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenu();
                  }}
                />
              </div>
            </li>
          </ul>
        </nav>
      </header>

      {/* Clickable overlay shown when menu is open (closes menu on click) */}
      {menuOpen && (
        <div
          id="menu-overlay"
          onClick={() => {
            closeMenu();
          }}
        />
      )}

      {/* Page content */}
      {children}

      {/* Footer – lifted from the original template’s footer */}
      <footer id="footer">
        <ul className="icons">
          <li>
            <a href="#" className="icon brands fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-github">
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; Untitled</li>
          <li>
            Design: <a href="https://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
