import { create } from "zustand";
import { Shirt } from "@/db/db";

interface CartItem extends Shirt {
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  currentShirt: CartItem | null;
  currentShirtAdd: (shirt: Shirt) => void;
  addToCart: (shirt: Shirt) => void;
  minusFromCart: (shirt: Shirt) => void;
  removeFromCart: (shirt: Shirt) => void;
  isModalOpen: boolean;
  openModal: () => void;
  initializeCart: () => void;
  quantityToBuy: number;
  addQuantityToBuy: () => void;
  removeQuantityToBuy: () => void;
  addItemToBuy: (shirt: Shirt, quantityToBuy: number) => void;
}

const useStore = create<StoreState>((set) => ({
  isModalOpen: false,
  openModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
  cart: [],
  initializeCart: () => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        set({ cart: JSON.parse(savedCart) });
      }
    }
  },

  addToCart: (shirt) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === shirt.id);
      let newCart;
      if (existingItem) {
        newCart = state.cart.map((item) =>
          item.id === shirt.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        newCart = [...state.cart, { ...shirt, quantity: 1 }];
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(newCart));
      }
      return { cart: newCart };
    }),

  minusFromCart: (shirt) =>
    set((state) => {
      const updateCart = state.cart.map((s) =>
        s.id === shirt.id && s.quantity > 1
          ? { ...s, quantity: s.quantity - 1 }
          : s
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(updateCart));
      }
      return { cart: updateCart };
    }),

  removeFromCart: (shirt) =>
    set((state) => {
      const updateCart = state.cart.filter((s) => s.id !== shirt.id);
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(updateCart));
      }
      return { cart: updateCart };
    }),
  currentShirt: null,
  currentShirtAdd: (shirt) =>
    set((state) => {
      const existingCartItem = state.cart.find((item) => item.id === shirt.id);
      if (existingCartItem) {
        return {
          currentShirt: {
            ...existingCartItem,
          },
        };
      } else {
        return {
          currentShirt: { ...shirt, quantity: 1 },
        };
      }
    }),
  quantityToBuy: 1,
  addQuantityToBuy: () =>
    set((state) => ({ quantityToBuy: state.quantityToBuy + 1 })),
  removeQuantityToBuy: () =>
    set((state) => ({ quantityToBuy: Math.max(1, state.quantityToBuy - 1) })),
  addItemToBuy: (shirt: Shirt, quantityToBuy: number) =>
    set((state) => {
      const existingCartItem = state.cart.find((item) => item.id === shirt.id);
      let updatedCart;
      if (existingCartItem) {
        updatedCart = state.cart.map((item) =>
          item.id === shirt.id
            ? { ...item, quantity: item.quantity + quantityToBuy }
            : item
        );
      } else {
        updatedCart = [...state.cart, { ...shirt, quantity: quantityToBuy }];
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
      return { cart: updatedCart, quantityToBuy: 1 };
    }),
}));

export default useStore;
