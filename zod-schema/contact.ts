import z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  service: z.string().min(1, "Service is required"),
  message: z.string().min(1, "Message is required"),
});


export type ContactFormInputs = z.infer<typeof contactFormSchema>;