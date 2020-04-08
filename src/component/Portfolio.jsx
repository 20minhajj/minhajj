import React, { Component } from "react";
import babel from "./images/babel.png";
import andela from "./images/andela.jpeg";
import me from "./images/harith.png";

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="portfolio">
        <div className="portfolio">
          <div className="container">
            <h2>portfolio</h2>
            <p>Portfolio Projects</p>

            <div className="tabs">
              <input type="radio" value="all" id="all" name="tab" defaultChecked/>
              <label htmlFor="all">all</label>
              <input
                type="radio"
                value="website design"
                id="websiteDesign"
                name="tab"
              />
              <label htmlFor="websiteDesign">Web Apps</label>
              <input
                type="radio"
                value="graphic design"
                id="graphicDesign"
                name="tab"
              />
              <label htmlFor="graphicDesign">Blogs</label>

              <div className="content">
                <div className="all graphicDesign float-left">
                  <img
                    className="responsive-img"
                    src={babel}
                    height="300"
                    width="300"
                    alt="tab"
                  />
                  <div className="overlay">
                    <h3>Medium</h3>
                    <p>What is BabelJs and it’s Configuration.</p>
                    <span>
                      <a
                        href="https://medium.com/@minhajjharith/what-is-babel-js-and-its-configuration-c753dc5335f0"
                        target="_blanck"
                      >
                        &#43;
                      </a>
                    </span>
                  </div>
                </div>
                <div className="all graphicDesign center float-left">
                  <img
                    className="responsive-img"
                    src={andela}
                    width="300"
                    height="300"
                    alt="tab"
                  />
                  <div className="overlay">
                    <h3>Medium</h3>
                    <p>The Good Part 2019.</p>
                    <span>
                      <a
                        href="https://medium.com/@minhajjharith/the-good-part-2019-61c24559f26d"
                        target="_blanck"
                      >
                        &#43;
                      </a>
                    </span>
                  </div>
                </div>

                <div className="all websiteDesign float-left">
                  <img
                    className="responsive-img"
                    src={me}
                    width="300"
                    height="300"
                    alt="tab"
                  />
                  <div className="overlay">
                    <h3>Web app</h3>
                    <p>Portfolio site</p>
                    <span>&#43;</span>
                  </div>
                </div>
                <div className="all websiteDesign center float-left">
                  <img
                    className="responsive-img"
                    src={
                      "https://raw.githubusercontent.com/20minhajj/safariChap/UI/UI/img/safari-chap-bg.jpg?token=AK3LMVL5AF6EZYA3G6AOGK26STDQG"
                    }
                    width="300"
                    height="300"
                    alt="tab"
                  />
                  <div className="overlay">
                    <h3>Web App</h3>
                    <p>safariChap</p>
                    <span>&#43;</span>
                  </div>
                </div>

                <div className="clearFix"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <!---end portfolio-></div> */}
      </div>
    );
  }
}

export default Portfolio;
