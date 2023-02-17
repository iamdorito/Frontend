import { Link, useNavigate } from "react-router-dom";

import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import styled from "styled-components";

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
    <RegisterContainer>
      <RegisterForm>
        <Title>Register</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            required
            value={username}
          />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            required
            value={email}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required
            value={password}
          />
          <SubmitButton>Sign Up</SubmitButton>
          <Message>
            Have an account?
            <Link to="/login" style={{ color: "blue", textDecoration: "none" }}>
              Sign In
            </Link>
          </Message>
        </form>
      </RegisterForm>
    </RegisterContainer>
  );
};

const RegisterContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(326.9deg, #13132b 5.79%, #135e87 283.21%);
  box-shadow: 18px 4px 35px rgba(0, 0, 0, 0.02);

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const RegisterForm = styled.form`
  padding: 50px;
  border-radius: 10px;
  display: block;
  background: linear-gradient(180deg, #02a3fe 0%, #7d40ff 100%);
  flex-direction: column;
  gap: 50px;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 50px;
    justify-content:center
    width: 50%;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const Input = styled.input`
  display: flex;
  border: none;
  border-radius: 5px;
  border-bottom: 1px solid lightgray;
  padding: 20px 10px;
  margin: 10px;
`;

const SubmitButton = styled.button`
  display: block;
  width: 50%;
  margin: auto;
  padding: 10px;
  border: none;
  background: rgb(37, 100, 184);
  border-radius: 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(
      to right,
      #25aae1,
      #40e495,
      #30dd8a,
      #2bb673
    );
    box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Message = styled.span`
  color: white;
`;

export default Register;
