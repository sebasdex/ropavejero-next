import { dbShirts } from "@/db/db";
import ProductPage from "./components/ProductPage";

async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const shirt = dbShirts.find((s) => s.id === Number(id));

  if (!shirt) {
    return (
      <div className="text-center py-20 text-neutral-400">
        Producto no encontrado
      </div>
    );
  }

  return <ProductPage shirt={shirt} />;
}

export default Page;
