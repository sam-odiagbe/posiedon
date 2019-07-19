import React, { Component } from "react";
import actions from "../io/actions";

const { setgameobject, newuserjoined } = actions;
class IoListener extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const {
      socket: Socket,
      setGameObject,
      updateTotalNumberOfSignedUpUser
    } = this.props;

    Socket.on(setgameobject, game => {
      setGameObject(game);
    });

    Socket.on(newuserjoined, data => {
      updateTotalNumberOfSignedUpUser(data);
    });
  }

  render() {
    return null;
  }
}

export default IoListener;
