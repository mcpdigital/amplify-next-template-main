import prisma from "@/libs/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// pages/api/auth/[...nextauth].js

import { SessionProvider } from "next-auth/react";

export default NextAuth({
  providers: [
    SessionProvider.Credentials({
      // The name to display on the sign-in form (e.g., 'Sign in with...')
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add custom authentication logic here
        const user = { id: 1, name: "example" };
        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
    // Add other providers as needed
  ],
  pages: {
    signIn: "/auth/login",
  },
});
//debug: process.env.NODE_ENV === "development",
session: {
  strategy: "jwt";
}
secret: process.env.NEXTAUTH_SECRET; // store this in a .env file
