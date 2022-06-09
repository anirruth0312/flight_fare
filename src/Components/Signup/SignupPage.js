import React, { useState } from "react";

const SignupPage = () => {
  const [signupError, setSignupError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  return (
    <form>
      <p>Sign Up</p>
      <label htmlFor="email">
        email
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
        />
      </label>
      <br />
      <label for="password">
        password
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"
        />
        <label for="Confirmpassword">Confirm Password</label>
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          name="password"
          type="password"
        />
      </label>
      <br />
      <input type="submit" value="Submit" />
      {signupError && <p style={{ color: "red" }}>{signupError}</p>}
    </form>
  );
};

export default SignupPage;
