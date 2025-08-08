import { z } from "zod";

export const categorySchema = z.object({
  name: z
    .string()
    .min(2, "Category name must be at least 2 characters")
    .max(100, "Category name must be less than 100 characters"),
  tags: z.array(z.string()).optional(),
  features: z.array(z.string()).optional(),
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
  avg_price: z
    .number()
    .min(1, "Price must be greater than 1")
    .nonnegative("price must be non-negative number"),
  description: z
    .string()
    .min(5, "Description must be at least 5 characters")
    .max(500, "Description must be less than 500 characters"),
});

export type CategoryFormData = z.infer<typeof categorySchema>;
