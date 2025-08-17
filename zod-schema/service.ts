import { z } from "zod";

export const serviceSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  icon: z.string().min(1, "Icon is required"),
  price: z.string().min(1, "Price is required"),
  duration: z.string().min(1, "duration is required").optional(),
  category: z.string().min(1, "category is required").optional(),
  popular: z.boolean(),
  status: z.enum(["Active", "Inactive"]),
});

export type ServiceFormData = z.infer<typeof serviceSchema>;
