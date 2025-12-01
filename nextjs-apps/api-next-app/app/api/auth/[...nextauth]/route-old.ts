import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
// import Github from "next-auth/providers/github";

const handler = NextAuth({
    providers: [
        Credentials({
            name: "Login with OTP",
            credentials: {
                token: { label: "Token", type: "token" },
            },
            async authorize(credentials) {
                const token = credentials?.token;

                if( !token ) return null;

                const decoded = JSON.parse(
                    Buffer.from(token.split(".")[1], "base64").toString()
                )

                return decoded;
            }
        })
        // Github({
        //     clientId: "Ov23liEk0wcq2Y5dBYHx",
        //     clientSecret: "e699fc7013d000b94b90f6dcca09623e44a5ab9c"
        // })
    ],
    pages: {
        signIn: "/api/auth/login",
    },
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        async jwt({ token, user }: any) {
            if(user) {
                token.user = user;
            }
            return token;
        },

        async session({ session, token }: any) {
            session.user = token?.user as string;
            console.log(session);
            return session;
        }
    }
})

export { handler as GET, handler as POST };