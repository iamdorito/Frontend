import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <h1>Sign In</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
          <span>
            Don't have an account?{" "}
            <Link to="/register" className="Link">
              Register
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
