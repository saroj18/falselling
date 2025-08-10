import { getAllPhotos } from "@/actions/gallery";
import GalleryContent from "./_components/gallery-list";
import { IGallery } from "@/types/gallery";

export default async function page() {
    const{data}=await getAllPhotos()
  return <GalleryContent images={data as IGallery[]} />;
}
