import React, { Component } from "react";
import mimi from "../component/images/dp.jpg";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        {/* <!--start about--> */}
        <div className="about" id="about">
          <div className="container">
            <h2>About</h2>
            <p>Short Description;</p>
            <div className="aboutContent">
              <div className="aboutImage float-left">
                <img
                  className="responsive-img"
                  src={mimi}
                  width="300"
                  height="300"
                  alt="harith"
                />
              </div>
              <div className="aboutText float-left">
                <h3>
                  Hello world, I am <span> Harith Minhajj </span>
                  <br /> Full-stack Javascript Developer
                </h3>
                <p>I'm a Full-stack Javascript developer having 2.5 year of professional experince. Currently 
                    i am a Freelancer and a Bachelor degree Student in Compture Science. I am open for any project 
                    just let us get in touch.
                </p>
                <p></p>
              </div>
              <div className="clearFix"></div>
            </div>
          </div>
        </div>
        {/* <!--end about--> */}
        {/* <!--start about--> */}
        <div className="skills" id="skills">
          <div className="container">
            <h2>skills</h2>
            <div className="skill float-left">
              <h3>HTML&CSS</h3>
              <div className="progress">
                <span className="perc float-left"></span>
                <span>90%</span>
              </div>
            </div>
            <div className="skill float-left">
              <h3>Javascript</h3>
              <div className="progress">
                <span className="perc float-left"></span>
                <span>60%</span>
              </div>
            </div>
            <div className="skill float-left">
              <h3>ReactJS</h3>

              <div className="progress">
                <span className="perc float-left"></span>
                <span>54%</span>
              </div>
            </div>
            <div className="skill float-left me" >
              <h3>NodeJS</h3>

              <div className="progress">
                <span className="perc float-left"></span>
                <span>50%</span>
              </div>
            </div>
            <div className="skill float-left me">
              <h3>MongoDB</h3>

              <div className="progress">
                <span className="perc float-left"></span>
                <span>55%</span>
              </div>
            </div>

            <div className="skill float-left me">
              <h3>MYSQL</h3>

              <div className="progress">
                <span className="perc float-left"></span>
                <span>70%</span>
              </div>
            </div>
            <div className="clearFix"></div>
          </div>
        </div>
        {/* <!--end about--> */}
        {/* <!--start experience--> */}
        <div className="experience">
          <div className="container">
            <h2>experience</h2>
            <div className="designer float-left">
              <div className="float-left">
                <p>Mentor</p>
                <span>2019 - present</span>
              </div>
              <div className="float-left">
                <p>Full-stack web developer Mentor</p>
                <a href="http://codelady.org/" target="_blanck">
                  CodeLady
                </a>
              </div>
            </div>
            <div className="developer float-left">
              <div className="float-left">
                <p>Web developer</p>
                <span>2019 - 2019</span>
              </div>
              <div className="float-left">
                <p>Front-end developer</p>
                <a href="/">Kaplan Africa</a>
              </div>
            </div>
            <div className="clearFix"></div>
          </div>
        </div>
        {/* <!--end experience--> */}
      </div>
    );
  }
}

export default About;
