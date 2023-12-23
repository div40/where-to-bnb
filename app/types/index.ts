import { User } from "@prisma/client";

// to fix typescript error because we modified the type of value from date to string

export type SafeUser = Omit<
User,
    "createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
}