import React from "react";
const Game = ({ game, setGameState }) => {
  const res = game ? (
    <div className="tp-game">
      <h2>{game.question.question}</h2>
      <h4>{game.question.option.toString()}</h4>
      <h4>{game.question.answer}</h4>
      <h2 style={{ paddingTop: 20 }}>
        {game.gameison ? (
          <span className="tp-indicator tp-game-on" />
        ) : (
          <span className="tp-indicator tp-game-off" />
        )}
      </h2>
      <label>
        Set game on/off{" "}
        <input
          type="checkbox"
          checked={game.gameison}
          onChange={setGameState}
        />
      </label>
    </div>
  ) : (
    <h3>No game is on</h3>
  );

  return res;
};

export default Game;
