"use client"

import { useI18n } from "@/lib/i18n"
import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"

const articles = [
  {
    id: "production",
    titleKey: "blog.articles.production.title",
    excerptKey: "blog.articles.production.excerpt",
    image: "/images/daily-matcha.png",
    hasVideo: true,
    date: "2025-12-15",
  },
  {
    id: "transformation",
    titleKey: "blog.articles.transformation.title",
    excerptKey: "blog.articles.transformation.excerpt",
    image: "/images/uji single garden.png",
    hasVideo: true,
    date: "2025-11-28",
  },
  {
    id: "ceremony",
    titleKey: "blog.articles.ceremony.title",
    excerptKey: "blog.articles.ceremony.excerpt",
    image: "/images/sticks découvertes.png",
    hasVideo: false,
    date: "2025-10-10",
  },
]

export function BlogSection() {
  const { t } = useI18n()

  return (
    <section id="blog" className="py-24 lg:py-32 px-4 bg-secondary/20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {t("blog.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t("blog.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-card border border-border/50 rounded-sm overflow-hidden hover:border-primary/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={t(article.titleKey)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {article.hasVideo && (
                  <div className="absolute inset-0 bg-background/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-primary/90 rounded-full p-3">
                      <Play className="h-5 w-5 text-primary-foreground fill-current" />
                    </div>
                  </div>
                )}
                {article.hasVideo && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary/90 text-primary-foreground text-xs tracking-wider uppercase px-2 py-0.5 rounded-sm font-medium">
                      {"Video"}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <time className="text-xs text-muted-foreground tracking-wider uppercase mb-2 block">
                  {new Date(article.date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {t(article.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {t(article.excerptKey)}
                </p>
                <span className="flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all">
                  {t("blog.readMore")}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
