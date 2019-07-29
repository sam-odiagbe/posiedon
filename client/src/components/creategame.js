import React, { Component } from "react";

class CreateGame extends Component {
  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateGameObject = this.updateGameObject.bind(this);
    this.state = {
      game: {
        question: "",
        options: "",
        date: "",
        answer: ""
      }
    };
  }
  handleInputChange(e) {
    const game = this.state.game;

    this.setState({
      game: { ...game, [e.target.id]: e.target.value }
    });
  }

  updateGameObject(e) {
    e.preventDefault();
    const game = this.state.game;
    const { updateGameObject } = this.props;
    updateGameObject(game);
    e.target.reset();
  }

  render() {
    const {
      question,
      options,
      possibleWinners,
      date,
      answer
    } = this.state.game;
    return (
      <div className="tp-create-game">
        <h4 style={{ padding: 10, paddingLeft: 0 }}>Create a new game</h4>
        <form onSubmit={this.updateGameObject}>
          <div>
            <textarea
              className="tp-input-field"
              placeholder="question"
              id="question"
              required
              value={question}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <input
              type="text"
              className="tp-input-field"
              placeholder="options"
              value={options}
              required
              id="options"
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Answer"
              value={answer}
              className="tp-input-field"
              id="answer"
              required
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <input
              type="date"
              id="date"
              className="tp-input-field"
              placeholder="Choose date"
              onChange={this.handleInputChange}
              value={date}
            />
          </div>

          <div>
            <button className="tp-auth-btn">Create game</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateGame;
