// src/components/sections/PricelistSection.tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { PRICE_CATEGORIES } from "@/lib/data";
import type { PriceCategory } from "@/types";
import { Gift } from "lucide-react";

function PriceCard({ category }: { category: PriceCategory }) {
  if (category.isFree) {
    return (
      <motion.div
        variants={staggerItem}
        whileHover={{ y: -4 }}
        className="relative flex flex-col items-center justify-center border border-kaizen-gold/40 bg-kaizen-gold/5 p-8 rounded-sm text-center group hover:border-kaizen-gold hover:shadow-xl hover:shadow-kaizen-gold/10 transition-all duration-400"
      >
        <div className="w-16 h-16 rounded-full bg-kaizen-gold/20 flex items-center justify-center mb-4 group-hover:bg-kaizen-gold/30 transition-colors">
          <Gift className="text-kaizen-gold" size={28} />
        </div>
        <h3 className="font-heading text-3xl text-white mb-1">{category.title}</h3>
        <p className="text-white/50 text-sm mb-4">{category.subtitle}</p>
        <div className="font-heading text-5xl text-kaizen-gold">FREE</div>
        <p className="text-white/40 text-xs mt-2 tracking-widest uppercase">Gratis tanpa biaya</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4 }}
      className="relative border border-white/5 hover:border-kaizen-red/50 bg-kaizen-gray hover:bg-kaizen-gray/80 rounded-sm overflow-hidden group transition-all duration-400 hover:shadow-2xl hover:shadow-kaizen-red/10"
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(177,18,38,0.08) 0%, transparent 70%)" }}
      />

      {/* Header */}
      <div className="relative p-6 pb-4 border-b border-white/5">
        {category.badge && (
          <span
            className={`absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm ${
              category.badgeColor === "gold"
                ? "bg-kaizen-gold/20 text-kaizen-gold border border-kaizen-gold/30"
                : "bg-kaizen-red text-white"
            }`}
          >
            {category.badge}
          </span>
        )}
        <h3 className="font-heading text-2xl text-white mb-0.5">{category.title}</h3>
        <p className="text-white/40 text-xs tracking-wide">{category.subtitle}</p>
      </div>

      {/* Price items */}
      <div className="p-6 space-y-0">
        {/* Lunch section */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-kaizen-gold" />
            <span className="text-kaizen-gold text-xs tracking-[0.2em] uppercase font-semibold">Lunch</span>
          </div>
          <div className="space-y-2 pl-3.5">
            {category.items
              .filter((item) => item.session === "lunch")
              .map((item) => (
                <div key={item.duration} className="flex justify-between items-center">
                  <span className="text-white/50 text-sm">{item.duration}</span>
                  <span className="text-white font-semibold text-sm">{item.price}</span>
                </div>
              ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 my-4" />

        {/* Dinner section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-kaizen-red" />
            <span className="text-kaizen-red text-xs tracking-[0.2em] uppercase font-semibold">Dinner</span>
          </div>
          <div className="space-y-2 pl-3.5">
            {category.items
              .filter((item) => item.session === "dinner")
              .map((item) => (
                <div key={item.duration} className="flex justify-between items-center">
                  <span className="text-white/50 text-sm">{item.duration}</span>
                  <span className="text-white font-semibold text-sm">{item.price}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function PricelistSection() {
  return (
    <section id="pricelist" className="section-padding bg-kaizen-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-kaizen-red/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-kaizen-red text-xs tracking-[0.3em] uppercase font-semibold mb-3">
            Harga Terjangkau
          </p>
          <h2 className="font-heading text-6xl sm:text-7xl md:text-8xl text-white leading-none mb-4">
            PRICELIST
            <span className="text-kaizen-red"> 2026</span>
          </h2>
          <p className="text-white/40 text-base tracking-wide">
            Japanese BBQ Grill & Shabu-Shabu Experience
          </p>

          {/* Decorative line */}
          <div className="flex items-center gap-4 justify-center mt-6">
            <div className="w-16 h-px bg-kaizen-gold/40" />
            <div className="w-2 h-2 rotate-45 bg-kaizen-gold/40" />
            <div className="w-16 h-px bg-kaizen-gold/40" />
          </div>
        </motion.div>

        {/* Price cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {PRICE_CATEGORIES.map((category) => (
            <PriceCard key={category.id} category={category} />
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-white/30 text-xs mt-8 tracking-wide"
        >
          * Harga belum termasuk pajak dan biaya layanan · Harga dapat berubah sewaktu-waktu
        </motion.p>
      </div>
    </section>
  );
}
