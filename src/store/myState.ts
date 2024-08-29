import { create } from "zustand";
import { Shirt } from "@/db/db";

interface CartItem extends Shirt {
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  addToCart: (shirt: Shirt) => void;
  removeFromCart: (shirt: Shirt) => void;
}

const useStore = create<StoreState>((set) => ({
  cart: [],
  addToCart: (shirt) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === shirt.id);

      if (existingItem) {
        // Si el artículo ya existe en el carrito, aumentamos la cantidad
        return {
          cart: state.cart.map((item) =>
            item.id === shirt.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // Si no existe, lo agregamos al carrito con cantidad 1
        return { cart: [...state.cart, { ...shirt, quantity: 1 }] };
      }
    }),
  removeFromCart: (shirt) =>
    set((state) => ({ cart: state.cart.filter((s) => s.id !== shirt.id) })),
}));

export default useStore;
