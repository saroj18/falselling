export type IUser = {
  id: string;
  firstname: string;
  lastname: string;
  password: string;
  phone: string;
  role: "Admin" | "User";
  email: string;
  status: "Active" | "Blocked";
  createAt?: Date;
  updatedAt?: Date;
};
