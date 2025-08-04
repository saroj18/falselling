import { ProductFormData } from "@/zod-schema/product";
import { Blog } from "../zod-schema/blog";

export interface IBlog extends Blog {
  createdAt: Date;
  updatedAt: Date;
  id: string;
}
