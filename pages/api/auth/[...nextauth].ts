import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "prisma/client";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  debug: true,
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
    async jwt({ token, user }) {
      return {
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          picture: user.picture,
        },
      };
    },
  },
});
