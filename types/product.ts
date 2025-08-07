import { ProductFormData } from "@/zod-schema/product";
import { ICategory } from "./category";
export interface IProduct extends Omit<ProductFormData,"category"> {
  createdAt: Date;
  updatedAt: Date;
  id: string;
  category?: ICategory; 

}
