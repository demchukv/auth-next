import NextAuth, { type DefaultSession } from "next-auth";
import { JWT } from "@auth/core/jwt";
import { UserRole } from "@prisma/client";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  isTwoFactorEnabled: boolean;
  isOauth: boolean;
};
declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

// declare module "@auth/core/jwt" {
//   interface JWT {
//     id?: string;
//     role?: UserRole;
//   }
// }
