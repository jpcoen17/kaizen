// src/types/index.ts

export interface PriceItem {
  label: string;
  duration: string;
  price: string;
  session: "lunch" | "dinner";
}

export interface PriceCategory {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  badgeColor?: "gold" | "red";
  items: PriceItem[];
  isFree?: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  alt: string;
  size?: "normal" | "tall" | "wide";
}

export interface Location {
  id: string;
  name: string;
  address: string;
  hours: {
    weekday: string;
    weekend: string;
    weekdayLabel: string;
    weekendLabel: string;
  };
  timezone?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}
