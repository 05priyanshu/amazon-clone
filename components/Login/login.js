"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./Login.css";
// import { Link, useHistory } from "react-router-dom";
// import { auth } from "./firebase";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { signIn } from "next-auth/react";

// toast.configure();

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  // const notify = (statement) => {
  //   toast.error(statement, { position: toast.POSITION.TOP_CENTER });
  // };

  // const user = (e) => {
  //   e.preventDefault();
  //   auth
  //     .signInWithEmailAndPassword(userEmail, userPassword)
  //     .then((auth) => {
  //       history.push("/");
  //     })
  //     .catch((e) => notify(e.message));
  // };

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
        <form action="">
          <h5 className="login__label">E-mail</h5>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            name=""
            id=""
          />
          <h5 className="login__label">Password</h5>
          <input
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            name=""
            id=""
          />
          <button
            type="submit"
            onClick={() => {
              // signIn("credentials", { userEmail, userPassword });
            }}
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
