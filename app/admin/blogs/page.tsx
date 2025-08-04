import { getAllBlogs } from "@/actions/blog";
import BlogContent from "./_components/blog-list";
import { IBlog } from "@/types/blog";

export default async function page() {
    const {data}=await getAllBlogs()
  return <BlogContent blogs={data as IBlog[]} />;
}
