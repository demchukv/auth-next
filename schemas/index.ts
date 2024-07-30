import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Email must be a string",
    })
    .email({
      message: "Email is required",
    }),
  password: z.string().min(1),
});

export const RegisterSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Email must be a string",
    })
    .email({
      message: "Email is required",
    }),
  password: z.string().min(6),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});
