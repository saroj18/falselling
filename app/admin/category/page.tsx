import { getAllCategory } from "@/actions/category";
import CategoriesContent from "./_components/category-list";
import { ICategory } from "@/types/category";

export default async function page() {
  const { data } = await getAllCategory();
  console.log("dd", data);
  return <CategoriesContent categories={data as ICategory[]} />;
}
