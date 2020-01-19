import React, { Component } from "react";
import "./App.css";

const cookieImage = require("./static/images/FortuneCookie.png")
class Cookie extends Component {
  render() {
    return (
      <div className="cookie" onClick={this.props.handleClick}>
        <img
          src={cookieImage}
          className="App-logo"
          alt="logo"
        />
      </div>
    );
  }
}

export default Cookie;
