import React, { useState } from "react";
import "../Components/Navbar.css";
import Auth from "./Auth";

function Navbar() {
    const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);

    const handleSignInClick = () => {
      setIsAuthPopupOpen(true);
    };
  
    const closeAuthPopup = () => {
        console.log("Closing the popup");
      setIsAuthPopupOpen(false);
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
        <button onClick={handleSignInClick}>Sign in</button>
        <Auth isOpen={isAuthPopupOpen} onClose={closeAuthPopup} />
      </div>
    </div>
  );
}

export default Navbar;
