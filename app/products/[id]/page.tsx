import { getSingleProduct } from "@/actions/product";
import ProductDetail from "./_components/product-details";
import { IProduct } from "@/types/product";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  const { data } = await getSingleProduct(id);
  return (
    <ProductDetail
      userId={(session?.user as any)?.id}
      product={data as IProduct}
    />
  );
}
