// src/components/sections/InformationSection.tsx
"use client";

import { motion } from "framer-motion";
import { Clock, Calendar, Info } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

const INFO_ITEMS = [
  {
    icon: Clock,
    title: "Jam Operasional Paket",
    items: [
      { label: "Paket Lunch", value: "Jam Buka – 16.00 WIB" },
      { label: "Paket Dinner", value: "16.01 WIB – Tutup" },
    ],
  },
  {
    icon: Calendar,
    title: "Ketersediaan Hari",
    items: [
      { label: "Weekdays", value: "Lunch & Dinner tersedia" },
      { label: "Weekend & Hari Merah", value: "Hanya Dinner" },
    ],
  },
  {
    icon: Info,
    title: "Ketentuan Umum",
    items: [
      { label: "Durasi Makan", value: "90 atau 120 Menit" },
      { label: "Sisa Makanan", value: "Dikenakan biaya tambahan" },
    ],
  },
];

export function InformationSection() {
  return (
    <section className="py-20 bg-kaizen-dark relative overflow-hidden">
      {/* Japanese-style decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-kaizen-red/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-kaizen-gold/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-kaizen-red text-xs tracking-[0.3em] uppercase font-semibold mb-3">
            Informasi Penting
          </p>
          <h2 className="font-heading text-5xl sm:text-6xl text-white">
            KETENTUAN & JAM
            <span className="text-kaizen-gold"> OPERASIONAL</span>
          </h2>
        </motion.div>

        {/* Info cards — Japanese notice board style */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {INFO_ITEMS.map(({ icon: Icon, title, items }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              className="relative border border-white/8 bg-kaizen-black/60 p-6 rounded-sm group hover:border-kaizen-red/30 transition-all duration-300"
            >
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-kaizen-red/40 group-hover:border-kaizen-red transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-kaizen-gold/20 group-hover:border-kaizen-gold/40 transition-colors duration-300" />

              {/* Icon */}
              <div className="w-12 h-12 bg-kaizen-red/10 flex items-center justify-center mb-4 group-hover:bg-kaizen-red/20 transition-colors duration-300">
                <Icon className="text-kaizen-red" size={22} />
              </div>

              <h3 className="text-white font-semibold text-sm tracking-wide uppercase mb-4 pb-3 border-b border-white/5">
                {title}
              </h3>

              <div className="space-y-3">
                {items.map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-white/40 text-xs tracking-wide mb-0.5">{label}</p>
                    <p className="text-white/85 text-sm font-medium">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Banner notice */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 flex items-center gap-4 bg-kaizen-red/10 border border-kaizen-red/20 px-6 py-4 rounded-sm"
        >
          <Info size={18} className="text-kaizen-red flex-shrink-0" />
          <p className="text-white/60 text-sm leading-relaxed">
            <span className="text-white font-semibold">Perhatian:</span> Pada hari Weekend (Sabtu–Minggu) dan Tanggal Merah, hanya tersedia{" "}
            <span className="text-kaizen-red font-semibold">Paket Dinner</span>. Pastikan reservasi Anda sesuai dengan jadwal kunjungan.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
