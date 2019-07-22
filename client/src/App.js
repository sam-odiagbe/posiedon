import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/home";
import CreateGame from "./components/creategame";
import Winners from "./components/winners";
import Socket from "./io/index";
import Iolistener from "./components/iolistener";
import actions from "./io/actions";
import Game from "./components/game";

const { getgameobject, turngameonoroff, resetuser, updategameobject } = actions;
class App extends Component {
  constructor() {
    super();

    this.state = {
      game: null,
      totalSignedUp: null
    };

    this.setGameObject = this.setGameObject.bind(this);
  }

  setGameObject(game) {
    this.setState({
      game
    });
  }

  updateGameObject(data) {
    Socket.emit(updategameobject, data);
  }

  setGameState(e) {
    const { checked } = e.target;
    if (checked) {
      Socket.emit(turngameonoroff, true);
    } else {
      Socket.emit(turngameonoroff, false);
      Socket.emit(resetuser);
    }
  }

  componentDidMount() {
    // grab the game object from the server
    Socket.emit(getgameobject);
  }

  render() {
    return (
      <div className="App">
        <div className="tp-main">
          <Navigation />
          <Home totalSignedup={this.state.totalSignedUp} />
          <Winners />
          <Game game={this.state.game} setGameState={this.setGameState} />
          <CreateGame updateGameObject={this.updateGameObject} />

          <Iolistener socket={Socket} setGameObject={this.setGameObject} />
        </div>
      </div>
    );
  }
}

export default App;
