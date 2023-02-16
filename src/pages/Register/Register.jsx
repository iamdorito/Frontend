import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { setCurrentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const { email, username, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    e.preventDefault();
    fetch("http://localhost:3000/users", configObj).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setCurrentUser(user);
        });
      } else {
        resp.json().then((errors) => {
          console.error(errors);
        });
      }
    });
    navigate("/");
  };

  return (
    <div className="register-container">
      <div className="register">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            required
            value={username}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            required
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required
            value={password}
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
