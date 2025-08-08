import { getAllCategory } from "@/actions/category";
import CeilingTypes from "./_components/ceiling-list";
import { ICategory } from "@/types/category";

export default async function page() {
  const { data } = await getAllCategory();
  return <CeilingTypes ceilingTypes={data as ICategory[]} />;
}
