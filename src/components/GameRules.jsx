import React from "react";

export default function GameRules() {
  return (
    <div className="row navigation_steps">
      <div role="navigation">
        <ul>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Step-0
            </a>
            <ul className="dropdown" aria-label="submenu">
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  The game will start, if clicked start
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  we call player 1 as 'p1'
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  we call player 2 as 'p2'
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Step-1
            </a>
            <ul className="dropdown" aria-label="submenu">
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Suppose it's p1's turn
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  p1 & p2 both have to give number as input
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  p1 will select if p2's given number is Even or Odd
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  p1 will click 'submit' button
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Step-2
            </a>
            <ul className="dropdown" aria-label="submenu">
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Suppose it's p2's turn
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  p1 & p2 both have to give number as input
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  p2 will select if p1's given number is Even or Odd
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  p2 will click 'submit' button
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Step-3
            </a>
            <ul className="dropdown" aria-label="submenu">
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Step-1 & Step-2 will be repeating
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  ** Until we find a Winner
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
