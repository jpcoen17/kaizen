# KAIZEN BBQ Grill & Shabu-Shabu — Website

Premium Japanese AYCE Restaurant Website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
kaizen-website/
├── public/                     # Static assets (logo, images)
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles + Tailwind
│   │   ├── layout.tsx          # Root layout + metadata
│   │   └── page.tsx            # Main page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Sticky transparent navbar
│   │   │   └── Footer.tsx      # Dark elegant footer
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── PricelistSection.tsx
│   │   │   ├── InformationSection.tsx
│   │   │   ├── MenuSection.tsx
│   │   │   ├── GallerySection.tsx
│   │   │   ├── LocationsSection.tsx
│   │   │   └── ReservationSection.tsx
│   │   └── ui/
│   │       ├── KaizenLogo.tsx
│   │       └── FloatingWhatsApp.tsx
│   ├── hooks/
│   │   └── useScrolled.ts      # Scroll detection hook
│   ├── lib/
│   │   ├── animations.ts       # Framer Motion variants
│   │   └── data.ts             # Content data & constants
│   └── types/
│       └── index.ts            # TypeScript interfaces
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 Tech Stack

- **Next.js 14** – App Router
- **TypeScript** – Type safety
- **Tailwind CSS** – Utility-first styling
- **Framer Motion** – Smooth animations
- **Lucide React** – Icons

---

## 🔧 Customization

### Update contact info
Edit `src/lib/data.ts`:
- `WHATSAPP_NUMBER` – your WhatsApp number
- `INSTAGRAM` – Instagram handle
- `LOCATIONS` – branch addresses & hours

### Update pricelist
Edit `PRICE_CATEGORIES` in `src/lib/data.ts`

### Update colors
Edit `tailwind.config.ts` color palette

---

## 📱 Features

- ✅ Fully responsive (mobile-first)
- ✅ Transparent navbar with blur on scroll
- ✅ Smooth scroll navigation
- ✅ Framer Motion animations (fade-up, stagger, hover)
- ✅ Filterable menu showcase
- ✅ WhatsApp reservation form
- ✅ Floating WhatsApp button with pulse
- ✅ Masonry gallery with hover effects
- ✅ 6 branch locations display
- ✅ Dark luxury UI theme
- ✅ Production ready

---

## 🌐 Deployment

Deploy instantly on **Vercel**:

```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect to [vercel.com](https://vercel.com).

---

© 2026 KAIZEN BBQ Grill & Shabu-Shabu
