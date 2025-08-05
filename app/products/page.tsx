import { getAllProducts } from "@/actions/product";
import Products from "./_components/product-list";
import { IProduct } from "@/types/product";

export default async function page() {
  const {data}=await getAllProducts()
  return <Products products={data as IProduct[]}/>
}