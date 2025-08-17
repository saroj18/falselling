export type IService = {
  id: string;
  title: string;
  description: string;
  icon: string;
  price: string;
  popular: boolean;
  duration?: string;
  category?: string;
  status: "active" | "inactive";
  createdAt: Date;
  updatedAt: Date;
  features: string[];
};
