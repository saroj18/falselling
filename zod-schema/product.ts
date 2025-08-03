import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  category: z.string().min(1, "Category is required"),
  price: z.coerce
    .number()
    .min(1, "Price must be greater than 1")
    .nonnegative("price must be non-negative number"),
  stock: z.coerce.number().min(1, "stock must be greater than 1"),
  status: z.enum(["in_stock", "low_stock", "out_of_stock"]),
  description: z
    .string()
    .min(5, "description must be greater than 5 character"),
  weight: z.coerce.number().min(1, "weight must be required"),
  dimensions: z.string().min(1, "dimension must be required"),
  sku: z.string().optional(),
  brand: z.string().optional(),
  warranty: z.string(),
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

export type ProductFormData = z.infer<typeof productSchema>;
