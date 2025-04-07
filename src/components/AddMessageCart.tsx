import useStore from "@/store/myState";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function AddMessageCart() {
  const { currentShirt, openModal } = useStore();
  const router = useRouter();

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-70 z-50 flex justify-center items-center px-4">
      <section className="relative p-4 sm:p-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white rounded-xl shadow-2xl text-center animate-slide-in flex flex-col gap-4">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-1 shadow-md">
          <CheckCircleIcon className="text-green-600" style={{ fontSize: 40 }} />
        </div>
        <button
          onClick={() => openModal()}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 transition-all duration-300"
        >
          <CloseIcon className="text-gray-600" fontSize="small" />
        </button>
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mt-4">
          ¡Agregado al carrito!
        </h1>
        <article className="py-2 sm:py-4">
          {currentShirt ? (
            <div className="flex items-center gap-2 sm:gap-4 bg-gray-50 p-3 sm:p-4 rounded-lg shadow-sm">
              <Image
                src={currentShirt.image}
                alt={currentShirt.name}
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-md transition-transform duration-300 hover:scale-105"
              />
              <div className="text-left">
                <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                  {currentShirt.name}
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-700">
                  ${currentShirt.price.toFixed(2)}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  Cantidad: {currentShirt.quantity}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 italic text-sm sm:text-base">
              No hay ningún producto seleccionado.
            </p>
          )}
        </article>

        {/* Botones */}
        <div className="flex flex-col gap-2 sm:gap-3">
          <button
            className="bg-gradient-to-r from-gray-800 to-black text-white uppercase font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:from-gray-700 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base"
            onClick={() => openModal()}
          >
            Seguir comprando
          </button>
          <button
            className="bg-gradient-to-r from-gray-800 to-black text-white uppercase font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:from-gray-700 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base"
            onClick={() => {
              router.push("/cart");
              openModal();
            }}
          >
            Ver carrito
          </button>
        </div>
      </section>
    </div>
  );
}

export default AddMessageCart;