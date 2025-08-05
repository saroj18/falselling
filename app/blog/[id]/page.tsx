import { getSingleBlog } from "@/actions/blog";
import BlogPost from "./_components/blog-details";
import { IBlog } from "@/types/blog";

export default async function page({ params }: { params: any}) {
  const { data } = await getSingleBlog(params.id);
  return <BlogPost blogPost={data as IBlog} />;
}
