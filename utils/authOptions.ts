import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { ApiError } from "@/helper/ApiError";
import { prisma } from "./prisma";
import env from "./env";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: { label: "Phone", type: "text", placeholder: "jsmith" },
        id: { label: "Id", type: "text", placeholder: "jsmith" },
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new ApiError("Invalid credentials");
        }

        const checkUser = await prisma.user.findFirst({
          where: {
            email: credentials.email,
          },
        });

        if (!checkUser) {
          throw new Error("User not found");
        }

        const verifyPassword = await bcrypt.compare(
          credentials.password,
          checkUser.password
        );

        if (!verifyPassword) {
          throw new ApiError("Incorrect password");
        }

        return checkUser;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account) {
        token.userId = user.id;
        token.email = user.email;
        token.name = (user as any).firstname + " " + (user as any).lastname;
      }
      return token;
    },
    session({ session, token }) {
      session.user!.email = token.email as string;
      session.user!.name = token.name as string;
      (session.user as any).id = token.userId as string;
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
  secret: env.NEXTAUTH_SECRET,
};
