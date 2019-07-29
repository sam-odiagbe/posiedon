import React, { Component } from "react";
import actions from "../io/actions";

const { setgameobject, newuserjoined, requests } = actions;
class IoListener extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { socket: Socket, setGameObject, setWithdrawalRequest } = this.props;

    Socket.on(setgameobject, game => {
      setGameObject(game);
    });

    Socket.on(newuserjoined, data => {});

    Socket.on(requests, data => {
      setWithdrawalRequest(data);
    });
  }

  render() {
    return null;
  }
}

export default IoListener;
