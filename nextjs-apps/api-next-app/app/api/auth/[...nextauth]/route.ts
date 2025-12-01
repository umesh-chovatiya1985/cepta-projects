import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Phone Number and OTP",
      credentials: {
        phoneNumber: { label: "Phone Number", type: "text" },
      },
      async authorize(credentials: any) {
        // 1. Verify OTP: Call your backend API to verify the OTP
        //    received for the given phone number.
        const user = {
          id: "1",
          name: "umesh patel",
          phoneNumber: credentials.phoneNumber,
        }
        return user
      },
    }),
  ],
  // Configure session strategy to JWT if you're not using a database for sessions
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id
        token.phoneNumber = user.phoneNumber
      }
      return token
    },
    async session({ session, token }: any) {
      session.user.id = token.id
      session.user.phoneNumber = token.phoneNumber
      return session
    },
  },
  pages: {
    signIn: "/auth/signin", // Custom sign-in page
  },
})

export { handler as GET, handler as POST }
