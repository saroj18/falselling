import { IProduct } from "./product";

export type ICategory = {
  id: string;
  name: string;
  description: string;
  productCount?: number;
  features?: string[];
  tags?: string[];
  images: string[];
  avg_price: number;
  products?: IProduct[];
  createdAt: Date;
  updatedAt: Date;
};
