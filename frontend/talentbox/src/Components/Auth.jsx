import React, { useState } from "react";
import "../Components/Auth.css";
import toast from "react-hot-toast";
import axios from "axios";
import {
  GoogleLogin,
  googleLogout,
  GoogleOAuthProvider,
} from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Auth({setuserpic}) {
  const [activeTab, setActiveTab] = useState("signup");
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const closeAuthPopup = () => {
    console.log("Closing the popup");
    navigate("/");
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(
        "https://talentbox-backend.onrender.com/user/register",
        {
          name,
          email,
          password,
        }
      );

      if (response.status === 200) {
        toast.success("Signup successful!");

        setname("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      toast.error("Signup failed. Please try again.");
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!loginEmail || !loginPassword) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(
        "https://talentbox-backend.onrender.com/user/login",
        {
          email: loginEmail,
          password: loginPassword,
        }
      );

      if (response.status === 200) {
        let pic = localStorage.getItem("pictures") 
        if (pic) {
          
          setuserpic(pic);
        }
        else{

          setuserpic(false);
        }
        console.log(response);
        localStorage.setItem("token", response.data.token);
        toast.success("Login successful!");
        navigate("/course");
        setLoginEmail("");
        setLoginPassword("")
      }
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className='Auth' id="Auth">
      <div className="credential-container">

        <div className="action">
          {activeTab === "signup" ? <h3>Signup</h3> : <h3>Login</h3>}
        </div>
        <div className="tabs">
          <button
            onClick={() => handleTabChange("signup")}
            className={`tab ${activeTab === "signup" ? "active" : ""}`}
          >
            Sign Up
          </button>
          <button
            onClick={() => handleTabChange("login")}
            className={`tab ${activeTab === "login" ? "active" : ""}`}
          >
            Login
          </button>
        </div>
        <div className="form-container">
          {activeTab === "signup" ? (
            <div className="signup">
              <form onSubmit={handleSignupSubmit}>
                <div className="form-child">
                  <label htmlFor="name">name</label>
                  <input
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
                <div className="form-child">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-child">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button className="submit" type="submit">
                  Sign Up
                </button>
              </form>
            </div>
          ) : (
            <div className="login">
              <form onSubmit={handleLoginSubmit}>
                <div className="form-child">
                  <label htmlFor="loginEmail">Email</label>
                  <input
                    type="text"
                    placeholder="Email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className="form-child">
                  <label htmlFor="loginPassword">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <button className="submit" type="submit">
                  Login
                </button>
                <GoogleOAuthProvider clientId="438821170716-mqbe0gkd64cboutfhtoo3dr06s3cin4g.apps.googleusercontent.com">
                  <GoogleLogin
                    id="google-login-button"
                    onSuccess={(credentialResponse) => {
                      console.log(credentialResponse);
                      const details = jwt_decode(credentialResponse.credential);
                      console.log(details);
                      localStorage.setItem(
                        "token",
                        credentialResponse.credential
                      );
                      localStorage.setItem("pictures", details.picture);
                      navigate("/course");
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                </GoogleOAuthProvider>
              </form>
            </div>
          )}
        </div>
        <button className="cancel-btn" onClick={closeAuthPopup}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Auth;
