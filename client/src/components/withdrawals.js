import React, { Component } from "react";
import actions from "../io/actions";

const { clearwithdrawal } = actions;

class Withdrawals extends Component {
  constructor() {
    super();

    this.clearWithdrawalRequest = this.clearWithdrawalRequest.bind(this);
  }

  componentDidMount() {
    // grab withdrawal request
  }

  clearWithdrawalRequest(e) {
    const id = e.target.id;
    this.props.socket.emit(clearwithdrawal, id);
  }
  render() {
    const { withdrawals } = this.props;
    const withdraws = withdrawals
      ? withdrawals.map(val => {
          return (
            <div className="tp-withdraw-request">
              <div>
                <h2>{val.user.username}</h2>
                <h5>{val.user.bank}</h5>
                <h5>{val.user.account_number}</h5>
                <h5>&#8358; {val.amount}</h5>
              </div>

              <div>
                <button
                  className="tp-dismiss"
                  style={{ fontSize: 40, color: "red" }}
                  onClick={this.clearWithdrawalRequest}
                  id={val._id}
                >
                  &times;
                </button>
              </div>
            </div>
          );
        })
      : "no withdrawals for now";
    return (
      <div className="tp-withdrawals">
        <h4 className="tp-heading">Withdrawals</h4>
        {withdraws}
      </div>
    );
  }
}

export default Withdrawals;
