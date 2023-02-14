import "./register.scss";
import { Link } from "react-router-dom";
import axios from "axios";

import { useState } from "react";

const Register = () => {
  const logins = {
    email: "",
    password: "",
    password_confirmation: "",
    registrationErrors: "",
  };

  const [form, setForm] = useState(logins);

  const { email, username, password, registrationErrors } = form;

  const handleSubmit = (e) => {
    axios
      .post(
        "http://localhost:3001/registrations",
        {
          user: {
            email: email,
            username: username,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then((resp) => {
        console.log("registration res", resp);
      })
      .catch((err) => {
        console.log("Registration error", err);
      });

    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="register-container">
      <div className="register">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            required
            value={email}
          />
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            required
            value={username}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required
          />
          <button>Sign Up</button>
          <span>
            Have an account?
            <Link to="/login" className="Link">
              Sign In
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
