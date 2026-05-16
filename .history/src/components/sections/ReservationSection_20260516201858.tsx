"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/animations";
import { User, Users, Calendar, Clock, Phone, MapPin } from "lucide-react";

interface FormData {
  name: string;
  guests: string;
  location: string;
  date: string;
  time: string;
  phone: string;
}

interface BranchInfo {
  name: string;
  waNumber: string;
  waLink: string;
}

const BRANCHES: Record<string, BranchInfo> = {
  malang: {
    name: "KAIZEN MALANG",
    waNumber: "+62 812-3306-000",
    waLink: "6281233060000",
  },
  surabaya: {
    name: "KAIZEN SURABAYA",
    waNumber: "+62 811-3545-123",
    waLink: "6281135451230",
  },
  bali_sunset: {
    name: "KAIZEN BALI MATAHARI TERBENAM",
    waNumber: "+62 819-9473-5765",
    waLink: "6281994735765",
  },
  jogja: {
    name: "KAIZEN JOGJA",
    waNumber: "+62 889-9912-9999",
    waLink: "6288999129999",
  },
  bali_renon: {
    name: "KAIZEN BALI RENON",
    waNumber: "+62 889-0872-0000",
    waLink: "6288908720000",
  },
  makassar: {
    name: "KAIZEN MAKASSAR",
    waNumber: "+62 887-7710-888",
    waLink: "628877710888",
  },
};

const GROUP_WA = "6285117016747";

