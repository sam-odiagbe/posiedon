import React from "react";

const Winners = () => {
  const winner = [];
  const winners = winner.length ? (
    winners.map(winner => {
      return null;
    })
  ) : (
    <p className="tp-no-winner">No winners to be paid</p>
  );
  return (
    <div className="tp-winners">
      <h2>Winners</h2>
      {winners}
    </div>
  );
};

export default Winners;
