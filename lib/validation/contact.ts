import { z } from "zod";

export const contactTypes = ["general", "freelancer", "job"] as const;
export type ContactType = (typeof contactTypes)[number];

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  email: z.email("Enter a valid email address").max(200),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  subject: z.string().trim().max(150).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
  type: z.enum(contactTypes).default("general"),
  budget: z.string().trim().max(100).optional().or(z.literal("")),
  rateType: z.string().trim().max(50).optional().or(z.literal("")),
  // Honeypot: real visitors never fill this in.
  company: z.string().max(0, "").optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
