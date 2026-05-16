// src/components/sections/LocationsSection.tsx
"use client";

import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { LOCATIONS } from "@/lib/data";

export function LocationsSection() {
  return (
    <section className="section-padding bg-kaizen-black relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-kaizen-red/30 to-transparent" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-kaizen-red/3 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-kaizen-red text-xs tracking-[0.3em] uppercase font-semibold mb-3">
            Temukan Kami
          </p>
          <h2 className="font-heading text-6xl sm:text-7xl text-white leading-none mb-4">
            LOKASI <span className="text-kaizen-gold">KAMI</span>
          </h2>
          <p className="text-white/40 text-sm tracking-wide">
            Hadir di 6 kota besar Indonesia
          </p>
        </motion.div>

        {/* Location cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {LOCATIONS.map((loc) => (
            <motion.div
              key={loc.id}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="group relative border border-white/5 hover:border-kaizen-red/30 bg-kaizen-gray rounded-sm p-6 transition-all duration-300 hover:shadow-xl hover:shadow-kaizen-red/5"
            >
              {/* Top red accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-kaizen-red/0 via-kaizen-red/50 to-kaizen-red/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Location name */}
              <h3 className="font-heading text-xl text-white mb-3 leading-tight group-hover:text-kaizen-gold transition-colors duration-300">
                {loc.name}
              </h3>

              {/* Address */}
              <div className="flex gap-2.5 mb-4">
                <MapPin size={14} className="text-kaizen-red mt-0.5 flex-shrink-0" />
                <p className="text-white/50 text-xs leading-relaxed">{loc.address}</p>
              </div>

              {/* Hours */}
              <div className="flex gap-2.5">
                <Clock size={14} className="text-kaizen-gold mt-0.5 flex-shrink-0" />
                <div className="space-y-1.5">
                  <div>
                    <p className="text-white/30 text-[10px] uppercase tracking-wider">{loc.hours.weekdayLabel}</p>
                    <p className="text-white/70 text-xs font-medium">{loc.hours.weekday}</p>
                  </div>
                  <div>
                    <p className="text-white/30 text-[10px] uppercase tracking-wider">{loc.hours.weekendLabel}</p>
                    <p className="text-white/70 text-xs font-medium">{loc.hours.weekend}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
