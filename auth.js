import NextAuth, { CredentialsSignin } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { users } from "./models/userModel";
import { compare } from "bcrypt";
import { connectToDatabase } from "./utils/DbConnect";


export const{handlers,signIn,signOut,auth} =NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // const { email, password } = credentials;
        console.log("in this function")
        console.log(credentials);
        // console.log(email,password);
        const email= credentials.email ;
        const password = credentials.password ;
        if(!email|| !password){
            throw new CredentialsSignin("please provide both email and password");
        }
        //connection with database here

        await connectToDatabase();

        const user = await users.findOne({ email }).select("+password");
        if(!user){
            throw new CredentialsSignin("invalid email and password");
        }

        const isMatch = await compare(password, user.password);
        if (!isMatch) {
          throw new CredentialsSignin("invalid email and password");
        }

        return {
          email: user.email,
          id: user._id,
          name: user.name,
        }
      },
    }),
  ],
  
  pages:{
    signIn:"/login"
  },
});
