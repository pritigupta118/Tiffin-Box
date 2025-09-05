import { z } from 'zod'


 export const userSignupSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  contact: z.string().min(10, "Contact number must be at least 10 digits long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  role: z.enum(["user","admin"])
})

export type SignupInputState = z.infer<typeof userSignupSchema>;

export const userLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  role: z.enum(["user","admin"])
})

export type LoginInputState = z.infer<typeof userLoginSchema>;