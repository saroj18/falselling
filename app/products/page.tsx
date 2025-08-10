import { filterProductByCategory, getAllProducts } from "@/actions/product";
import Products from "./_components/product-list";
import { IProduct } from "@/types/product";

interface PageProps {
  searchParams: Promise<{ category: string }>;
}

export default async function page({ searchParams }: PageProps) {
  const category = (await searchParams).category;
  let data;
  if (category) {
    data = await filterProductByCategory(category as string);
  } else {
    data = await getAllProducts();
  }
  return <Products products={data.data as IProduct[]} />;
}
