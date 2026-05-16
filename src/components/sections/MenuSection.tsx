// src/components/sections/MenuSection.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

const CATEGORIES = [
  "Semua",
  "Premium Beef",
  "Wagyu",
  "Chicken BBQ",
  "Seafood",
  "Sushi",
  "Dessert",
  "Drinks",
];

const MENU_ITEMS = [
  {
    id: "1",
    name: "Premium Beef Slice",
    category: "Premium Beef",
    imageUrl: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=75",
  },
  {
    id: "2",
    name: "Wagyu A5",
    category: "Wagyu",
    imageUrl: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=75",
  },
  {
    id: "3",
    name: "Chicken Teriyaki",
    category: "Chicken BBQ",
    imageUrl: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&q=75",
  },
  {
    id: "4",
    name: "King Prawn",
    category: "Seafood",
    imageUrl: "https://images.unsplash.com/photo-1565680018434-b72e3809da1a?w=600&q=75",
  },
  {
    id: "5",
    name: "Salmon Sashimi Roll",
    category: "Sushi",
    imageUrl: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=75",
  },
  {
    id: "6",
    name: "Matcha Ice Cream",
    category: "Dessert",
    imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=75",
  },
  {
    id: "7",
    name: "Japanese Lemonade",
    category: "Drinks",
    imageUrl: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&q=75",
  },
  {
    id: "8",
    name: "Short Rib Slice",
    category: "Premium Beef",
    imageUrl: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=600&q=75",
  },
  {
    id: "9",
    name: "Scallop BBQ",
    category: "Seafood",
    imageUrl: "https://images.unsplash.com/photo-1615361200141-f45040f367be?w=600&q=75",
  },
  {
    id: "10",
    name: "Wagyu Striploin",
    category: "Wagyu",
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=75",
  },
  {
    id: "11",
    name: "Dragon Roll",
    category: "Sushi",
    imageUrl: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&q=75",
  },
  {
    id: "12",
    name: "Mochi Assorted",
    category: "Dessert",
    imageUrl: "https://images.unsplash.com/photo-1563897539633-7374c3d3e162?w=600&q=75",
  },
];

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered =
    activeCategory === "Semua"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="section-padding bg-kaizen-black relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-kaizen-red/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-kaizen-red text-xs tracking-[0.3em] uppercase font-semibold mb-3">
            Pilihan Menu
          </p>
          <h2 className="font-heading text-6xl sm:text-7xl text-white leading-none mb-4">
            MENU <span className="text-kaizen-gold">SHOWCASE</span>
          </h2>
          <p className="text-white/40 text-sm tracking-wide">
            Premium ingredients, crafted with Japanese precision
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-sm ${
                activeCategory === cat
                  ? "bg-kaizen-red text-white shadow-lg shadow-kaizen-red/30"
                  : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          >
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-sm cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-44 sm:h-52 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  {/* Red accent on hover */}
                  <div className="absolute inset-0 bg-kaizen-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category tag */}
                  <span className="absolute top-3 left-3 text-[9px] font-bold tracking-widest uppercase bg-kaizen-red/80 text-white px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.category}
                  </span>
                </div>

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white font-semibold text-sm leading-tight">{item.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
