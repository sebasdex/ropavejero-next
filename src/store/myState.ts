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

      // Guarda en localStorage
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
      // Guarda en localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(updateCart));
      }
      return { cart: updateCart };
    }),

  removeFromCart: (shirt) =>
    set((state) => {
      const updateCart = state.cart.filter((s) => s.id !== shirt.id);
      // Guarda en localStorage
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
        // Si el artículo ya existe en el carrito, actualizamos el currentShirt con la cantidad incrementada
        return {
          currentShirt: {
            ...existingCartItem,
            quantity: existingCartItem.quantity + 1,
          },
        };
      } else {
        // Si no existe en el carrito, lo agregamos como nuevo currentShirt con cantidad 1
        return {
          currentShirt: { ...shirt, quantity: 1 },
        };
      }
    }),
}));

export default useStore;
