"use client";

import { useEffect, useRef, useState } from "react";
import { Moon, Terminal, VolumeX } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");
  const tickingRef = useRef(false);
  const activeRef = useRef("Home");

  useEffect(() => {
    const updateActiveSection = () => {
      tickingRef.current = false;

      const current = navItems
        .map((item) => {
          const element = document.getElementById(item.href.slice(1));
          if (!element) return null;

          return {
            label: item.label,
            top: element.getBoundingClientRect().top,
          };
        })
        .filter(Boolean)
        .filter((section) => section!.top <= 170)
        .sort((a, b) => b!.top - a!.top)[0];

      if (current && current.label !== activeRef.current) {
        activeRef.current = current.label;
        setActiveSection(current.label);
      }
    };

    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 flex justify-center px-3">
      <nav className="nav-shell flex max-w-[calc(100vw-1.5rem)] items-center gap-1 overflow-x-auto rounded-full px-2.5 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {navItems.map((item) => {
          const isActive = activeSection === item.label;

          return (
            <a
              key={item.label}
              href={item.href}
              className={`shrink-0 rounded-full px-3.5 py-2 text-[12.5px] font-semibold tracking-[-0.02em] transition-all duration-300 ${
                isActive ? "nav-active" : "nav-item"
              }`}
            >
              {item.label}
            </a>
          );
        })}

        <div className="mx-3 h-6 w-px bg-white/10" />

        <button
          aria-label="Open terminal"
          className="rounded-full p-2 text-white/50 transition hover:bg-white/10 hover:text-cyan-300"
        >
          <Terminal size={16} />
        </button>

        <button
          aria-label="Theme"
          className="rounded-full p-2 text-white/50 transition hover:bg-white/10 hover:text-cyan-300"
        >
          <Moon size={16} />
        </button>

        <button
          aria-label="Sound"
          className="rounded-full p-2 text-white/50 transition hover:bg-white/10 hover:text-cyan-300"
        >
          <VolumeX size={16} />
        </button>
      </nav>
    </header>
  );
}