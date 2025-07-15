import { z } from "zod";

export const userZodSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    firstname: z
      .string()
      .min(1, { message: "First name must be at least 1 characters" }),

    phone: z
      .string()
      .min(10, { message: "phone must be 10 characters" })
      .refine((val) => val.startsWith("9"), {
        message: "phone must start with 9",
      }),
    lastname: z
      .string()
      .min(1, { message: "Last name must be at least 1 characters" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm password is required" }),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      message: "password do not match",
      path: ["confirmPassword"],
    }
  );

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});
