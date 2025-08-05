import { getSingleBlog } from "@/actions/blog";
import BlogPost from "./_components/blog-details";
import { IBlog } from "@/types/blog";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data } = await getSingleBlog(id);
  return <BlogPost blogPost={data as IBlog} />;
}
