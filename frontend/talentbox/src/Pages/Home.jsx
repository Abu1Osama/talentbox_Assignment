import React from "react";
import "../Pages/Home.css";
function Home() {
  return (
    <div id="home">
      <div className="home-main">
        <div className="list">
          <h1>Learn to code - for free.</h1>
          <h1>Build Projects.</h1>
          <h1>Earn certification.</h1>
        </div>
        <div className="para">
          <div>
            <p>
              Since 2014 ,more than 40,000 freeCodecamp.org graduates have
              gotten jobs at tech companies including:
            </p>
          </div>
          <div className="icon">
            <span>
              <i class="fa-brands fa-apple"></i>
            </span>
            <span>Google</span>
            <span>
              <i class="fa-brands fa-microsoft"></i>Microsoft
            </span>
            <span>
              <i class="fa-brands fa-spotify"></i>Spotify
            </span>
            <span>
              <i class="fa-brands fa-amazon"></i>mazon.com
            </span>
          </div>
        </div>

        <div className="home-btn">
          <button className="ico-btn">Get Started ( it's free )</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
