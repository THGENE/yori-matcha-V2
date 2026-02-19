"use client"

import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import PackshotImage from "@/components/PackshotImage"
import { useI18n } from "@/lib/i18n"
import { catalogById } from "@/lib/product-catalog"
import { useCartStore } from "@/store/cartStore"
import { ArrowLeft, ShoppingBag } from "lucide-react"

export default function ProductPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const { locale } = useI18n()
  const addItem = useCartStore((s) => s.addItem)

  const product = catalogById[id]

  if (!product) {
    return (
      <main className="min-h-screen bg-background text-foreground px-4 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-serif text-3xl font-bold mb-4">
            {locale === "fr" ? "Produit introuvable" : "Product not found"}
          </h1>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {locale === "fr" ? "Retour a l'accueil" : "Back to home"}
          </Link>
        </div>
      </main>
    )
  }

  const handleAddToCart = () => {
    addItem({ id: product.id, name: product.name, price: product.price })
    router.push("/")
  }

  return (
    <main className="min-h-screen bg-background text-foreground px-4 py-10 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {locale === "fr" ? "Retour a l'accueil" : "Back to home"}
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="bg-card border border-border/50 rounded-sm overflow-hidden aspect-square">
            <PackshotImage
              src={product.image}
              alt={product.name}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs tracking-widest uppercase text-primary mb-2">
                {product.category}
              </p>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-3">
                {product.name}
              </h1>
              <p className="text-muted-foreground">{product.subtitle[locale]}</p>
            </div>

            <p className="text-3xl font-bold text-primary">{product.price.toFixed(2)}€</p>

            <p className="text-muted-foreground leading-relaxed">
              {product.description[locale]}
            </p>

            <button
              onClick={handleAddToCart}
              className="btn-client inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium tracking-wider uppercase hover:bg-primary/90 transition-colors rounded-sm"
            >
              <ShoppingBag className="h-4 w-4" />
              {locale === "fr" ? "Ajouter au panier" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
