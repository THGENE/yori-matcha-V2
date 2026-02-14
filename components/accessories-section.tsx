"use client"

import { useI18n } from "@/lib/i18n"
import Image from "next/image"
import { ShoppingBag } from "lucide-react"

const accessories = [
  {
    id: "chasen",
    titleKey: "accessories.chasen.title",
    descKey: "accessories.chasen.description",
    price: 24.90,
  },
  {
    id: "chawan",
    titleKey: "accessories.chawan.title",
    descKey: "accessories.chawan.description",
    price: 29.90,
  },
  {
    id: "chashaku",
    titleKey: "accessories.chashaku.title",
    descKey: "accessories.chashaku.description",
    price: 12.90,
  },
]

export function AccessoriesSection() {
  const { t } = useI18n()

  return (
    <section id="accessories" className="py-24 lg:py-32 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {t("accessories.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t("accessories.subtitle")}
          </p>
        </div>

        {/* Full width image */}
        <div className="relative aspect-[21/9] rounded-sm overflow-hidden mb-12">
          <Image
            src="/images/accessories.jpg"
            alt={t("accessories.title")}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {accessories.map((item) => (
            <div
              key={item.id}
              className="bg-card border border-border/50 p-6 rounded-sm hover:border-primary/30 transition-colors"
            >
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                {t(item.titleKey)}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {t(item.descKey)}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-bold text-lg">{item.price.toFixed(2)}{"€"}</span>
                <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 text-sm font-medium tracking-wider uppercase hover:bg-primary/90 transition-colors rounded-sm">
                  <ShoppingBag className="h-4 w-4" />
                  {t("products.addToCart")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
