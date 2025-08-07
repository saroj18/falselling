import { z } from "zod";

export const categorySchema = z.object({
  name: z
    .string()
    .min(2, "Category name must be at least 2 characters")
    .max(100, "Category name must be less than 100 characters"),

  description: z
    .string()
    .min(5, "Description must be at least 5 characters")
    .max(500, "Description must be less than 500 characters"),
});

export type CategoryFormData = z.infer<typeof categorySchema>;
