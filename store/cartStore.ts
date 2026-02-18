"use client";

import { create } from "zustand";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type AddPayload = {
  id: string;
  name: string;
  price: number;
};

type CartState = {
  items: CartItem[];
  lastAddedItemId: string | null;
  addFeedbackOpen: boolean;
  addItem: (item: AddPayload) => void;
  closeAddFeedback: () => void;
  removeItem: (id: string) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  lastAddedItemId: null,
  addFeedbackOpen: false,
  addItem: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
          lastAddedItemId: item.id,
          addFeedbackOpen: true,
        };
      }
      return {
        items: [...state.items, { ...item, quantity: 1 }],
        lastAddedItemId: item.id,
        addFeedbackOpen: true,
      };
    }),
  closeAddFeedback: () => set({ addFeedbackOpen: false }),
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
  clear: () => set({ items: [] }),
}));
