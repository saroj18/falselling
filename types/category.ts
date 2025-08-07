export type ICategory = {
  id: string;
  name: string;
  description: string;
  productCount?:number
  createdAt: Date;
  updatedAt: Date;
};
