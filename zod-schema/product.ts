import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  category: z.string().min(1, "Category is required"),
  price: z.coerce.number().nonnegative("Price must be a number"),
  stock: z.coerce.number().int().nonnegative("Stock must be a whole number"),
  status: z.enum(["In Stock", "Low Stock", "Out of Stock"]),
  description: z.string(),
  weight: z.coerce.number(),
  dimensions: z.string(),
  sku: z.string().optional(),
  brand: z.string().optional(),
  warranty: z.string(),
  tags: z.array(z.string()).optional(),
});

export type ProductFormData = z.infer<typeof productSchema>;
