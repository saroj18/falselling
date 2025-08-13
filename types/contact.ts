import { IProduct } from "./product";

export type IContact = {
  id: string;
  email: string;
  name: string;
  message: string;
  phone: string;
  status:'Read'|'Unread'
  service: string;
  createdAt: Date;
  updatedAt: Date;
};
