import Image from "next/image";
import useStore from "@/store/myState";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/navigation";

function CartSection({
  setCartButton,
}: {
  setCartButton: (value: boolean) => void;
}) {
  const { cart, removeFromCart } = useStore();
  const router = useRouter();

  return (
    <section className="absolute top-12 p-4 right-0 w-96 max-h-96 overflow-y-scroll lg:right-40 rounded-md shadow-lg text-sm z-50 bg-white text-black m-1">
      {cart.length > 0 ? (
        cart.map((shirt) => (
          <article
            key={shirt.id}
            className="flex items-center gap-8 py-2 px-2 border-b "
          >
            <Image
              src={shirt.image}
              alt={shirt.name}
              width={300}
              height={300}
              className="object-cover w-14 h-full"
            />
            <div className="flex flex-col gap-2 w-36">
              <h3>{shirt.name}</h3>
              <p className="font-semibold">
                ${(shirt.price * shirt.quantity).toFixed(2)} MXN
              </p>
              <p className="text-gray-400">{shirt.quantity} unidad(es)</p>
            </div>
            <button onClick={() => removeFromCart(shirt)}>
              <DeleteIcon className="text-gray-400 hover:text-black text-base" />
            </button>
          </article>
        ))
      ) : (
        <div className="flex flex-col gap-2 justify-center items-center">
          <p className="text-center text-gray-400">Tu carrito está vacío</p>
        </div>
      )}
      {cart.length > 0 && (
        <footer className="flex justify-between items-center gap-4 p-2">
          <span className="flex gap-2 justify-between items-center">
            Total:
            <p className="text-2xl text-gray-300">
              $
              {cart
                .reduce((acc, shirt) => acc + shirt.price * shirt.quantity, 0)
                .toFixed(2)}{" "}
              MXN
            </p>
          </span>
          <button
            className="bg-black text-white  px-4 py-2 text-sm font-semibold hover:bg-gray-300"
            onClick={() => {
              router.push("/cart");
              setCartButton(false);
            }}
          >
            Comprar
          </button>
        </footer>
      )}
    </section>
  );
}

export default CartSection;
