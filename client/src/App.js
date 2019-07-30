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
  turngameonoroff,
  resetuser,
  updategameobject,
  clearwithdrawal,
  getwithdrawalrequest
} = actions;
class App extends Component {
  constructor() {
    super();

    this.state = {
      game: null,

      totalSignedUp: null,
      withdrawals: []
    };

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

  updateGameObject(data) {
    Socket.emit(updategameobject, data);
  }

  setGameState(e) {
    const { checked } = e.target;
    const sure = prompt("Are you sure you want to continue");
    if (sure) {
      if (checked) {
        Socket.emit(turngameonoroff, true);
      } else {
        Socket.emit(turngameonoroff, false);
        Socket.emit(resetuser);
      }
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
                      updateGameObject={this.updateGameObject}
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
