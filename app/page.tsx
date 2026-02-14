"use client"

import { I18nProvider } from "@/lib/i18n"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { RangesSection } from "@/components/ranges-section"
import { ProductsSection } from "@/components/product-detail"
import { PacksSection } from "@/components/packs-section"
import { AboutSection } from "@/components/about-section"
import { TerroirSection } from "@/components/terroir-section"
import { EducationSection } from "@/components/education-section"
import { BlogSection } from "@/components/blog-section"
import { AccessoriesSection } from "@/components/accessories-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <I18nProvider>
      <Navbar />
      <main>
        <HeroSection />
        <RangesSection />
        <PacksSection />
        <ProductsSection />
        <AboutSection />
        <TerroirSection />
        <EducationSection />
        <AccessoriesSection />
        <BlogSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </I18nProvider>
  )
}
