import { create } from "zustand";
import { Shirt } from "@/db/db";

interface StoreState {
  cart: Shirt[];
  addToCart: (shirt: Shirt) => void;
}

const useStore = create<StoreState>((set) => ({
  cart: [],
  addToCart: (shirt) => set((state) => ({ cart: [...state.cart, shirt] })),
}));

export default useStore;
