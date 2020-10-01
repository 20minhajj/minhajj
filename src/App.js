import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import Contacts from "./component/Contacts";

import About from "./component/About";
import "./App.css";
import dp from "./component/images/download.png";
import Portfolio from "./component/Portfolio";
import display from "./component/images/harith.png";

function App() {
  return (
    <div id="all">
      {/* <!--start header--> */}
      <div className="header">
        <div className="container">
          <div className="menu">
            <div className="brand float-left">
              <a href="/">
                <img
                  src={display}
                  alt="display pic"
                  srcSet=""
                  height="70"
                  width="60%"
                />

                {/* <i className="fa fa-chevron-left fa-2x"></i>
                <i className="fa fa-chevron-left fa-2x"></i>
                <i className="fa fa-chevron-right fa-2x"></i> */}
              </a>
            </div>
            <label
              htmlFor="toggle"
              className="visible-sm visible-xs bar float-right"
            >
              <i className="fa fa-bars fa-lg"></i>
            </label>
            <input
              id="toggle"
              type="checkbox"
              className="hidden-xs hidden-sm hidden-md"
              name="toggle"
            />
            <ul className="classic-list float-right hidden-sm hidden-xs">
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <a href="#portfolio">portfolio</a>
              </li>

              <li>
                <a href="#contacts">contact</a>
              </li>
            </ul>
            <div className="clearFix"></div>
          </div>
          <div className="harith">
            <h1>Harith Minhajj</h1>
            <p>Mystry is at the heart of creativity.</p>
            <p>That, and surprise.</p>
            <a href="mailto:minhajjharith@gmail.com"><button>Hire me</button></a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://docs.google.com/document/d/1qm-Pp7PW2kWCH-VO3jCiBhVjPBm49QsfS7TBVap0GU0/edit?usp=sharing"><button>Download CV</button></a>
          </div>
          <div className="person hidden-xs">
            <img
              className="responsive-img"
              src={dp}
              alt="conan"
              width="100"
              height="400"
            />
          </div>
        </div>
      </div>

      <About />
      <Portfolio />
      <Contacts />
    </div>
  );
}

export default App;
