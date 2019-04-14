import React, { Component } from "react";
import "./App.css";

class Cookie extends Component {
  render() {
    return (
      <div className="cookie" onClick={this.props.handleClick}>
        <img
          src="https://www.happierdaily.com/wp-content/uploads/2016/05/Happier-Daily-Fortune-Cookie.png"
          className="App-logo"
          alt="logo"
        />
      </div>
    );
  }
}

export default Cookie;
