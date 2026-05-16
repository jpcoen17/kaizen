// src/components/sections/AboutSection.tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight, staggerContainer, staggerItem } from "@/lib/animations";
import { Flame, Users, RefreshCw, Armchair } from "lucide-react";

const FEATURES = [
  { icon: Flame, title: "Premium Meat", desc: "Daging segar berkualitas tinggi dipilih setiap hari" },
  { icon: Users, title: "Family Friendly", desc: "Tempat yang nyaman untuk keluarga dan gathering" },
  { icon: RefreshCw, title: "Unlimited Refill", desc: "Makan sepuasnya tanpa batas waktu yang ditentukan" },
  { icon: Armchair, title: "Cozy Ambience", desc: "Suasana Jepang modern yang hangat dan instagrammable" },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-kaizen-dark relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-kaizen-red/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-kaizen-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                alt="Kaizen Restaurant Interior"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-kaizen-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 bg-kaizen-red px-6 py-4 shadow-2xl"
            >
              <p className="font-heading text-4xl text-white">5+</p>
              <p className="text-white/80 text-xs tracking-widest uppercase">Kota di Indonesia</p>
            </motion.div>

            {/* Gold border accent */}
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-kaizen-gold/40" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Section label */}
            <p className="text-kaizen-red text-xs tracking-[0.3em] uppercase font-semibold mb-4">
              Tentang Kami
            </p>

            <h2 className="font-heading text-5xl sm:text-6xl text-white leading-[1.0] mb-6">
              THE KAIZEN
              <br />
              <span className="text-kaizen-gold">EXPERIENCE</span>
            </h2>

            <p className="text-white/60 text-base leading-relaxed mb-10">
              Kaizen menghadirkan pengalaman All You Can Eat Japanese BBQ Grill & Shabu-Shabu
              dengan pilihan premium meat, suasana modern Jepang, dan pengalaman makan yang hangat
              untuk keluarga maupun gathering bersama teman. Setiap kunjungan adalah momen yang
              tak terlupakan.
            </p>

            {/* Feature grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {FEATURES.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={staggerItem}
                  className="group p-4 border border-white/5 hover:border-kaizen-red/30 bg-white/2 hover:bg-kaizen-red/5 transition-all duration-300 rounded-sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-kaizen-red/10 text-kaizen-red group-hover:bg-kaizen-red group-hover:text-white transition-all duration-300 rounded-sm">
                      <Icon size={16} />
                    </div>
                    <h3 className="text-white font-semibold text-sm">{title}</h3>
                  </div>
                  <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
