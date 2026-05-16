// src/lib/data.ts
import type { PriceCategory, Location, NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Pricelist", href: "#pricelist" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reservation", href: "#reservation" },
];

export const PRICE_CATEGORIES: PriceCategory[] = [
  {
    id: "dewasa",
    title: "Paket Dewasa",
    subtitle: "Usia 17 tahun ke atas",
    badge: "Best Seller",
    badgeColor: "red",
    items: [
      { label: "Lunch", duration: "90 Menit", price: "Rp 150.000", session: "lunch" },
      { label: "Lunch", duration: "120 Menit", price: "Rp 170.000", session: "lunch" },
      { label: "Dinner", duration: "90 Menit", price: "Rp 175.000", session: "dinner" },
      { label: "Dinner", duration: "120 Menit", price: "Rp 190.000", session: "dinner" },
    ],
  },
  {
    id: "senior",
    title: "Paket Senior",
    subtitle: "60 tahun ke atas",
    items: [
      { label: "Lunch", duration: "90 Menit", price: "Rp 135.000", session: "lunch" },
      { label: "Lunch", duration: "120 Menit", price: "Rp 153.000", session: "lunch" },
      { label: "Dinner", duration: "90 Menit", price: "Rp 157.500", session: "dinner" },
      { label: "Dinner", duration: "120 Menit", price: "Rp 171.000", session: "dinner" },
    ],
  },
  {
    id: "anak-110-140",
    title: "Paket Anak",
    subtitle: "Tinggi 110 – 140 cm",
    badge: "Family Choice",
    badgeColor: "gold",
    items: [
      { label: "Lunch", duration: "90 Menit", price: "Rp 75.000", session: "lunch" },
      { label: "Lunch", duration: "120 Menit", price: "Rp 85.000", session: "lunch" },
      { label: "Dinner", duration: "90 Menit", price: "Rp 87.500", session: "dinner" },
      { label: "Dinner", duration: "120 Menit", price: "Rp 95.000", session: "dinner" },
    ],
  },
  {
    id: "anak-free",
    title: "Paket Anak",
    subtitle: "Di bawah 110 cm",
    isFree: true,
    items: [],
  },
];

export const LOCATIONS: Location[] = [
  {
    id: "malang",
    name: "KAIZEN MALANG",
    address: "Jl. Wilis No. 25, Gading Kasri, Kec. Klojen, Kota Malang, Jawa Timur 65115",
    hours: {
      weekdayLabel: "Senin – Jumat",
      weekday: "11.00 – 22.00 WIB",
      weekendLabel: "Sabtu – Minggu",
      weekend: "10.00 – 22.00 WIB",
    },
  },
  {
    id: "surabaya",
    name: "KAIZEN SURABAYA",
    address: "Jl. Mayjend. Jonosewojo, Pradahkalikendal, Kec. Dukuhpakis, Surabaya 60226",
    hours: {
      weekdayLabel: "Senin – Kamis",
      weekday: "11.00 – 22.00 WIB",
      weekendLabel: "Jumat – Minggu",
      weekend: "10.00 – 22.00 WIB",
    },
  },
  {
    id: "bali-sunset",
    name: "KAIZEN BALI – MATAHARI TERBENAM",
    address: "Jl. Sunset Road No.168B, Legian, Kec. Kuta, Kabupaten Badung, Bali 80361",
    timezone: "WITA",
    hours: {
      weekdayLabel: "Senin – Jumat",
      weekday: "12.00 – 23.00 WITA",
      weekendLabel: "Sabtu – Minggu",
      weekend: "11.00 – 23.00 WITA",
    },
  },
  {
    id: "jogja",
    name: "KAIZEN JOGJA",
    address: "Jl. Magelang Km 4,5 No 151, Kutu Dukuh, Daerah Istimewa Yogyakarta 55284",
    hours: {
      weekdayLabel: "Senin – Kamis",
      weekday: "11.00 – 22.00 WIB",
      weekendLabel: "Jumat – Minggu",
      weekend: "10.00 – 22.00 WIB",
    },
  },
  {
    id: "bali-renon",
    name: "KAIZEN BALI – RENON",
    address: "Jl. Prof. Moh. Yamin No.14, Renon, Denpasar Selatan, Kota Denpasar 80239",
    timezone: "WITA",
    hours: {
      weekdayLabel: "Senin – Jumat",
      weekday: "12.00 – 23.00 WITA",
      weekendLabel: "Sabtu – Minggu",
      weekend: "11.00 – 23.00 WITA",
    },
  },
  {
    id: "makassar",
    name: "KAIZEN MAKASSAR",
    address: "Citraland CPI, Citraland Boulevard No.32, Maccini Sombala, Kota Makassar 90231",
    timezone: "WITA",
    hours: {
      weekdayLabel: "Senin – Jumat",
      weekday: "11.00 – 22.00 WITA",
      weekendLabel: "Sabtu – Minggu",
      weekend: "10.00 – 22.00 WITA",
    },
  },
];

export const WHATSAPP_NUMBER = "6288999129999";
export const INSTAGRAM = "@kaizenayce.id";
