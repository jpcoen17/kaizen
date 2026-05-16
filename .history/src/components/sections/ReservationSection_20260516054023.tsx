// src/components/sections/ReservationSection.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/animations";
import { User, Users, Calendar, Clock, Phone, MapPin } from "lucide-react";
import { WHATSAPP_NUMBER, LOCATIONS } from "@/lib/data";

interface FormData {
  name: string;
  guests: string;
  location: string;
  date: string;
  time: string;
  phone: string;
}

export function ReservationSection() {
  const [form, setForm] = useState<FormData>({
    name: "",
    guests: "",
    location: "",
    date: "",
    time: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Halo KAIZEN! Saya ingin melakukan reservasi meja:\n\n` +
        `👤 Nama: ${form.name || "-"}\n` +
        `👥 Jumlah Tamu: ${form.guests || "-"} orang\n` +
        `📍 Lokasi: ${form.location || "-"}\n` +
        `📅 Tanggal: ${form.date || "-"}\n` +
        `🕐 Waktu: ${form.time || "-"}\n` +
        `📱 No. HP: ${form.phone || "-"}\n\n` +
        `Mohon konfirmasinya. Terima kasih! 🙏`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  const inputClass =
    "w-full bg-white/3 border border-white/8 hover:border-white/15 focus:border-kaizen-red/50 text-white placeholder-white/25 px-4 py-3.5 text-sm outline-none transition-all duration-300 rounded-sm";

  return (
    <section id="reservation" className="section-padding bg-kaizen-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-kaizen-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-kaizen-red/5 rounded-full blur-3xl pointer-events-none" />

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
            Book Your Seat
          </p>
          <h2 className="font-heading text-6xl sm:text-7xl text-white leading-none mb-4">
            RESERVASI <span className="text-kaizen-gold">MEJA</span>
          </h2>
          <p className="text-white/40 text-sm tracking-wide">
            Pesan meja Anda sekarang via WhatsApp
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Form */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative border border-white/5 bg-kaizen-black/60 p-8 rounded-sm"
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-kaizen-red/40" />
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-kaizen-gold/30" />

            <div className="space-y-4">
              {/* Name */}
              <div className="relative">
                <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25" />
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Lengkap"
                  value={form.name}
                  onChange={handleChange}
                  className={`${inputClass} pl-10`}
                />
              </div>

              {/* Guests + Location row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Users size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25" />
                  <input
                    type="number"
                    name="guests"
                    placeholder="Jumlah Tamu"
                    min="1"
                    value={form.guests}
                    onChange={handleChange}
                    className={`${inputClass} pl-10`}
                  />
                </div>
                <div className="relative">
                  <MapPin size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25 z-10" />
                  <select
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    className={`${inputClass} pl-10 appearance-none cursor-pointer`}
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    <option value="" className="bg-kaizen-black">Pilih Lokasi</option>
                    {LOCATIONS.map((loc) => (
                      <option key={loc.id} value={loc.name} className="bg-kaizen-black">
                        {loc.name.replace("KAIZEN ", "")}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date + Time row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Calendar size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25" />
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className={`${inputClass} pl-10`}
                    style={{ colorScheme: "dark" }}
                  />
                </div>
                <div className="relative">
                  <Clock size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25" />
                  <input
                    type="time"
                    name="time"
                    value={form.time}
                    onChange={handleChange}
                    className={`${inputClass} pl-10`}
                    style={{ colorScheme: "dark" }}
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="relative">
                <Phone size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Nomor WhatsApp (contoh: 08xx)"
                  value={form.phone}
                  onChange={handleChange}
                  className={`${inputClass} pl-10`}
                />
              </div>

              {/* Submit button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsApp}
                className="w-full mt-2 py-4 bg-[#25D366] hover:bg-[#1fb855] text-white font-bold text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/20 rounded-sm"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Reserve via WhatsApp
              </motion.button>
            </div>
          </motion.div>

          {/* Right: Contact info */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading text-3xl text-white mb-6">HUBUNGI KAMI</h3>

              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex-shrink-0 bg-kaizen-red/10 flex items-center justify-center">
                    <Phone size={16} className="text-kaizen-red" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs tracking-widest uppercase mb-1">WhatsApp</p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-kaizen-gold transition-colors font-medium"
                    >
                      +62 889-9912-9999
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex-shrink-0 bg-kaizen-red/10 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-kaizen-red">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs tracking-widest uppercase mb-1">Instagram</p>
                    <a
                      href="https://instagram.com/kaizenayce.id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-kaizen-gold transition-colors font-medium"
                    >
                      @kaizenayce.id
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-white/5" />
              <div className="w-2 h-2 rotate-45 bg-kaizen-gold/30" />
              <div className="flex-1 h-px bg-white/5" />
            </div>

            {/* Quick info */}
            <div className="bg-kaizen-black/60 border border-white/5 p-6 rounded-sm">
              <p className="text-kaizen-gold text-xs tracking-widest uppercase font-semibold mb-4">Info Reservasi</p>
              <ul className="space-y-2 text-white/50 text-sm">
                <li className="flex gap-2">
                  <span className="text-kaizen-red">—</span>
                  Reservasi dikonfirmasi via WhatsApp
                </li>
                <li className="flex gap-2">
                  <span className="text-kaizen-red">—</span>
                  Minimal 2 jam sebelum kedatangan
                </li>
                <li className="flex gap-2">
                  <span className="text-kaizen-red">—</span>
                  Harap datang tepat waktu
                </li>
                <li className="flex gap-2">
                  <span className="text-kaizen-red">—</span>
                  Untuk grup besar (10+) hubungi langsung
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
