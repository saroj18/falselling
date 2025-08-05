import { IProduct } from "./product";

type ProductType = Omit<IProduct, "discount">;

export type StatusType = "PENDING" | "CANCEL" | "COMPLETED" | "RECEIVED";

export type Order = {
  price: string;
  discount: string;
  product_id: string;
  user_id: string;
};

export type IOrder = {
  id: string;
  price: string;
  createdAt: Date;
  updatedAt: Date;
  discount: string | null;
  status: StatusType;
  orderBy: {
    id: string;
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    phone: string;
  };
  orderedProduct: ProductType;
};
