import React, { Component } from "react";
import "../App.css";
import axios from "axios";

class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      email: "",
      name: "",
      areatxt: "",
      tel: ""
    };
    this.handleChnage = this.handleChnage.bind(this);
    this.handleSubmit = this.handleChnage.bind(this);
  }

  handleChnage = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const userMsg = {
      name : this.state.name,
      email: this.state.email,
      tel: this.state.tel,
      areatxt :this.state.areatxt
    } 
    console.log(userMsg)
    axios
      .post(" http://localhost:5000/api/stuff" , userMsg)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { name, email, tel, areatxt } = this.state;
    return (
      <div id="contacts">
        <div className="contacts">
          <div className="container">
            <h2>contacts</h2>

            <p>Get In Touch;</p>
            <div className="top-contacts">
              <div className="float-left contact">
                <span>
                  <a href="mailto:minhajjharith@gmail.com">
                    {" "}
                    <i className="fa fa-envelope fa-lg"></i>
                  </a>
                </span>
              </div>
              <div className="float-left contact">
                <span>
                  <a href="tel:+255719186216">
                    {" "}
                    <i className="fa fa-phone fa-2x"></i>
                  </a>
                </span>
              </div>
              <div className="float-left contact">
                <span>
                  <a
                    href="https://goo.gl/maps/4pk2zig3tUpp2CoK9"
                    target="_blanck"
                  >
                    {" "}
                    <i className="fa fa-map-marker fa-2x"></i>
                  </a>
                </span>
              </div>
              <div className="clearFix"></div>
            </div>
            <form
              className="top-contacts"
              onSubmit={this.handleSubmit}
              method= "POST"
              action="/"
            >
              <div className="float-left">
                <input
                  type="text"
                  name="name"
                  placeholder="NAME"
                  value={name}
                  onChange={this.handleChnage}
                  
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-MAIL"
                  value={email}
                  onChange={this.handleChnage}
                  
                />
                <input
                  type="text"
                  name="tel"
                  placeholder="PHONE"
                  value={tel}
                  onChange={this.handleChnage}
                  
                />
              </div>
              <div className="float-left">
                <textarea
                  placeholder="MESSAGE"
                  name="areatxt"
                  value={areatxt}
                  onChange={this.handleChnage}
                 
                ></textarea>
                <button>SEND</button>
              </div>
              <div className="clearFix"></div>
            </form>
          </div>
        </div>

        <footer>
          <div>
            <a href="hhttps://web.facebook.com/harith.minhajj">
              <i className="fa fa-facebook-square fa-lg"></i>
            </a>
          </div>

          <div>
            <a href="https://twitter.com/harithminhajj">
              <i className="fa fa-twitter-square fa-lg"></i>
            </a>
          </div>

          <div>
            <a href="https://github.com/20minhajj">
              <i className="fa fa-github-square fa-lg"></i>
            </a>
          </div>

          <div>
            <a href="https://www.linkedin.com/in/harith-minhajj-917930173/">
              <i className="fa fa-linkedin-square fa-lg"></i>
            </a>
          </div>

          <p>2020 &copy; All Rigth Reserved.</p>
        </footer>
      </div>
    );
  }
}

export default Contacts;
