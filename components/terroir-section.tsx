"use client"

import { useI18n } from "@/lib/i18n"
import Image from "next/image"
import { MapPin } from "lucide-react"

export function TerroirSection() {
  const { t } = useI18n()

  return (
    <section id="terroir" className="py-24 lg:py-32 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {t("terroir.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t("terroir.subtitle")}
          </p>
        </div>

        {/* Full width terroir image */}
        <div className="relative aspect-[21/9] rounded-sm overflow-hidden mb-16">
          <Image
            src="/images/terroir-japan.jpg"
            alt="Japanese tea fields"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-background/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-4xl md:text-6xl text-primary/80 select-none">
              {"有"}
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Yame */}
          <div className="bg-card border border-border/50 p-8 rounded-sm hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <h3 className="font-serif text-2xl font-bold text-foreground">
                {t("terroir.yame.title")}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t("terroir.yame.description")}
            </p>
          </div>

          {/* Uji */}
          <div className="bg-card border border-border/50 p-8 rounded-sm hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <h3 className="font-serif text-2xl font-bold text-foreground">
                {t("terroir.uji.title")}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t("terroir.uji.description")}
            </p>
          </div>
        </div>

        {/* Grades */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              {t("grades.title")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              {t("grades.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { key: "ceremonial", color: "bg-primary" },
              { key: "grandCru", color: "bg-accent" },
              { key: "daily", color: "bg-muted" },
            ].map(({ key, color }) => (
              <div key={key} className="bg-card border border-border/50 p-6 rounded-sm">
                <div className={`${color} w-12 h-1 mb-6 rounded-full`} />
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {t(`grades.${key}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(`grades.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
