import { getAllPhotos } from "@/actions/gallery";
import Portfolio from "./_components/portfolio-list";
import { IGallery } from "@/types/gallery";

export default async function page(){
  const {data}=await getAllPhotos()
  return <Portfolio projects={data as IGallery[]} />
}