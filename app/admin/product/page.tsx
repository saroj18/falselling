import { getAllProducts } from "@/actions/product";
import ProductsContent from "./_components/product-list";

export default async function page() {
  const { data } = await getAllProducts();
  console.log(">>>>", data);
  return <ProductsContent products={data!} />;
}
