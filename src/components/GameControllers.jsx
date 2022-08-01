import React from "react";

export default function GameControllers({
  gameStartBtn,
  gameResumeBtn,
  gamePauseBtn,
  gameResetBtn,
  gameMomentum,
}) {
  const { isGameReset, isGameStarted, isGamePaused, isGameResumed, isGameEnd } =
    gameMomentum;
  return (
    <div className="row mt-3">
      <div className="col-12 col-md-6 m-auto">
        <p
          className="d-flex justify-content-evenly"
          style={{ width: "250px", margin: "auto" }}
        >
          {!isGameStarted && (
            <button
              type="button"
              className="btn btn-primary"
              id="start"
              onClick={gameStartBtn}
            >
              {isGameEnd ? "Play Again" : "Start Game"}
            </button>
          )}

          {/* {!isGamePaused && (
            <button
              type="button"
              className="btn btn-info"
              id="stop"
              onClick={gamePauseBtn}
            >
              Pause
            </button>
          )}

          {!isGameResumed && (
            <button
              type="button"
              className="btn btn-success"
              id="stop"
              onClick={gameResumeBtn}
            >
              Resume
            </button>
          )} */}

          {!isGameReset && (
            <button
              type="button"
              className="btn btn-danger"
              id="reset"
              onClick={gameResetBtn}
            >
              Reset
            </button>
          )}
        </p>
      </div>
    </div>
  );
}
