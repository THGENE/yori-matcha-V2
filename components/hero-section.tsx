"use client"

import { useI18n } from "@/lib/i18n"
import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const { t } = useI18n()

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-matcha.jpg"
          alt="YORI Matcha"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center pt-20">
        {/* Japanese character */}
        <div className="mb-8 animate-fade-in">
          <span className="text-8xl md:text-9xl font-serif text-primary/40 select-none">
            {"有"}
          </span>
        </div>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 animate-fade-in-up text-balance">
          {t("hero.title")}
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-200 leading-relaxed text-pretty">
          {t("hero.subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
          <button
            onClick={() => scrollTo("ranges")}
            className="bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-widest uppercase hover:bg-primary/90 transition-colors rounded-sm"
          >
            {t("hero.cta")}
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="border border-foreground/30 text-foreground px-8 py-4 text-sm font-medium tracking-widest uppercase hover:border-primary hover:text-primary transition-colors rounded-sm bg-transparent"
          >
            {t("hero.secondary")}
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("ranges")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/60 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  )
}
