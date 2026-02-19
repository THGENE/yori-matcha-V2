"use client"

import { useEffect } from "react"
import { ShoppingBag, Check } from "lucide-react"
import { useCartStore } from "@/store/cartStore"
import { catalogById } from "@/lib/product-catalog"
import CartSidebar from "@/components/CartSidebar"
import { useI18n } from "@/lib/i18n"

export default function GlobalCartWidget() {
  const { locale } = useI18n()
  const items = useCartStore((s) => s.items)
  const cartSidebarOpen = useCartStore((s) => s.cartSidebarOpen)
  const openCartSidebar = useCartStore((s) => s.openCartSidebar)
  const closeCartSidebar = useCartStore((s) => s.closeCartSidebar)
  const addFeedbackOpen = useCartStore((s) => s.addFeedbackOpen)
  const closeAddFeedback = useCartStore((s) => s.closeAddFeedback)
  const lastAddedItemId = useCartStore((s) => s.lastAddedItemId)

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const lastAddedProduct = lastAddedItemId ? catalogById[lastAddedItemId] : undefined
  const lastAddedItem = lastAddedItemId ? items.find((item) => item.id === lastAddedItemId) : undefined
  const addedProductName =
    lastAddedProduct?.name ??
    lastAddedItem?.name ??
    (locale === "fr" ? "Produit" : "Product")

  useEffect(() => {
    if (!addFeedbackOpen) return

    const timeoutId = window.setTimeout(() => {
      closeAddFeedback()
    }, 3200)

    return () => window.clearTimeout(timeoutId)
  }, [addFeedbackOpen, closeAddFeedback])

  return (
    <>
      <button
        onClick={openCartSidebar}
        aria-label={locale === "fr" ? "Ouvrir le panier" : "Open cart"}
        className="fixed top-4 right-4 z-[135] h-12 min-w-12 px-3 rounded-full border border-primary/35 bg-card/95 backdrop-blur-md text-foreground shadow-[0_8px_30px_rgba(0,0,0,0.28)] hover:border-primary/60 transition-colors inline-flex items-center justify-center gap-2"
      >
        <ShoppingBag className="h-5 w-5" />
        <span className="text-sm font-semibold">{cartCount}</span>
      </button>

      {addFeedbackOpen && (
        <div className="fixed top-20 right-4 z-[136] w-[min(92vw,380px)] rounded-xl border border-primary/30 bg-card/95 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.35)] p-4 animate-fade-in-up">
          <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Check className="h-4 w-4 text-primary" />
            {locale === "fr" ? "Produit ajouté au panier" : "Product added to cart"}
          </p>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{addedProductName}</p>
        </div>
      )}

      <CartSidebar open={cartSidebarOpen} onClose={closeCartSidebar} />
    </>
  )
}
