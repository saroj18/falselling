export type IUser = {
  id: string;
  firstname: string;
  lastname: string;
  password: string;
  phone: string;
  role: "Admin" | "User";
  email: string;
  status: "Active" | "Blocked";
  createdAt?: Date;
  updatedAt?: Date;
};
