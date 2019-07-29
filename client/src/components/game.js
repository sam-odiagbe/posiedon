import React, { Component } from "react";
import CreateGame from "./creategame";

class Game extends Component {
  render() {
    const { game } = this.props;
    const drawGame = game ? (
      <React.Fragment>
        <p className={`${game.gameison ? "tp-on" : "tp-off"}`}>
          {game.question.question}
        </p>
        <div className="tp-options">
          {game.question.option.map(val => {
            return <div className="tp-chip">{val}</div>;
          })}
          <label className="tp-container">
            set game on/off
            <input
              type="checkbox"
              onChange={this.props.setGameState}
              checked={game.gameison}
            />
            <span className="tp-checkmark" />
          </label>
        </div>
      </React.Fragment>
    ) : (
      "Getting game...."
    );
    return (
      <div className="game">
        <h4 className="tp-heading">Game</h4>

        <h4>Current game</h4>
        <div className={`tp-on-game`}>{drawGame}</div>
        <CreateGame updateGameObject={this.props.updateGameObject} />
      </div>
    );
  }
}

export default Game;
