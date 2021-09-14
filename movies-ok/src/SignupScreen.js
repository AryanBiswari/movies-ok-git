import React from "react";
import "./SignupScreen.css";
function SignupScreen() {
  return (
    <div className="signup-screen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Enter your email address" />
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Sign In</button>
        <h4>
          <span className="signup-grey">New to Movies Ok?</span>
          <span className="signup-link"> Sign Up Now</span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
