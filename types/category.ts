export type ICategory = {
  id: string;
  name: string;
  description: string;
  productCount?:number
  features?:string[]
  tags?:string[]
  images:string[]
  avg_price:number
  createdAt: Date;
  updatedAt: Date;
};
