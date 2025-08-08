import { getAllProducts } from "@/actions/product";
import Pricing from "./_components/price-list";
import { IProduct } from "@/types/product";

export default async function page() {
  const { data } = await getAllProducts();
  return <Pricing materialPricing={data as IProduct[]} />;
}
