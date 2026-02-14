"use client"

import { useState } from "react"
import { useI18n } from "@/lib/i18n"
import { Send, Mail, ChevronDown, ChevronUp } from "lucide-react"

export function ContactSection() {
  const { t } = useI18n()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    { q: "contact.faq.q1", a: "contact.faq.a1" },
    { q: "contact.faq.q2", a: "contact.faq.a2" },
    { q: "contact.faq.q3", a: "contact.faq.a3" },
    { q: "contact.faq.q4", a: "contact.faq.a4" },
  ]

  return (
    <section id="contact" className="py-24 lg:py-32 px-4 bg-secondary/20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {t("contact.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <div className="bg-card border border-border/50 p-8 rounded-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.form.name")}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder={t("contact.form.placeholder.name")}
                  className="w-full bg-secondary/50 border border-border text-foreground px-4 py-3 rounded-sm text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.form.email")}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder={t("contact.form.placeholder.email")}
                  className="w-full bg-secondary/50 border border-border text-foreground px-4 py-3 rounded-sm text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.form.subject")}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder={t("contact.form.placeholder.subject")}
                  className="w-full bg-secondary/50 border border-border text-foreground px-4 py-3 rounded-sm text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder={t("contact.form.placeholder.message")}
                  className="w-full bg-secondary/50 border border-border text-foreground px-4 py-3 rounded-sm text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 text-sm font-medium tracking-wider uppercase hover:bg-primary/90 transition-colors rounded-sm"
              >
                <Send className="h-4 w-4" />
                {t("contact.form.send")}
              </button>
            </form>

            {/* Email & social */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">contact@yori-matcha.com</span>
              </div>
              <div className="flex items-center gap-4">
                {/* Social icons as text links */}
                {["Instagram", "Facebook", "TikTok"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-xs text-muted-foreground hover:text-primary transition-colors tracking-wider uppercase"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-8">
              {t("contact.faq.title")}
            </h3>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={faq.q}
                  className="bg-card border border-border/50 rounded-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex items-center justify-between w-full p-5 text-left"
                  >
                    <span className="text-foreground font-medium text-sm pr-4">
                      {t(faq.q)}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="h-4 w-4 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t(faq.a)}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
