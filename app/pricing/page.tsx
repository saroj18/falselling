import { getAllProducts } from "@/actions/product";
import Pricing from "./_components/price-list";
import { IProduct } from "@/types/product";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "False Ceiling Pricing in Nepal | Gypsum & Acoustic Solutions",
  description:
    "Get transparent pricing for gypsum ceilings, T-grid systems, PET acoustic panels, Rockwool insulation, and more in Nepal.",
  keywords: [
    "false ceiling price Nepal",
    "gypsum ceiling price",
    "acoustic panel price",
    "insulation cost Nepal",
  ],
};

export default async function page() {
  const { data } = await getAllProducts();
  return <Pricing materialPricing={data as IProduct[]} />;
}
