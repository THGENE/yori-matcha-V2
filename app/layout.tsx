import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "YORI Matcha | Matcha Japonais d'Exception",
  description:
    "Decouvrez les matchas d'exception YORI, directement des terroirs de Yame et Uji au Japon. Ceremonial, Grand Cru et Daily - l'art du matcha authentique.",
  keywords: ["matcha", "the vert", "japonais", "ceremonial", "grand cru", "YORI", "Yame", "Uji"],
}

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
