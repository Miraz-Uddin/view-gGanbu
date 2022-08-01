import React from "react";

export default function GameFinalResult({ winner }) {
  return (
    <div className="col-md-12 col-lg-5 mb-4">
      <div className="h-100 p-5 bg-light border rounded-3 text-center">
        <h2>Game Over !!</h2>
        <p className="mt-3">{winner} Won</p>
      </div>
    </div>
  );
}
