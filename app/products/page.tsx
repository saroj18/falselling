import { filterProductByCategory, getAllProducts, getAllProductsForUserSide } from "@/actions/product";
import Products from "./_components/product-list";
import { IProduct } from "@/types/product";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "False Ceiling Products | Gypsum, T-Grid, PET, Rockwool in Nepal",
  description:
    "Browse high-quality false ceiling products, acoustic panels, Rockwool, aluminum foil insulation, and T-grid systems available in Nepal.",
  keywords: [
    "false ceiling products Nepal",
    "gypsum ceiling",
    "T-grid",
    "PET panels",
    "Rockwool",
    "acoustic insulation Nepal",
  ],
};

interface PageProps {
  searchParams: Promise<{ category: string }>;
}

export default async function page({ searchParams }: PageProps) {
  const category = (await searchParams).category;
  let data;
  if (category) {
    data = await filterProductByCategory(category as string);
  } else {
    data = await getAllProductsForUserSide();
    console.log("products>>>", data);
  }
  return <Products products={data.data as IProduct[]} />;
}
