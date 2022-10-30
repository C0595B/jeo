
import React, { Component } from "react";
import "./App.css";
import gamebody from "./components/gamebody.js";
import header from "./components/header.js";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      score: 0,
      searchURL: "https://jservice.io/api/random"
    };
    this.updateScore = this.updateScore.bind(this);
    this.getQuestion = this.getQuestion.bind(this);
  }
  async getData() {
    try {
      const data = await fetch(this.state.searchURL);
      const JSONData = await data.json();
      this.setState({
        data: JSONData
      });
    } catch {
      console.log("Failed to fetch data");
    }
  }
  componentDidMount() {
    this.getData();
  }
  getQuestion() {
    this.getData();
  }
  updateScore(action) {
    switch (action) {
      case "add":
        this.setState({ score: this.state.score + 1 });
        break;
      case "subtract":
        this.setState({ score: this.state.score - 1 });
        break;
      case "reset":
        this.setState({ score: 0 });
        break;
      default:
        this.setState({ score: 0 });
    }
  }
  render() {
    if (this.state.data === null) {
      return (
        <div>
          <p>loading data...</p>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header />
          <gamebody
            data={this.state.data[0]}
            updateScore={this.updateScore}
            currentScore={this.state.score}
            getQuestion={this.getQuestion}
          />
        </div>
      );
    }
  }
}

export default App;
