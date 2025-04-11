"use client";
import { useEffect, useState } from "react";
import useStore from "@/store/myState";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";

function AddMessageCartToast() {
  const { currentShirt, openModal } = useStore();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!currentShirt) return;
    setIsVisible(true);
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2200);

    const closeTimer = setTimeout(() => {
      openModal();
    }, 2500);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(closeTimer);
    };
  }, [currentShirt, openModal]);

  if (!currentShirt) return null;

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 w-[90%] sm:w-[360px] max-w-sm shadow-lg bg-white rounded-xl border border-neutral-200 transition-all duration-500 ${isVisible ? "animate-fade-in-up" : "animate-fade-out-down"
        }`}
    >
      <div className="flex items-start gap-3 p-4">
        <CheckCircleIcon className="text-green-600 mt-1" fontSize="medium" />
        <div className="flex-1 space-y-1 text-sm">
          <p className="text-neutral-900 font-semibold">Producto agregado</p>
          <div className="flex items-center gap-3">
            <Image
              src={currentShirt.image}
              alt={currentShirt.name}
              width={40}
              height={40}
              className="w-10 h-10 rounded-md object-cover"
            />
            <div className="text-xs text-neutral-700">
              <p className="line-clamp-1">{currentShirt.name}</p>
              <p>${currentShirt.price.toFixed(2)} MXN</p>
              <p className="text-gray-400 text-[10px]">
                Cantidad: {currentShirt.quantity}
              </p>
            </div>
          </div>

          <div className="flex justify-between pt-2">
            <button
              onClick={() => openModal()}
              className="text-xs text-gray-500 hover:underline"
            >
              Seguir comprando
            </button>
            <button
              onClick={() => {
                router.push("/cart");
                openModal();
              }}
              className="text-xs font-semibold text-black hover:underline"
            >
              Ver carrito →
            </button>
          </div>
        </div>
        <button
          onClick={() => openModal()}
          className="text-gray-400 hover:text-black transition p-1"
          aria-label="Cerrar"
        >
          <CloseIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
}

export default AddMessageCartToast;
