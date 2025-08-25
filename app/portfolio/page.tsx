import { getAllPhotos } from "@/actions/gallery";
import Portfolio from "./_components/portfolio-list";
import { IGallery } from "@/types/gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "False Ceiling Project Portfolio | Nepal’s Acoustic & Insulation Experts",
  description:
    "View our portfolio of completed false ceiling, acoustic panel, and insulation projects across Nepal.",
  keywords: [
    "false ceiling projects Nepal",
    "acoustic installations",
    "ceiling portfolio Nepal",
  ],
};

export default async function page() {
  const { data } = await getAllPhotos();
  return <Portfolio projects={data as IGallery[]} />;
}
