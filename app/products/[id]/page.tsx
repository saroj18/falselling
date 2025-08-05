import { getSingleProduct } from "@/actions/product";
import ProductDetail from "./_components/product-details";
import { IProduct } from "@/types/product";

export default async function page({
  params,
}: Awaited<{ params: { id: string } }>) {
  const { data } = await getSingleProduct(params.id);
  return <ProductDetail product={data as IProduct} />;
}
