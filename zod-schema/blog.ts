import { z } from "zod";

export const blogSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  excerpt: z.string().min(10, "Excerpt must be at least 10 characters"),
  content: z.string().min(50, "Content must be at least 50 characters"),
  category: z.string().min(1, "Category is required"),
  author: z.string().min(1, "Author is required"),
  status: z.enum(["Draft", "Published"]),
  featured: z.boolean().default(false),
  tags: z.array(z.string()).optional(),
  images: z.any().refine(
    (value) => {
      if (typeof window !== "undefined" && value instanceof FileList) {
        return value?.length > 0;
      } else if (typeof window == "undefined") {
        return true;
      } else {
        return false;
      }
    },
    { message: "Please select at least one file" }
  ),
});

export const blogSchemaUpdate = blogSchema.extend({
  id: z.string(),
  images: z.any().optional(),
});

export type Blog = z.infer<typeof blogSchema>;
export type BlogUpdate = z.infer<typeof blogSchemaUpdate>;
