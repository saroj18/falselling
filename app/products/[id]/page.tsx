import { getSingleProduct } from "@/actions/product";
import ProductDetail from "./_components/product-details";
import { IProduct } from "@/types/product";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data } = await getSingleProduct(id);
  return <ProductDetail product={data as IProduct} />;
}
