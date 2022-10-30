import React, { Component } from "react";

export class scoreboard extends Component {
  constructor(props) {
    super(props);
    this.addScore = this.addScore.bind(this);
    this.deductScore = this.deductScore.bind(this);
    this.resetScore = this.resetScore.bind(this);
  }
  addScore() {
    this.props.updateScore("add");
  }
  deductScore() {
    this.props.updateScore("subtract");
  }
  resetScore() {
    this.props.updateScore("reset");
  }
  render() {
    return (
      <div className="scoreboard">
        <div>
          <h2>Score: {this.props.currentScore}</h2>
        </div>
        <div id="scoreboard-buttons">
          <button onClick={this.addScore} id="increase-button">
            Increase
          </button>
          <button onClick={this.deductScore} id="decrease-button">
            Decrease
          </button>
          <button onClick={this.resetScore} id="reset-button">
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default scoreboard;
