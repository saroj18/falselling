import { getAllProducts } from "@/actions/product";
import ProductsContent from "./_components/product-list";

export default async function page() {
  const { data } = await getAllProducts();
  return <ProductsContent products={data!} />;
}
