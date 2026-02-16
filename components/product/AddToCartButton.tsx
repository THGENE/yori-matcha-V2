"use client";

import { useCartStore } from "@/store/cartStore";

export default function AddToCartButton({ id, name, price }) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <button
      onClick={() => addItem({ id, name, price })}
      className="w-full rounded-full bg-white text-black py-3 text-sm font-medium hover:bg-neutral-200 transition"
    >
      Ajouter à la commande
    </button>
  );
}
