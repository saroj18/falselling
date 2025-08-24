import { getAllCategory } from "@/actions/category";
import CeilingTypes from "./_components/ceiling-list";
import { ICategory } from "@/types/category";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Types of False Ceilings in Nepal | Gypsum, T-Grid, PET, Acoustic",
  description:
    "Explore various false ceiling types—Gypsum, T-Grid, PET, acoustic ceilings, and more. Choose the right ceiling solution for your project in Nepal.",
  keywords: [
    "false ceiling types Nepal",
    "gypsum ceiling Nepal",
    "T-grid ceiling",
    "acoustic ceilings",
    "PET ceiling panels",
  ],
};

export default async function page() {
  const { data } = await getAllCategory();
  return <CeilingTypes ceilingTypes={data as ICategory[]} />;
}
