import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./SignUp.css";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useEffect } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(
    auth,
    {
      sendEmailVerification: true,
    }
  );
  let navigate = useNavigate();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("password did not matched");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };
  const [user] = useAuthState(auth);
  // if (user) {
  //   navigate("/login");
  // }
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">SignUp</h2>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmail}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePassword}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={handleConfirmPassword}
              type="password"
              name="confirm-password"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input
            onChange={() => handleCreateUser()}
            className="form-submit"
            type="submit"
            value="Sign Up"
          />
        </form>
        <p>
          Already Have an Account?
          <Link className="form-link" to="/login">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
