import useStore from "@/store/myState";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useRouter } from "next/navigation";

function AddMessageCart() {
  const { currentShirt, openModal } = useStore();
  const router = useRouter();
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 tex-white flex flex-col justify-center items-center">
      <section className=" p-4 w-96 bg-white text-center flex flex-col justify-center  text-sm">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Producto agregado a tu carrito</h1>
          <button
            onClick={() => openModal()}
            className="ml-2 hover:bg-gray-200 ease-in-out duration-300"
          >
            <CloseIcon fontSize="large" />
          </button>
        </div>
        <article className="py-2">
          {
            // Mostrar el nombre del producto y su precio
            currentShirt ? (
              <div key={currentShirt.id} className="flex items-center gap-2">
                <Image
                  src={currentShirt.image}
                  alt={currentShirt.name}
                  width={100}
                  height={100}
                />
                <p className="m-auto">
                  {currentShirt.name} - ${currentShirt.price}
                  <span className="block text-gray-500">
                    {currentShirt.quantity} unidad(es)
                  </span>
                </p>
              </div>
            ) : (
              <p>No hay ningún producto seleccionado.</p>
            )
          }
        </article>
        <div className="flex flex-col justify-center gap-2">
          <button
            className="bg-black uppercase text-white p-2 hover:bg-gray-600 ease-in-out duration-300"
            onClick={() => openModal()}
          >
            Seguir comprando
          </button>
          <button
            className="bg-black uppercase text-white p-2 hover:bg-gray-600 ease-in-out duration-300"
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