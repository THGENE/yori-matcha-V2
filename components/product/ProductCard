"use client";

import Image from "next/image";
import AddToCartButton from "./AddToCartButton";

type ProductCardProps = {
  id: string;
  name: string;
  subtitle?: string;
  price: number;
  mainImage: string;
};

export default function ProductCard({
  id,
  name,
  subtitle,
  price,
  mainImage,
}: ProductCardProps) {
  return (
    <div className="bg-black rounded-3xl border border-white/10 p-5 flex flex-col gap-4">
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-900">
        <Image
          src={mainImage}
          alt={name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 320px, 100vw"
        />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        {subtitle && (
          <p className="text-sm text-neutral-400">
            {subtitle}
          </p>
        )}
        <p className="text-sm text-white mt-1">
          {price.toFixed(2)} € TTC
        </p>
      </div>

      <AddToCartButton id={id} name={name} price={price} />
    </div>
  );
}
