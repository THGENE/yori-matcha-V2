"use client"

import { useState } from "react"
import { useI18n } from "@/lib/i18n"
import { Menu, X, ChevronDown, Globe, ShoppingBag, Check } from "lucide-react"
import CartSidebar from "@/components/CartSidebar"
import { useCartStore } from "@/store/cartStore"
import BrandLogo from "@/components/brand-logo"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { catalogById, catalogProducts } from "@/lib/product-catalog"
import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  const { t, locale, setLocale } = useI18n()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [rangesOpen, setRangesOpen] = useState(false)
  const [discoverOpen, setDiscoverOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const items = useCartStore((s) => s.items)
  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0)
  const addFeedbackOpen = useCartStore((s) => s.addFeedbackOpen)
  const lastAddedItemId = useCartStore((s) => s.lastAddedItemId)
  const closeAddFeedback = useCartStore((s) => s.closeAddFeedback)
  const router = useRouter()

  const lastAddedProduct = lastAddedItemId ? catalogById[lastAddedItemId] : undefined
  const lastAddedItem = lastAddedItemId ? items.find((item) => item.id === lastAddedItemId) : undefined
  const similarProducts = lastAddedProduct
    ? catalogProducts
        .filter(
          (product) =>
            product.category === lastAddedProduct.category && product.id !== lastAddedProduct.id
        )
        .slice(0, 3)
    : []
  const freeShippingThreshold = 45
  const cartTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartTotal)
  const freeShippingProgress = Math.min(100, Math.round((cartTotal / freeShippingThreshold) * 100))

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      if (params.get("cart") !== "open") return
      setCartOpen(true)
      router.replace("/", { scroll: false })
    }
  }, [router])

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="relative z-40 bg-background/90 backdrop-blur-md border-b border-border/50">
      {addFeedbackOpen && lastAddedProduct && (
        <div className="fixed inset-0 z-[120] bg-background/75 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="mx-auto mt-6 max-w-3xl bg-card border border-border rounded-sm shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border/50">
              <h3 className="text-foreground text-2xl md:text-3xl font-semibold flex items-center gap-3">
                <Check className="h-6 w-6 text-primary" />
                {locale === "fr" ? "Votre article a été ajouté au panier" : "Your item was added to cart"}
              </h3>
              <button
                onClick={closeAddFeedback}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-5 lg:p-6">
              <div className="mb-5">
                <p className="text-muted-foreground text-lg md:text-2xl text-center">
                  {remainingForFreeShipping > 0
                    ? locale === "fr"
                      ? `Plus que ${remainingForFreeShipping.toFixed(2)}€ pour profiter de la livraison offerte !`
                      : `Only ${remainingForFreeShipping.toFixed(2)}€ left for free shipping!`
                    : locale === "fr"
                      ? "Livraison offerte débloquée !"
                      : "Free shipping unlocked!"}
                </p>

                <div className="mt-4">
                  <div className="h-3 w-full bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${freeShippingProgress}%` }}
                    />
                  </div>
                  <p className="mt-2 text-center text-sm text-muted-foreground">
                    {locale === "fr" ? "Livraison offerte dès 45€ d'achat" : "Free shipping from 45€"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border border-border/50 rounded-sm p-4">
                <div className="relative h-20 w-20 rounded-sm overflow-hidden bg-secondary/30">
                  <Image
                    src={lastAddedProduct.image}
                    alt={lastAddedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-foreground text-xl md:text-2xl font-semibold leading-tight">{lastAddedProduct.name}</p>
                  <p className="text-base md:text-lg text-muted-foreground">{lastAddedProduct.subtitle[locale]}</p>
                  <p className="text-sm text-muted-foreground mt-1">Ref. {lastAddedProduct.id}</p>
                </div>
                <div className="text-right">
                  <p className="text-primary text-2xl md:text-3xl font-bold">{lastAddedProduct.price.toFixed(2)} €</p>
                  <p className="text-base md:text-lg text-foreground">Qté : {lastAddedItem?.quantity ?? 1}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={closeAddFeedback}
                  className="flex-1 border border-primary text-primary px-4 py-3 md:py-4 text-base md:text-lg font-medium tracking-wide uppercase hover:bg-primary/10 transition-colors rounded-sm"
                >
                  {locale === "fr" ? "Continuer mes achats" : "Continue shopping"}
                </button>
                <button
                  onClick={() => {
                    closeAddFeedback()
                    setCartOpen(true)
                  }}
                  className="flex-1 bg-primary text-primary-foreground px-4 py-3 md:py-4 text-base md:text-lg font-medium tracking-wide uppercase hover:bg-primary/90 transition-colors rounded-sm"
                >
                  {locale === "fr" ? "Finaliser ma commande" : "Checkout"}
                </button>
              </div>

              <div className="mt-6 rounded-full bg-secondary px-5 py-3 w-fit mx-auto">
                <p className="text-sm text-muted-foreground">
                  {locale === "fr" ? "Livraison offerte dès 45 € d'achat" : "Free shipping from 45€"}
                </p>
              </div>

              {similarProducts.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-3xl md:text-4xl font-semibold text-foreground mb-6 text-center">
                    {locale === "fr" ? "Notre sélection" : "Our selection"}
                  </h4>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {similarProducts.map((product) => (
                      <Link
                        key={product.id}
                        href={`/produit/${product.id}`}
                        onClick={closeAddFeedback}
                        className="border border-border/50 rounded-sm p-3 hover:border-primary/40 transition-colors bg-background"
                      >
                        <div className="relative h-36 w-full rounded-sm overflow-hidden mb-3 bg-secondary/30">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="text-lg font-semibold text-foreground line-clamp-2 leading-tight">{product.name}</p>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{product.subtitle[locale]}</p>
                        <p className="text-xl text-primary font-semibold mt-3">{product.price.toFixed(2)} €</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <nav className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
            <BrandLogo variant="header" />
          </button>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Panier (sidebar) */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative flex items-center justify-center text-foreground hover:text-primary transition-colors"
              aria-label="Voir le panier"
            >
              <ShoppingBag className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-primary text-primary-foreground rounded-full px-2 text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </button>
              {/* Sidebar panier */}
              <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />
            <button
              onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
              className="flex items-center gap-1.5 text-sm text-foreground/70 hover:text-primary transition-colors"
              aria-label="Switch language"
            >
              <Globe className="h-4 w-4" />
              <span className="uppercase font-medium">{locale === "fr" ? "EN" : "FR"}</span>
            </button>

            <button className="hidden lg:flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors rounded-sm" onClick={() => scrollTo("packs")}>
              <ShoppingBag className="h-4 w-4" />
              {t("nav.shop")}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-foreground"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Nav (below logo) */}
        <div className="hidden lg:flex items-center justify-center gap-8 border-t border-border/40 py-3">
          {/* Nos Gammes dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setRangesOpen(true)}
            onMouseLeave={() => setRangesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors">
              {t("nav.ranges")}
              <ChevronDown className="h-3 w-3" />
            </button>
            {rangesOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-card border border-border rounded-sm p-3 min-w-48 shadow-xl">
                  <button onClick={() => scrollTo("ceremonial")} className="block w-full text-left px-3 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-sm transition-colors">
                    {t("nav.ceremonial")}
                  </button>
                  <button onClick={() => scrollTo("grandcru")} className="block w-full text-left px-3 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-sm transition-colors">
                    {t("nav.grandCru")}
                  </button>
                  <button onClick={() => scrollTo("daily")} className="block w-full text-left px-3 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-sm transition-colors">
                    {t("nav.daily")}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Discover dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDiscoverOpen(true)}
            onMouseLeave={() => setDiscoverOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors">
              {t("nav.discover")}
              <ChevronDown className="h-3 w-3" />
            </button>
            {discoverOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-card border border-border rounded-sm p-3 min-w-56 shadow-xl">
                  <button onClick={() => scrollTo("packs")} className="block w-full text-left px-3 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-sm transition-colors">
                    {t("nav.discoveryPack")}
                  </button>
                  <button onClick={() => scrollTo("packs")} className="block w-full text-left px-3 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-sm transition-colors">
                    {t("nav.duoCeremonial")}
                  </button>
                  <button onClick={() => scrollTo("packs")} className="block w-full text-left px-3 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-sm transition-colors">
                    {t("nav.duoGrandCru")}
                  </button>
                </div>
              </div>
            )}
          </div>

          <button onClick={() => scrollTo("bestsellers")} className="text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors">
            {t("nav.bestsellers")}
          </button>
          <button onClick={() => scrollTo("about")} className="text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors">
            {t("nav.about")}
          </button>
          <button onClick={() => scrollTo("accessories")} className="text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors">
            {t("nav.accessories")}
          </button>
          <button onClick={() => scrollTo("blog")} className="text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors">
            {t("nav.blog")}
          </button>
          <button onClick={() => scrollTo("education")} className="text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors">
            {t("nav.education")}
          </button>
          <button onClick={() => scrollTo("contact")} className="text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors">
            {t("nav.contact")}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border/50 py-4 space-y-1">
            <button onClick={() => scrollTo("ceremonial")} className="block w-full text-left px-2 py-3 text-sm text-foreground/80 hover:text-primary transition-colors">{t("nav.ceremonial")}</button>
            <button onClick={() => scrollTo("grandcru")} className="block w-full text-left px-2 py-3 text-sm text-foreground/80 hover:text-primary transition-colors">{t("nav.grandCru")}</button>
            <button onClick={() => scrollTo("daily")} className="block w-full text-left px-2 py-3 text-sm text-foreground/80 hover:text-primary transition-colors">{t("nav.daily")}</button>
            <div className="border-t border-border/30 my-2" />
            <button onClick={() => scrollTo("packs")} className="block w-full text-left px-2 py-3 text-sm text-foreground/80 hover:text-primary transition-colors">{t("nav.discoveryPack")}</button>
            <button onClick={() => scrollTo("bestsellers")} className="block w-full text-left px-2 py-3 text-sm text-foreground/80 hover:text-primary transition-colors">{t("nav.bestsellers")}</button>
            <button onClick={() => scrollTo("about")} className="block w-full text-left px-2 py-3 text-sm text-foreground/80 hover:text-primary transition-colors">{t("nav.about")}</button>
            <button onClick={() => scrollTo("accessories")} className="block w-full text-left px-2 py-3 text-sm text-foreground/80 hover:text-primary transition-colors">{t("nav.accessories")}</button>
            <button onClick={() => scrollTo("blog")} className="block w-full text-left px-2 py-3 text-sm text-foreground/80 hover:text-primary transition-colors">{t("nav.blog")}</button>
            <button onClick={() => scrollTo("education")} className="block w-full text-left px-2 py-3 text-sm text-foreground/80 hover:text-primary transition-colors">{t("nav.education")}</button>
            <button onClick={() => scrollTo("contact")} className="block w-full text-left px-2 py-3 text-sm text-foreground/80 hover:text-primary transition-colors">{t("nav.contact")}</button>
            <div className="pt-2">
              <button onClick={() => scrollTo("packs")} className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors rounded-sm">
                <ShoppingBag className="h-4 w-4" />
                {t("nav.shop")}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
