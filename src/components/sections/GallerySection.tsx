// src/components/sections/GallerySection.tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

// Real Kaizen photos — served from /public/gallery/
const GALLERY_ITEMS = [
  {
    id: "1",
    imageUrl: "/gallery/gallery-1.png",
    alt: "Seafood & Chicken BBQ dengan Saus Spesial",
    tall: true,
  },
  {
    id: "2",
    imageUrl: "/gallery/gallery-2.png",
    alt: "Shabu-Shabu — Beragam Topping Premium",
    tall: false,
  },
  {
    id: "3",
    imageUrl: "/gallery/gallery-3.png",
    alt: "Sushi Roll Premium Kaizen",
    tall: false,
  },
  {
    id: "4",
    imageUrl: "/gallery/gallery-4.png",
    alt: "Wagyu & Premium Beef Slice",
    tall: true,
  },
  {
    id: "5",
    imageUrl: "/gallery/gallery-5.png",
    alt: "BBQ Grill — Daging di atas Panggangan",
    tall: false,
  },
  {
    id: "6",
    imageUrl: "/gallery/gallery-6.png",
    alt: "Full AYCE Spread — Daging, Sushi & Dessert",
    tall: false,
  },
  {
    id: "7",
    imageUrl: "/gallery/gallery-7.png",
    alt: "Premium Meat Station",
    tall: false,
  },
  {
    id: "8",
    imageUrl: "/gallery/gallery-8.png",
    alt: "Beef Grill Suasana Premium",
    tall: false,
  },
  {
    id: "9",
    imageUrl: "/gallery/gallery-9.png",
    alt: "Interior Restoran Kaizen — Japanese Arch",
    tall: true,
  },
  {
    id: "10",
    imageUrl: "/gallery/gallery-10.png",
    alt: "Dessert & Minuman Segar",
    tall: false,
  },
  {
    id: "11",
    imageUrl: "/gallery/gallery-11.png",
    alt: "Premium Beef & Seafood BBQ",
    tall: false,
  },
  {
    id: "12",
    imageUrl: "/gallery/gallery-12.png",
    alt: "Shabu Broth & Topping Selection",
    tall: false,
  },
  {
    id: "13",
    imageUrl: "/gallery/gallery-13.png",
    alt: "Suasana Interior — Pohon Sakura Dekorasi",
    tall: false,
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="section-padding bg-kaizen-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-kaizen-gold/20 to-transparent" />

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
            Visual Stories
          </p>
          <h2 className="font-heading text-6xl sm:text-7xl text-white leading-none mb-4">
            GALLERY
          </h2>
          <p className="text-white/40 text-sm tracking-wide">
            Momen premium di setiap kunjungan
          </p>
        </motion.div>

        {/* Masonry-like grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px]"
        >
          {GALLERY_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              className={`group relative overflow-hidden rounded-sm cursor-pointer ${
                item.tall ? "row-span-2" : "row-span-1"
              }`}
            >
              <img
                src={item.imageUrl}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Cinematic overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute inset-0 bg-kaizen-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Alt text reveal */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="text-white text-sm font-medium">{item.alt}</p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-kaizen-gold/0 group-hover:border-kaizen-gold/60 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-white/40 text-sm mb-4">
            Lihat lebih banyak di Instagram kami
          </p>
          <a
            href="https://instagram.com/kaizenayce.id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/30 text-white/70 hover:text-white text-sm font-medium tracking-widest uppercase transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @kaizenayce.id
          </a>
        </motion.div>
      </div>
    </section>
  );
}
