import React from "react";

export default function GameTimer() {
  return (
    <div className="row mt-3 mb-5">
      <div className="col-12 col-md-6 m-auto">
        <p
          className="d-flex justify-content-evenly"
          style={{
            width: "300px",
            margin: "auto",
            fontSize: "20px",
            color: "rgb(51, 255, 0)",
          }}
        >
          Game Time: <span id="game_time_minute">10</span>minutes,{" "}
          <span id="game_time_second">00</span>seconds
        </p>
        <p
          className="d-flex justify-content-evenly"
          style={{
            width: "130px",
            margin: "15px auto 0",
            fontSize: "14px",
            color: "lavenderblush",
          }}
        >
          Timer:{" "}
          <span id="hours" className="d-none">
            00
          </span>
          <span id="mins">00</span>:<span id="seconds">00</span>
        </p>
      </div>
    </div>
  );
}
