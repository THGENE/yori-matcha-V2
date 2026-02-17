import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YORI Matcha | Matcha Japonais d’Exception",
  description: "Une sélection de matchas d’exception, pensés comme une expérience aussi précise qu’un produit Apple.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

