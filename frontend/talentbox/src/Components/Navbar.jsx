import React, { useEffect, useState } from "react";
import "../Components/Navbar.css";
import Auth from "./Auth";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
function Navbar({ userpic, setuserpic }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/login");
  };

  const handlelogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("pictures");
    setuserpic(null);
    navigate("/");
  };

  useEffect(() => {
    setuserpic(localStorage.getItem("pictures"));
  }, [token]);

  return (
    <div id="nav">
      <div className="nav-input">
        <button>
          <FaSearch />
        </button>
        <input type="text" placeholder="Search 8,000+ tutorials" />
      </div>
      <div className="nav-logo">
        <Link to={"/"}>
          freeCodeCamp<i class="fab fa-free-code-camp"></i>
        </Link>
      </div>
      <div className="nav-user">
        <button>Menu</button>
        {token ? (
          <>
            {userpic ? (
              <img onClick={handlelogout} src={userpic} alt="" />
            ) : (
              <FaCircleUser onClick={handlelogout} />
            )}
          </>
        ) : (
          <button onClick={handleSignInClick}>Sign in</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
