
import React, { Component } from "react";
import scoreboard from "./scoreboard.js";

export class gamebody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewAnswer: false
    };
    this.toggleViewAnswer = this.toggleViewAnswer.bind(this);
    this.getQuestion = this.getQuestion.bind(this);
  }
  toggleViewAnswer() {
    if (this.state.viewAnswer) {
      this.setState({
        viewAnswer: false
      });
    } else {
      this.setState({
        viewAnswer: true
      });
    }
  }
  getQuestion() {
    this.props.getQuestion();
    this.setState({
      viewAnswer: false
    });
  }
  render() {
    return (
      <div className="gameBody">
        <scoreboard
          updateScore={this.props.updateScore}
          currentScore={this.props.currentScore}
        />
        <div className="gameQuestions">
          <h6>Category: {this.props.data.category.title}</h6>
          <h4>Question: {this.props.data.question}</h4>
          <div className="gameQuestions-buttons">
            <button onClick={this.getQuestion} id="getQuestion-button">
              Get Question
            </button>
            <button onClick={this.toggleViewAnswer} id="toggleAnswer-button">
              View Answer
            </button>
          </div>
          {this.state.viewAnswer ? (
            <p> {this.props.data.answer} </p>
          ) : (
            <p>.....</p>
          )}
        </div>
      </div>
    );
  }
}

export default gamebody;
