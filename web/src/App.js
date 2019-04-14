import React, { Component } from "react";
import Cookie from "./Cookie";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fortunes: [
        "So toss away stuff you don't need in the end, but keep what's important and know who's your friend",
        "Don't want to be a climber reaching for the top. Don't want to be anything where I don't know when to stop.",
        "You don't have to be faster than the bear, you just have to be faster than the slowest guy.",
        "It's easy sometimes when you just coast along, but like it or not something always seems to go wrong",
        "The rest of your lifetime devoid of a care, if you keep your eyes open you may find yourself there"
      ],
      currentFortune: "Click the cookie, read your fortune."
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const fortuneIndex = Math.floor(Math.random() * this.state.fortunes.length);
    this.setState({
      currentFortune: this.state.fortunes[fortuneIndex]
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Cookie handleClick={this.handleClick} />
          <p>{this.state.currentFortune}</p>
        </header>
      </div>
    );
  }
}

export default App;
