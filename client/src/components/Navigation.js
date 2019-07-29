import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = props => {
  return (
    <div className="tp-navigation">
      <Link to="/" exact className="tp-brand">
        Poseidon
      </Link>
      <ul>
        <li>
          <NavLink to="/withdrawal_request" activeClassName="tp-nav-active">
            withdrawals
          </NavLink>
        </li>
        <li>
          <NavLink to="/game" activeClassName="tp-nav-active">
            game
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
