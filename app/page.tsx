"use client";

import ProductCard from "@/components/product/ProductCard";
import PackshotImage from "@/components/PackshotImage";
import PreparationSteps from "@/components/matcha/PreparationSteps";
import SectionReveal from "@/components/ui/SectionReveal";

export const dynamic = "force-dynamic";

const products = [
  {
    id: "yori-uji",
    name: "YORI UJI",
    subtitle: "Single Garden • Uji, Japon",
    price: 39.0,
    mainImage: "/images/yori-uji-single-garden.jpg",
  },
  {
    id: "yori-yame",
    name: "YORI YAME HERITAGE",
    subtitle: "Heritage • Yame, Japon",
    price: 42.0,
    mainImage: "/images/yori-yame-heritage.jpg",
  },
  {
    id: "yori-velvet",
    name: "YORI VELVET",
    subtitle: "Texture velours • Japon",
    price: 45.0,
    mainImage: "/images/yori-velvet.jpg",
  },
  {
    id: "sticks-decouverte",
    name: "Sticks Découverte",
    subtitle: "Pack découverte YORI Matcha",
    price: 14.9,
    mainImage: "/images/yori-sticks-decouverte.jpg",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <SectionReveal className="max-w-6xl mx-auto px-4 pt-16 pb-10">
        <h1 className="text-4xl md:text-5xl font-semibold mb-8">
          Nos Matchas d’Exception
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id}>
              <PackshotImage src={p.mainImage} alt={p.name} style={{ width: "100%", height: "auto" }} />
              <ProductCard
                id={p.id}
                name={p.name}
                subtitle={p.subtitle}
                price={p.price}
                mainImage={p.mainImage}
              />
            </div>
          ))}
        </div>
      </SectionReveal>
      <SectionReveal className="max-w-4xl mx-auto px-4 pb-20">
        <PreparationSteps />
      </SectionReveal>
    </main>
  );
}
