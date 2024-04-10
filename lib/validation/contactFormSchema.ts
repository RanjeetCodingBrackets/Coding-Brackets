import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(150, "Name is too long"),
  email: z.string().email("Enter a valid email").max(255),
  phone: z.string().min(10).max(15),
  budget: z.number(),
  services: z.string().min(2),
  comment: z.string().min(5).optional(),
});
