import { filterProductByCategory, getAllProducts } from "@/actions/product";
import Products from "./_components/product-list";
import { IProduct } from "@/types/product";

interface PageProps {
  searchParams: Record<string, string | string[] | undefined>;
}

export default async function page({ searchParams }: PageProps) {
  const category = searchParams.category;
  let data;
  if (category) {
    data = await filterProductByCategory(category as string);
  } else {
    data = await getAllProducts();
  }
  return <Products products={data.data as IProduct[]} />;
}
