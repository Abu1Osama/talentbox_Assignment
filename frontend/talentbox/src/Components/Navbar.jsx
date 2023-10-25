import React, { useState } from "react";
import "../Components/Navbar.css";
import Auth from "./Auth";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");
  const pictures = localStorage.getItem("pictures");
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/login");
  };

  const handlelogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div id="nav">
      <div className="nav-input">
        <input type="text" placeholder="Search 8,000+ tutorials" />
      </div>
      <div className="nav-logo">
        freeCodeCamp<i class="fab fa-free-code-camp"></i>
      </div>
      <div className="nav-user">
        <button>Menu</button>
        {token ? (
          <img onClick={handlelogout} src={pictures} alt="" />
        ) : (
          <button onClick={handleSignInClick}>Sign in</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
