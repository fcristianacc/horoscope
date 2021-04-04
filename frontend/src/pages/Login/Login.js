import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="Login">
      <div className="login-container-wrapper">
        <div className="login-container" id="login-container">
          <label for="usr">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="usr"
            required
          ></input>
          <label for="pw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="pw"
            required
          ></input>

          <button type="submit">Login</button>

          <Link to="/registration">
            <button type="register">Create Account</button>
          </Link>
          <Link to="/signs">
            <button type="sign">
              What is your Sign? (Without Registration)
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
