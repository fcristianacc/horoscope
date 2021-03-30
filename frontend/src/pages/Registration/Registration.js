import { Link } from "react-router-dom";
import "./Registration.css";

function Registration() {
  return (
    <div className="Registration">
      <body>
        <div className="registration-container" id="registration-container">
          <form id="myform">
            <label for="usr">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="usr"
              required
              minLength="6"
            ></input>
            <label for="pw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="pw"
              required
              minLength="6"
            ></input>
            <label for="pw">
              <b>Confirmation</b>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="pw"
              required
              minLength="6"
            ></input>

            <button type="submit">Sign Up</button>

            <Link to="/">
              <button type="cancel">Cancel</button>
            </Link>
          </form>
        </div>
      </body>
    </div>
  );
}

export default Registration;
