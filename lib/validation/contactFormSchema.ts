import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(150, "Name is too long"),
  email: z.string().email("Enter a valid email").max(255, "Email is too long"),
  phone: z.string().min(10, "Phone is required").max(15, "Phone is too long"),
  budget: z
    .string({ required_error: "Budget is required" })
    .min(1, "Budget is required"),
  services: z.string().min(2, "Select a Service"),
  comment: z.string().optional(),
});
