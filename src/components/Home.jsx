import React, { useEffect, useState } from "react";
import GameControllers from "./GameControllers";
import GameFinalResult from "./GameFinalResult";
import GamePlay from "./GamePlay";
import GameRules from "./GameRules";
import GameScoreBoard from "./GameScoreBoard";
// import GameTimer from "./GameTimer";

const initialTurns = {
  player1Turn: true,
  player2Turn: false,
};

const initialGamePoints = {
  p1PreviousPoints: 0,
  p1GamePoints: 10,
  p2PreviousPoints: 0,
  p2GamePoints: 10,
};

const initialGameInputs = {
  player1Guess: "even",
  player2Guess: "odd",
  p1Input1: "",
  p1Input2: "",
  p2Input1: "",
  p2Input2: "",
};

const initialGameMomentum = {
  isGameStarted: false,
  isGamePaused: true,
  isGameReset: true,
  isGameResumed: true,
  isGameEnd: false,
};

export default function Home() {
  const [winner, setWinner] = useState(null);
  const [p1SubmitBtnActive, setP1SubmitBtnActive] = useState(false);
  const [p2SubmitBtnActive, setP2SubmitBtnActive] = useState(false);
  const [turn, setTurn] = useState(initialTurns);
  const [gamePoints, setGamePoints] = useState(initialGamePoints);
  const [gameInputs, setGameInputs] = useState(initialGameInputs);
  const [gameMomentum, setGameMomentum] = useState(initialGameMomentum);
  const [gameScore, setGameScore] = useState([
    {
      turn: "Initial",
      p1Previous: gamePoints.p1PreviousPoints,
      p1Current: gamePoints.p1GamePoints,
      p2Previous: gamePoints.p2PreviousPoints,
      p2Current: gamePoints.p2GamePoints,
    },
  ]);

  const gameStartBtn = (e) => {
    e.preventDefault();
    setGameMomentum((prev) => {
      return {
        ...prev,
        isGameStarted: true,
        isGamePaused: false,
        isGameReset: false,
        isGameResumed: true,
        isGameEnd: false,
      };
    });
    setTurn(() => initialTurns);
    setGamePoints(() => initialGamePoints);
    setGameInputs(() => initialGameInputs);
    setP1SubmitBtnActive(false);
    setP2SubmitBtnActive(false);
    setGameScore(() => [
      {
        turn: "--",
        p1Previous: gamePoints.p1PreviousPoints,
        p1Current: gamePoints.p1GamePoints,
        p2Previous: gamePoints.p2PreviousPoints,
        p2Current: gamePoints.p2GamePoints,
      },
    ]);
  };
  const gamePauseBtn = (e) => {
    e.preventDefault();
    setGameMomentum((prev) => {
      return {
        ...prev,
        isGamePaused: true,
        isGameStarted: true,
        isGameReset: false,
        isGameResumed: false,
        isGameEnd: false,
      };
    });
  };
  const gameResumeBtn = (e) => {
    e.preventDefault();
    setGameMomentum((prev) => {
      return {
        ...prev,
        isGamePaused: false,
        isGameStarted: true,
        isGameReset: false,
        isGameResumed: true,
        isGameEnd: false,
      };
    });
  };
  const gameResetBtn = (e) => {
    e.preventDefault();
    setTurn(() => initialTurns);
    setGamePoints(() => initialGamePoints);
    setGameInputs(() => initialGameInputs);
    setP1SubmitBtnActive(false);
    setP2SubmitBtnActive(false);
    setGameMomentum(() => initialGameMomentum);
    setGameScore(() => [
      {
        turn: "--",
        p1Previous: gamePoints.p1PreviousPoints,
        p1Current: gamePoints.p1GamePoints,
        p2Previous: gamePoints.p2PreviousPoints,
        p2Current: gamePoints.p2GamePoints,
      },
    ]);
  };
  const player1SubmitBtn = (e) => {
    e.preventDefault();
    const { player1Guess, p1Input1, p1Input2 } = gameInputs;
    setGamePoints((prev) => {
      if (
        (player1Guess == "even" && parseInt(p1Input2) % 2 == 0) ||
        (player1Guess == "odd" && parseInt(p1Input2) % 2 != 0)
      ) {
        return {
          ...prev,
          p1PreviousPoints: prev.p1GamePoints,
          p2PreviousPoints: prev.p2GamePoints,
          p1GamePoints: prev.p1GamePoints + parseInt(p1Input2),
          p2GamePoints: prev.p2GamePoints - parseInt(p1Input2),
        };
      } else {
        return {
          ...prev,
          p1PreviousPoints: prev.p1GamePoints,
          p2PreviousPoints: prev.p2GamePoints,
          p1GamePoints: prev.p1GamePoints - parseInt(p1Input1),
          p2GamePoints: prev.p2GamePoints + parseInt(p1Input1),
        };
      }
    });
    setGameInputs(() => initialGameInputs);
    setTurn((prev) => {
      return {
        ...prev,
        player1Turn: false,
        player2Turn: true,
      };
    });
    setP1SubmitBtnActive(false);
    setP2SubmitBtnActive(false);
  };
  const player2SubmitBtn = (e) => {
    e.preventDefault();
    const { player2Guess, p2Input1, p2Input2 } = gameInputs;
    setGamePoints((prev) => {
      if (
        (player2Guess == "even" && parseInt(p2Input1) % 2 == 0) ||
        (player2Guess == "odd" && parseInt(p2Input1) % 2 != 0)
      ) {
        return {
          ...prev,
          p1PreviousPoints: prev.p1GamePoints,
          p2PreviousPoints: prev.p2GamePoints,
          p1GamePoints: prev.p1GamePoints - parseInt(p2Input1),
          p2GamePoints: prev.p2GamePoints + parseInt(p2Input1),
        };
      } else {
        return {
          ...prev,
          p1PreviousPoints: prev.p1GamePoints,
          p2PreviousPoints: prev.p2GamePoints,
          p1GamePoints: prev.p1GamePoints + parseInt(p2Input2),
          p2GamePoints: prev.p2GamePoints - parseInt(p2Input2),
        };
      }
    });
    setGameInputs(() => initialGameInputs);
    setTurn((prev) => {
      return {
        ...prev,
        player1Turn: true,
        player2Turn: false,
      };
    });
    setP1SubmitBtnActive(false);
    setP2SubmitBtnActive(false);
  };

  const { isGameReset, isGameStarted, isGamePaused, isGameResumed, isGameEnd } =
    gameMomentum;
  useEffect(() => {
    setGameScore((prev) => {
      if (gamePoints.p1GamePoints == 0 || gamePoints.p2GamePoints == 0) {
        setTurn(() => initialTurns);
        setGameInputs(() => initialGameInputs);
        setWinner(gamePoints.p1GamePoints == 0 ? "Player 2" : "Player 1");
        setGamePoints(() => initialGamePoints);
        setP1SubmitBtnActive(false);
        setP2SubmitBtnActive(false);
        setGameMomentum((prev) => {
          return {
            ...prev,
            isGameStarted: false,
            isGamePaused: true,
            isGameReset: true,
            isGameResumed: true,
            isGameEnd: true,
          };
        });
      }
      return [
        ...prev,
        {
          turn: turn.player1Turn ? "Player 2" : "Player 1",
          p1Previous: gamePoints.p1PreviousPoints,
          p1Current: gamePoints.p1GamePoints,
          p2Previous: gamePoints.p2PreviousPoints,
          p2Current: gamePoints.p2GamePoints,
        },
      ];
    });
  }, [turn, gamePoints]);
  return (
    <>
      <div className="bg">
        <div
          className="container"
          style={
            !isGameEnd && isGameStarted
              ? {}
              : { transform: "translate(-50%, -50%)", top: "40%" }
          }
        >
          <div className="row">
            <div className="col-12">
              <h1 className="text-white text-center">Squid Game - gGanbu</h1>
            </div>
          </div>
          <GameRules />
          <GameControllers
            gameStartBtn={gameStartBtn}
            gamePauseBtn={gamePauseBtn}
            gameResumeBtn={gameResumeBtn}
            gameResetBtn={gameResetBtn}
            gameMomentum={gameMomentum}
          />
          {/* <GameTimer /> */}
          <div className="row mt-3">
            {isGameStarted && !isGamePaused && !isGameEnd && (
              <GamePlay
                gameInputs={gameInputs}
                setGameInputs={setGameInputs}
                turn={turn}
                player1SubmitBtn={player1SubmitBtn}
                player2SubmitBtn={player2SubmitBtn}
                p1SubmitBtnActive={p1SubmitBtnActive}
                p2SubmitBtnActive={p2SubmitBtnActive}
                setP1SubmitBtnActive={setP1SubmitBtnActive}
                setP2SubmitBtnActive={setP2SubmitBtnActive}
                gamePoints={gamePoints}
              />
            )}
            {isGameStarted && !isGameEnd && (
              <GameScoreBoard gameScore={gameScore} />
            )}
          </div>
          {isGameEnd && (
            <div className="row mt-3 d-flex justify-content-center">
              <GameFinalResult winner={winner} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
