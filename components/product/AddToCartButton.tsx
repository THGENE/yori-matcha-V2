"use client";

import { useCartStore } from "@/store/cartStore";

type Props = {
  id: string;
  name: string;
  price: number;
};

export default function AddToCartButton({ id, name, price }: Props) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <button
      onClick={() => addItem({ id, name, price })}
      className="w-full rounded-full bg-white text-black py-3 text-sm font-medium tracking-wide hover:bg-neutral-200 transition"
    >
      Ajouter à la commande
    </button>
  );
}
