
import React from "react";
import Link from "next/link";
import "./Login.css";
import { redirect } from "next/dist/server/api-utils";
// import { Link, useHistory } from "react-router-dom";
// import { auth } from "./firebase";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { signIn } from "@/auth";
import { connectToDatabase } from "@/utils/DbConnect";
import { users } from "@/models/userModel";



const Login = () => {


  const loginhandler = async (formdata) => {
    "use server";

    const email = formdata.get("email");
    const password = formdata.get("password");
   
      console.log(email,password);

    await connectToDatabase();
    console.log("hi1");

    try{
      console.log("hi2");
      const userdata = await signIn("credentials", { 
        email,
        password,
        // redirect:true,
        // redirectTo:"/",
      });
      console.log(userdata);

      console.log("hi3");

    }catch(error){
      return error.message;

    }
  };

  return (
    <div className="login">
      <Link href="/">
        <img
          className="login__image"
          src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
          alt="amazon"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form action={loginhandler}>
          <h5 className="login__label">E-mail</h5>
          <input
            type="email"
            
            name="email"
            id=""
          />
          <h5 className="login__label">Password</h5>
          <input
            type="password"
           
            name="password"
            id=""
          />
          <button
            type="submit"
           
            className="login__signinButton"
          >
            Login
          </button>
        </form>
        <p className="login__terms">
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
      </div>
      <div className="login__signup">
        <p>New to Amazon?</p>
        <Link href="signup">
          <button className="login__signupButton">
            Create your Amazon account
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
