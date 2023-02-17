import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import styled from "styled-components";

const Login = () => {
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const { login, setCurrentUser, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { status, data: userData } = await login(inputs);

      if (status === 200) {
        setCurrentUser(userData);
        setIsAuthenticated(true);
        navigate("/");
      } else {
        console.error(userData);
      }
    } catch (err) {
      alert("Wrong user or password", err);
    }
  };

  return (
    <LoginContainer>
      <Title>
        <h1>FlatSocial</h1>
        <p>The Unofficial Social Networking App of FlatIron</p>
      </Title>
      <Card>
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
            required
          />
          <button>Login</button>
          <span>
            Don't have an account?
            <Link
              to="/register"
              style={{ color: "rgb(25, 18, 236)", textDecoration: "none" }}
            >
              Register
            </Link>
          </span>
        </form>
      </Card>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(326.9deg, #13132b 5.79%, #135e87 283.21%);
  box-shadow: 18px 4px 35px rgba(0, 0, 0, 0.02);
  position: relative;
`;

const Title = styled.div`
  display: block;
  position: absolute;
  color: white;
  top: 0;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Card = styled.div`
  padding: 50px;
  border-radius: 10px;
  display: block;
  background: linear-gradient(180deg, #02a3fe 0%, #7d40ff 100%);
  flex-direction: column;
  gap: 50px;
  justify-content: center;

  h2 {
    color: white;
    font-size: 20px;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  input {
    width: 90%;
    display: flex;
    border: none;
    border-radius: 5px;
    border-bottom: 1px solid lightgray;
    padding: 20px 10px;
    margin: 10px;
  }

  button {
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
  }

  span {
    color: white;
    padding: 10px;
    font-size: 15px;
    margin: 20px 10px;
  }
`;

export default Login;
