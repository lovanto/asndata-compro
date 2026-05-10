"use client";

import { useEffect } from "react";

export default function NavHighlighter() {
  useEffect(() => {
    const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-links a");
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const handleScroll = () => {
      let cur = "";
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 130) {
          cur = section.id;
        }
      });
      navLinks.forEach((link) => {
        link.style.color = link.getAttribute("href") === `#${cur}` ? "var(--cyan)" : "";
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
