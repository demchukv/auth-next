import { UserRole } from "@prisma/client";
import * as z from "zod";

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.USER, UserRole.ADMIN]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }
      return true;
    },
    {
      message: "Password is required!",
      path: ["password"],
    }
  )
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }
      return true;
    },
    {
      message: "New password is required!",
      path: ["newPassword"],
    }
  );

export const LoginSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Email must be a string",
    })
    .email({
      message: "Email is required",
    }),
  password: z.string().min(1),
  code: z.optional(z.string()),
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

export const ResetSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Email must be a string",
    })
    .email({
      message: "Email is required",
    }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});
