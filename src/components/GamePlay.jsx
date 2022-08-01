import React from "react";
import TakeOnlyInteger from "../utils/TakeOnlyInteger";

export default function GamePlay({
  gameInputs,
  setGameInputs,
  turn,
  player1SubmitBtn,
  player2SubmitBtn,
  p1SubmitBtnActive,
  p2SubmitBtnActive,
  setP1SubmitBtnActive,
  setP2SubmitBtnActive,
  gamePoints,
}) {
  const { player1Guess, player2Guess, p1Input1, p1Input2, p2Input1, p2Input2 } =
    gameInputs;
  const { player1Turn, player2Turn } = turn;
  const { p1GamePoints, p2GamePoints } = gamePoints;
  return (
    <div className="col-md-12 col-lg-5 mb-4">
      {player1Turn && (
        <table className="table table table-dark table-p1">
          <thead>
            <tr>
              <th colSpan="2" className="text-info text-center">
                <h3>
                  <b>Player 1's Turn</b>
                </h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-primary text-center">Player 1's Input</td>
              <td className="text-primary text-center">Player 2's Input</td>
            </tr>

            <tr>
              <td>
                <form>
                  <input
                    id="p1Input1"
                    type="text"
                    className="form-control"
                    placeholder={`Insert min:1 , max:${p1GamePoints}`}
                    value={p1Input1}
                    onChange={(e) => {
                      return TakeOnlyInteger(
                        p1GamePoints,
                        p2GamePoints,
                        "p1Input1",
                        setGameInputs,
                        e.target.value,
                        p1Input2,
                        setP1SubmitBtnActive
                      );
                    }}
                    autoComplete="on"
                  />
                </form>
              </td>
              <td>
                <form>
                  <input
                    id="p1Input2"
                    type="password"
                    className="form-control"
                    placeholder={`Insert min:1 , max:${p2GamePoints}`}
                    value={p1Input2}
                    onChange={(e) => {
                      return TakeOnlyInteger(
                        p2GamePoints,
                        p1GamePoints,
                        "p1Input2",
                        setGameInputs,
                        e.target.value,
                        p1Input1,
                        setP1SubmitBtnActive
                      );
                    }}
                    autoComplete="on"
                  />
                </form>
              </td>
            </tr>

            <tr>
              <td colSpan="2">
                <div className="text-info d-flex justify-content-evenly align-items-center">
                  <span>Guess Player 2's input: </span>
                  <select
                    name="player1Guess"
                    id="player1Guess"
                    className="form-select"
                    style={{ width: "99px", textAlign: "center" }}
                    value={player1Guess}
                    onChange={(e) => {
                      return setGameInputs((prev) => {
                        return {
                          ...prev,
                          player1Guess: e.target.value,
                        };
                      });
                    }}
                  >
                    <option value="odd">Odd</option>
                    <option value="even">Even</option>
                  </select>
                </div>
              </td>
            </tr>
            <tr id="p1SubmitRow">
              <td colSpan="2">
                <div className="d-flex justify-content-center">
                  <button
                    className={`btn btn-success btn-sm ${
                      !p1SubmitBtnActive ? "disabled-button" : ""
                    }`}
                    id="p1Submit"
                    onClick={player1SubmitBtn}
                  >
                    Player 1 Submit
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      )}
      {player2Turn && (
        <table className="table table table-dark table-p2">
          <thead>
            <tr>
              <th colSpan="2" className="text-info text-center">
                <h3>
                  <b>Player 2 Turn</b>
                </h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-primary text-center">Player 1's Input</td>
              <td className="text-primary text-center">Player 2's Input</td>
            </tr>
            <tr>
              <td>
                <form>
                  <input
                    id="p2Input1"
                    type="password"
                    className="form-control"
                    placeholder={`Insert min:1 , max:${p1GamePoints}`}
                    value={p2Input1}
                    onChange={(e) => {
                      return TakeOnlyInteger(
                        p1GamePoints,
                        p2GamePoints,
                        "p2Input1",
                        setGameInputs,
                        e.target.value,
                        p2Input2,
                        setP2SubmitBtnActive
                      );
                    }}
                    autoComplete="on"
                  />
                </form>
              </td>
              <td>
                <form>
                  <input
                    id="p2Input2"
                    type="text"
                    className="form-control"
                    placeholder={`Insert min:1 , max:${p2GamePoints}`}
                    value={p2Input2}
                    onChange={(e) => {
                      return TakeOnlyInteger(
                        p2GamePoints,
                        p1GamePoints,
                        "p2Input2",
                        setGameInputs,
                        e.target.value,
                        p2Input1,
                        setP2SubmitBtnActive
                      );
                    }}
                    autoComplete="on"
                  />
                </form>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <div className="text-info d-flex justify-content-evenly align-items-center">
                  <span>Guess Player 1's input: </span>
                  <select
                    name="player2Guess"
                    id="player2Guess"
                    className="form-select"
                    style={{ width: "99px", textAlign: "center" }}
                    value={player2Guess}
                    onChange={(e) => {
                      return setGameInputs((prev) => {
                        return {
                          ...prev,
                          player2Guess: e.target.value,
                        };
                      });
                    }}
                  >
                    <option value="odd">Odd</option>
                    <option value="even">Even</option>
                  </select>
                </div>
              </td>
            </tr>
            <tr id="p2SubmitRow">
              <td colSpan="2">
                <div className="d-flex justify-content-center">
                  <button
                    className={`btn btn-success btn-sm ${
                      !p2SubmitBtnActive ? "disabled-button" : ""
                    }`}
                    id="p2Submit"
                    onClick={player2SubmitBtn}
                  >
                    Player 2 Submit
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