export function ReservationSection() {
  const [form, setForm] = useState<FormData>({
    name: "",
    guests: "",
    location: "",
    date: "",
    time: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const selectedBranch = form.location ? BRANCHES[form.location] : null;

  const handleReserve = () => {
    const waNumber = selectedBranch ? selectedBranch.waLink : "6288999129999";
    const branchName = selectedBranch ? selectedBranch.name : "belum dipilih";
    const msg =
      "Halo KAIZEN! Saya ingin reservasi meja." +
      "%0A%0ANama: " + encodeURIComponent(form.name || "-") +
      "%0AJumlah Tamu: " + encodeURIComponent(form.guests || "-") + " orang" +
      "%0ACabang: " + encodeURIComponent(branchName) +
      "%0ATanggal: " + encodeURIComponent(form.date || "-") +
      "%0AWaktu: " + encodeURIComponent(form.time || "-") +
      "%0ANo. HP: " + encodeURIComponent(form.phone || "-") +
      "%0A%0AMohon konfirmasinya. Terima kasih!";
    window.open("https://wa.me/" + waNumber + "?text=" + msg, "_blank");
  };

  const handleGroup = () => {
    const msg =
      "Halo kak! Mau tanya untuk Group / Corporate Kaizen All You Can Eat" +
      "%0A%0ANama : " +
      "%0ATanggal Kedatangan : " +
      "%0AJumlah Pax : " +
      "%0AAsal Instansi : " +
      "%0ACabang Outlet yang Dituju : " +
      "%0AWaktu : 90 Menit / 120 Menit";
    window.open("https://wa.me/" + GROUP_WA + "?text=" + msg, "_blank");
  };

  const handleBusiness = () => {
    const msg =
      "Halo kak! Kami ingin mengajukan penawaran dengan data berikut" +
      "%0A%0ANama : " +
      "%0AAsal Instansi : " +
      "%0AAlamat Instansi : " +
      "%0APengajuan / Keperluan :" +
      "%0ACabang Outlet yang dituju : ";
    window.open("https://wa.me/" + GROUP_WA + "?text=" + msg, "_blank");
  };

  return (
    <section
      id="reservation"
      className="section-padding bg-kaizen-dark relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-kaizen-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-kaizen-red/5 rounded-full blur-3xl pointer-events-none" />

      <style>{`
        .ki { width:100%; background-color:#1c1c1c; border:1px solid rgba(255,255,255,0.10); color:#fff; padding:14px 16px 14px 42px; font-size:0.875rem; outline:none; transition:border-color 0.3s; border-radius:2px; color-scheme:dark; -webkit-appearance:none; appearance:none; }
        .ki::placeholder { color:rgba(255,255,255,0.30); }
        .ki:hover { border-color:rgba(255,255,255,0.22); }
        .ki:focus { border-color:rgba(177,18,38,0.65); }
        .ki option { background-color:#1c1c1c; color:#fff; }
        .ki::-webkit-calendar-picker-indicator { filter:invert(1); opacity:0.6; cursor:pointer; }
        .ksw::after { content:'▾'; position:absolute; right:14px; top:50%; transform:translateY(-50%); color:rgba(255,255,255,0.35); pointer-events:none; font-size:12px; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative border border-white/5 bg-kaizen-black/60 p-8 rounded-sm"
          >
            <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-kaizen-red/40" />
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-kaizen-gold/30" />

            <div className="space-y-4">

              <div className="relative">
                <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 z-10 pointer-events-none" />
                <input type="text" name="name" placeholder="Nama Lengkap" value={form.name} onChange={handleChange} className="ki" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Users size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 z-10 pointer-events-none" />
                  <input type="number" name="guests" placeholder="Jumlah Tamu" min="1" value={form.guests} onChange={handleChange} className="ki" />
                </div>
                <div className="relative ksw">
                  <MapPin size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 z-10 pointer-events-none" />
                  <select name="location" value={form.location} onChange={handleChange} className="ki" style={{ paddingRight: "32px" }}>
                    <option value="">Pilih Cabang</option>
                    {Object.entries(BRANCHES).map(([key, branch]) => (
                      <option key={key} value={key}>
                        {branch.name.replace("KAIZEN ", "")}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {selectedBranch && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 px-4 py-3 bg-green-500/10 border border-green-500/20 rounded-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <div>
                    <p className="text-green-400 text-xs font-semibold">
                      Terhubung ke {selectedBranch.name}
                    </p>
                    <p className="text-white/40 text-xs mt-0.5">
                      WA: {selectedBranch.waNumber}
                    </p>
                  </div>
                </motion.div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Calendar size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 z-10 pointer-events-none" />
                  <input type="date" name="date" value={form.date} onChange={handleChange} className="ki" />
                </div>
                <div className="relative">
                  <Clock size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 z-10 pointer-events-none" />
                  <input type="time" name="time" value={form.time} onChange={handleChange} className="ki" />
                </div>
              </div>

              <div className="relative">
                <Phone size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 z-10 pointer-events-none" />
                <input type="tel" name="phone" placeholder="Nomor WhatsApp (contoh: 08xx)" value={form.phone} onChange={handleChange} className="ki" />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleReserve}
                className="w-full mt-2 py-4 bg-[#25D366] hover:bg-[#1fb855] text-white font-bold text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-3 transition-all duration-300 rounded-sm cursor-pointer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {selectedBranch ? "Reserve ke " + selectedBranch.name.replace("KAIZEN ", "") : "Reserve via WhatsApp"}
              </motion.button>

              <button
                onClick={handleGroup}
                className="w-full py-3 bg-transparent border border-kaizen-red/30 hover:border-kaizen-red text-kaizen-red hover:text-white hover:bg-kaizen-red text-xs font-semibold tracking-[0.2em] uppercase flex items-center justify-center gap-2 transition-all duration-300 rounded-sm cursor-pointer"
              >
                <Users size={14} />
                Group / Corporate Reservation (30+ pax)
              </button>

            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-heading text-3xl text-white mb-6">HUBUNGI KAMI</h3>
              <div className="space-y-3">
                {Object.entries(BRANCHES).map(([key, branch]) => (
                  <a
                    key={key}
                    href={"https://wa.me/" + branch.waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      "flex items-center justify-between px-4 py-3 border rounded-sm transition-all duration-300 group " +
                      (form.location === key
                        ? "border-green-500/50 bg-green-500/10"
                        : "border-white/5 hover:border-white/15 hover:bg-white/5")
                    }
                  >
                    <div>
                      <p className={"text-xs font-semibold mb-0.5 " + (form.location === key ? "text-green-400" : "text-white/60 group-hover:text-white")}>
                        {branch.name.replace("KAIZEN ", "")}
                      </p>
                      <p className="text-white/40 text-xs">{branch.waNumber}</p>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={"flex-shrink-0 " + (form.location === key ? "text-green-400" : "text-white/20 group-hover:text-green-400")}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-white/5" />
              <div className="w-2 h-2 rotate-45 bg-kaizen-gold/30" />
              <div className="flex-1 h-px bg-white/5" />
            </div>

            <div className="space-y-3">
              <button
                onClick={handleGroup}
                className="w-full flex items-center gap-3 px-4 py-3 border border-kaizen-red/20 hover:border-kaizen-red/50 bg-kaizen-red/5 hover:bg-kaizen-red/10 rounded-sm transition-all duration-300 group text-left"
              >
                <Users size={15} className="text-kaizen-red flex-shrink-0" />
                <div>
                  <p className="text-white/70 group-hover:text-white text-xs font-semibold transition-colors">
                    Group / Corporate (30+ pax)
                  </p>
                  <p className="text-white/30 text-xs">+62 851-1701-6747</p>
                </div>
              </button>

              <button
                onClick={handleBusiness}
                className="w-full flex items-center gap-3 px-4 py-3 border border-kaizen-gold/15 hover:border-kaizen-gold/40 bg-kaizen-gold/5 hover:bg-kaizen-gold/10 rounded-sm transition-all duration-300 group text-left"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-kaizen-gold flex-shrink-0">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <div>
                  <p className="text-white/70 group-hover:text-white text-xs font-semibold transition-colors">
                    Business Inquiries (Suppliers, Kerjasama)
                  </p>
                  <p className="text-white/30 text-xs">+62 851-1701-6747</p>
                </div>
              </button>
            </div>

            <div className="bg-kaizen-black/60 border border-white/5 p-5 rounded-sm">
              <p className="text-kaizen-gold text-xs tracking-widest uppercase font-semibold mb-3">Info Reservasi</p>
              <ul className="space-y-2 text-white/50 text-sm">
                <li className="flex gap-2"><span className="text-kaizen-red">—</span>Pilih cabang, WA otomatis tersambung</li>
                <li className="flex gap-2"><span className="text-kaizen-red">—</span>Minimal 2 jam sebelum kedatangan</li>
                <li className="flex gap-2"><span className="text-kaizen-red">—</span>Harap datang tepat waktu</li>
                <li className="flex gap-2"><span className="text-kaizen-red">—</span>Grup besar (30+ pax) hubungi khusus</li>
              </ul>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}