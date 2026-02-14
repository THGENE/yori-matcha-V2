"use client"

import { useI18n } from "@/lib/i18n"
import { ArrowRight } from "lucide-react"

export function SiteFooter() {
  const { t } = useI18n()

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const quickLinks = [
    { label: "nav.ranges", id: "ranges" },
    { label: "nav.bestsellers", id: "bestsellers" },
    { label: "nav.about", id: "about" },
    { label: "nav.education", id: "education" },
    { label: "nav.blog", id: "blog" },
    { label: "nav.contact", id: "contact" },
  ]

  return (
    <footer className="bg-card border-t border-border/50">
      {/* Newsletter */}
      <div className="border-b border-border/50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="max-w-lg mx-auto text-center">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
              {t("footer.newsletter.title")}
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              {t("footer.newsletter.subtitle")}
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={t("footer.newsletter.placeholder")}
                className="flex-1 bg-secondary/50 border border-border text-foreground px-4 py-3 rounded-sm text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                aria-label="Email newsletter"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-6 py-3 text-sm font-medium tracking-wider uppercase hover:bg-primary/90 transition-colors rounded-sm flex items-center gap-2"
              >
                {t("footer.newsletter.subscribe")}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-serif text-2xl font-bold text-primary">YORI</span>
              <span className="text-xs tracking-widest text-muted-foreground uppercase">Matcha</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("footer.madeWith")}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-foreground font-medium mb-4 text-sm tracking-wider uppercase">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {t(label)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-foreground font-medium mb-4 text-sm tracking-wider uppercase">
              {"Legal"}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  {t("footer.legal")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  {t("footer.terms")}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  {t("footer.privacy")}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-foreground font-medium mb-4 text-sm tracking-wider uppercase">
              {t("footer.followUs")}
            </h4>
            <ul className="space-y-2">
              {["Instagram", "Facebook", "TikTok", "YouTube"].map((social) => (
                <li key={social}>
                  <a
                    href="#"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            {"© 2025 YORI Matcha. "}{t("footer.rights")}
          </p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <span className="font-serif text-primary text-sm">{"有"}</span>
            <span>{t("footer.madeWith")}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
