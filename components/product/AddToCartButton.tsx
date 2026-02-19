"use client";

import { useCartStore } from "@/store/cartStore";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
  name: string;
  price: number;
  redirectToProduct?: boolean;
};

export default function AddToCartButton({ id, name, price, redirectToProduct = true }: Props) {
  const addItem = useCartStore((s) => s.addItem);
  const router = useRouter();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    addItem({ id, name, price });
    if (redirectToProduct) {
      router.push("/panier");
    }
    setClicked(true);
    setTimeout(() => setClicked(false), 700);
  };

  return (
    <motion.button
      onClick={handleClick}
      whileTap={{ scale: 0.92 }}
      className="w-full rounded-full bg-white text-black py-3 text-sm font-medium tracking-wide hover:bg-neutral-200 transition relative overflow-hidden"
      style={{ outline: clicked ? "2px solid #8bc34a" : "none" }}
    >
      <span style={{ opacity: clicked ? 0 : 1, transition: "opacity 0.2s" }}>
        Ajouter à la commande
      </span>
      <AnimatePresence>
        {clicked && (
          <motion.span
            key="check"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex items-center justify-center text-green-600 font-bold text-base"
          >
            ✓ Ajouté !
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
