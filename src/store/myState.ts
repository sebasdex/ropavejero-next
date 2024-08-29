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
  removeFromCart: (shirt: Shirt) => void;
  isModalOpen: boolean;
  openModal: () => void;
}

const useStore = create<StoreState>((set) => ({
  isModalOpen: false,
  openModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
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
