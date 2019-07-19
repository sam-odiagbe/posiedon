import React from "react";

const Home = ({ totalSignedUp }) => {
  return (
    <div className="tp-main">
      <h2>Total for</h2>
      <div className="tp-real-time-data">
        <div className="tp-total">
          <h2>Game</h2>
          <h3>{totalSignedUp ? totalSignedUp : 0}</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
