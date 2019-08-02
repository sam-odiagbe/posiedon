import React, { Component } from "react";

class CreateGame extends Component {
  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.createGame = this.createGame.bind(this);
    this.state = {
      game: {
        question: "",
        options: "",
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

  createGame(e) {
    e.preventDefault();
    console.log(this.props);
    const game = this.state.game;
    const { createNewGame } = this.props;
    createNewGame(game);
  }

  render() {
    const { question, options, answer } = this.state.game;
    return (
      <div className="tp-create-game">
        <h4 style={{ padding: 10, paddingLeft: 0 }}>Create a new game</h4>
        <form onSubmit={this.createGame}>
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
            <button className="tp-auth-btn">Create game</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateGame;
