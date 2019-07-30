import React, { Component } from "react";
import actions from "../io/actions";
import { toast } from "react-toastify";

const { setgameobject, newuserjoined, requests } = actions;
class IoListener extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const {
      updateWithdrawalData,
      socket: Socket,
      setGameObject,
      setWithdrawalRequest
    } = this.props;

    Socket.on(setgameobject, game => {
      setGameObject(game);
    });

    Socket.on(newuserjoined, data => {});

    Socket.on(requests, data => {
      setWithdrawalRequest(data);
    });

    Socket.on("CLEARED", data => {
      updateWithdrawalData(data);
      toast("Withdrawal has been cleared", {
        delay: 50
      });
    });
  }

  render() {
    return null;
  }
}

export default IoListener;
