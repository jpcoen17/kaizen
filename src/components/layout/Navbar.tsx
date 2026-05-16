// src/components/layout/Navbar.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";
import { NAV_LINKS } from "@/lib/data";
import { KaizenLogo } from "@/components/ui/KaizenLogo";

export function Navbar() {
  const scrolled = useScrolled(80);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-kaizen-black/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-3 group"
            >
              <KaizenLogo size={48} />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-white/70 hover:text-white text-sm font-medium tracking-widest uppercase transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-kaizen-red group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={() => handleNavClick("#reservation")}
                className="px-6 py-2.5 bg-kaizen-red hover:bg-kaizen-red-dark text-white text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-kaizen-red/30 active:scale-95"
              >
                Reserve Now
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 bg-kaizen-black/95 backdrop-blur-xl border-b border-white/10"
          >
            <nav className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-white/80 hover:text-white text-lg font-medium tracking-widest uppercase text-left py-2 border-b border-white/5 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#reservation")}
                className="mt-2 w-full py-3 bg-kaizen-red text-white font-semibold tracking-widest uppercase"
              >
                Reserve Now
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
