import { Shirt } from "@/db/db";
import useStore from "@/store/myState";
import AddMessageCart from "../AddMessageCart";
import SocialMediaInfo from "./SocialMediaInfo";

function InfoClothes({ shirt }: { shirt: Shirt }) {
  const {
    addItemToBuy,
    isModalOpen,
    openModal,
    currentShirtAdd,
    quantityToBuy,
    addQuantityToBuy,
    removeQuantityToBuy,
  } = useStore();

  return (
    <>
      {isModalOpen && <AddMessageCart />}

      <div className="space-y-6 text-neutral-900">
        <div className="space-y-1">
          <h1 className="text-3xl font-black uppercase tracking-tight">{shirt.name}</h1>
          <p className="text-xl font-semibold text-neutral-800">${shirt.price.toFixed(2)} MXN</p>
        </div>
        <div className="grid grid-cols-2 gap-y-1 text-sm text-neutral-600 pt-4">
          <p><strong>Stock:</strong> {shirt.available ? "Disponible" : "Agotado"}</p>
          <p><strong>Material:</strong> {shirt.material}</p>
          <p><strong>Categoría:</strong> {shirt.category}</p>
          <p><strong>Código:</strong> {shirt.barcode}</p>
        </div>

        <div className="mt-8 w-full bg-neutral-50 border border-neutral-200 rounded-lg px-5 py-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <button
              onClick={removeQuantityToBuy}
              className="w-10 h-10 rounded-full bg-white border border-neutral-300 text-xl font-bold text-neutral-700 transition-all duration-200 hover:bg-black hover:text-white hover:scale-105"
            >
              −
            </button>
            <span className="text-lg font-bold text-neutral-800 min-w-[32px] text-center">
              {quantityToBuy}
            </span>
            <button
              onClick={addQuantityToBuy}
              className="w-10 h-10 rounded-full bg-white border border-neutral-300 text-xl font-bold text-neutral-700 transition-all duration-200 hover:bg-black hover:text-white hover:scale-105"
            >
              +
            </button>
          </div>
          <button
            onClick={() => {
              addItemToBuy(shirt, quantityToBuy);
              currentShirtAdd(shirt);
              openModal();
            }}
            className="w-full sm:w-auto uppercase text-sm font-bold bg-black text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:scale-[1.02]"
          >
            Añadir al carrito
          </button>
        </div>
        <div className="pt-6">
          <SocialMediaInfo />
        </div>
      </div>
    </>
  );
}

export default InfoClothes;
