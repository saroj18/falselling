import { ProductFormData } from "@/zod-schema/product";

export interface IProduct extends ProductFormData {
  createdAt: Date;
  updatedAt: Date;
  id: string;
}
