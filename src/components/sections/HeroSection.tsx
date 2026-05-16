// src/components/sections/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp, fadeIn } from "@/lib/animations";

export function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=1920&q=80"
          alt="Japanese BBQ Grill Ambience"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-kaizen-black" />
        {/* Red accent gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-kaizen-red/10 via-transparent to-transparent" />
        {/* Smoke/vignette overlay */}
        <div className="absolute inset-0 bg-radial-gradient"
          style={{
            background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 border border-kaizen-gold/40 text-kaizen-gold text-xs tracking-[0.3em] uppercase font-medium">
            Est. 2020 · All You Can Eat
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-[0.9] mb-6"
        >
          JAPANESE
          <br />
          <span className="text-gradient-red" style={{
            background: "linear-gradient(135deg, #B11226, #ff3355)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            BBQ GRILL
          </span>
          <br />
          &amp; SHABU-SHABU
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Unlimited Premium Meat · AYCE Experience
          <br />
          <span className="text-kaizen-gold/80">Malang · Surabaya · Bali · Jogja · Makassar</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo("#pricelist")}
            className="px-8 py-4 bg-kaizen-red hover:bg-kaizen-red-dark text-white font-semibold text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-xl hover:shadow-kaizen-red/30 active:scale-95"
          >
            View Pricelist
          </button>
          <button
            onClick={() => scrollTo("#reservation")}
            className="px-8 py-4 bg-transparent border border-white/30 hover:border-white text-white font-semibold text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white/10 active:scale-95"
          >
            Reserve Table
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="text-white/40" size={28} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
