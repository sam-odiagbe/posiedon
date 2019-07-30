import React, { Component } from "react";

class Withdrawals extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // grab withdrawal request
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
                <span
                  style={{ fontSize: 40, color: "red" }}
                  onClick={this.props.clearWithdrawalRequest(val._id)}
                >
                  &times;
                </span>
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
