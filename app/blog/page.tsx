import { getAllBlogs } from "@/actions/blog";
import Blog from "./_components/blog-list";
import { IBlog } from "@/types/blog";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "False Ceiling & Acoustic Tips | Blog by FalseCeilingNepal.shop",
  description:
    "Read expert articles on false ceiling design, acoustic solutions, and insulation techniques for homes, offices, and studios in Nepal.",
  keywords: [
    "false ceiling blog Nepal",
    "acoustic design tips",
    "insulation articles Nepal",
  ],
};

export default async function page() {
  const { data } = await getAllBlogs();
  return <Blog blogPosts={data as IBlog[]} />;
}
