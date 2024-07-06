import Link from "next/link";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <Link href="/">
        <img
          className="signup__image"
          src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
          alt="amazon"
        />
      </Link>
      <div className="signup__container">
        <h1>Create Account</h1>
        <form action="">
          <h5 className="signup__label">E-mail</h5>
          <input
            type="email"
            // value={userEmail}
            // onChange={(e) => setUserEmail(e.target.value)}
            name=""
            id=""
          />
          <h5 className="signup__label">Password</h5>
          <input
            type="password"
            // value={userPassword}
            // onChange={(e) => setUserPassword(e.target.value)}
            name=""
            id=""
          />
          <h5 className="signup__label">Confirm Password</h5>
          <input
            type="password"
            // value={confirmUserPassword}
            // onChange={(e) => setConfirmUserPassword(e.target.value)}
            name=""
            id=""
          />
          <button
            type="submit"
            // onClick={signUp}
            className="signup__signupButton"
          >
            Sign up
          </button>
        </form>
        <p className="signup__terms">
          ℹ Passwords must be at least 6 characters.
        </p>
      </div>
      <div className="signup__login">
        <p>Already have an account?</p>
        <Link href="/login">
          <button className="signup__loginButton">Sign in</button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
