import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Login.scss";
import { axiosClient } from "../../utils/axiosClient";
import { KEY_ACCESS_TOKEN, setItem } from "../../utils/localStorageManager";
import dcImg from "../../assets/dgc.png";
import backgroundImage from "../../assets/background.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axiosClient.post("/auth/login", {
        email,
        password,
      });
      setItem(KEY_ACCESS_TOKEN, response.result.accessToken);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div
      className="Login"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {" "}
      <div className="login-box">
        <img
          className="heading"
          style={{ marginLeft: 40 }}
          src={dcImg}
          alt="DigitalFlake Admin Logo"
        />
        <h2
          style={{ fontWeight: "bold", fontSize: 30, color: "grey" }}
          className="heading"
        >
          Welcome to DigitalFlake Admin
        </h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              className="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              className="password-toggle-icon"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          <input type="submit" className="submit" />
          <Link to="/forgot-password" className="forgot-password">
            Forgot Password?
          </Link>
        </form>
        <p className="subheading">
          Do not have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
