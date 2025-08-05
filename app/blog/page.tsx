import { getAllBlogs } from "@/actions/blog";
import Blog from "./_components/blog-list";
import { IBlog } from "@/types/blog";

export default async function page() {
  const { data } = await getAllBlogs();
  return <Blog blogPosts={data as IBlog[]} />;
}
