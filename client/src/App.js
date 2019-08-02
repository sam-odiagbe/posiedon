import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Socket from "./io/index";
import Iolistener from "./components/iolistener";
import Withdrawals from "./components/withdrawals";
import Game from "./components/game";
import actions from "./io/actions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const {
  getgameobject,
  resetgame,
  creategame,
  getwithdrawalrequest,
  turngameon
} = actions;
class App extends Component {
  constructor() {
    super();

    this.state = {
      game: null,

      totalSignedUp: null,
      withdrawals: []
    };

    this.createGame = this.createGame.bind(this);
    this.setGameObject = this.setGameObject.bind(this);
    this.setWithdrawalRequest = this.setWithdrawalRequest.bind(this);
    this.updateWithdrawalData = this.updateWithdrawalData.bind(this);
  }

  setGameObject(game) {
    // hello how are you doing
    console.log(game);
    this.setState({
      game
    });
  }

  createGame(data) {
    Socket.emit(creategame, data);
  }

  resetGameObject(e) {
    const sure = prompt("Are you sure you want to continue");
    if (sure) {
      Socket.emit(resetgame);
    } else {
      return;
    }
  }

  setWithdrawalRequest(data) {
    this.setState({
      withdrawals: data
    });
  }

  componentDidMount() {
    // grab the game object from the server
    Socket.emit(getgameobject);
    Socket.emit(getwithdrawalrequest);
  }

  updateWithdrawalData(data) {
    const withdraws = this.state.withdrawals.filter(val => {
      console.log(data, val);
      return data._id !== val._id;
    });
    console.log(withdraws);
    this.setState({
      withdrawals: withdraws
    });
  }

  turnGameOn(e) {
    // if (e.target.checked) return;
    Socket.emit(turngameon);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation setGameState={this.setGameState} />
          <ToastContainer />
          <div className="tp-main-container">
            <Switch>
              <Route
                path="/withdrawal_request"
                exact
                render={routeProps => {
                  return (
                    <Withdrawals
                      {...routeProps}
                      withdrawals={this.state.withdrawals}
                      socket={Socket}
                    />
                  );
                }}
              />
              <Route
                path="/game"
                exact
                render={routeprops => {
                  return (
                    <Game
                      {...routeprops}
                      game={this.state.game}
                      setGameState={this.setGameState}
                      createGame={this.createGame}
                      resetGameObject={this.resetGameObject}
                      turnGameOn={this.turnGameOn}
                    />
                  );
                }}
              />
            </Switch>
          </div>
          <Iolistener
            socket={Socket}
            setWithdrawalRequest={this.setWithdrawalRequest}
            setGameObject={this.setGameObject}
            updateWithdrawalData={this.updateWithdrawalData}
          />
        </div>
      </Router>
    );
  }
}

export default App;
