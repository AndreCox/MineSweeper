import React, { useState } from 'react';
import GameBoard from './GameBoard';

function Difficulty() {
  //create a state that stores the state of the board
  const [board, setBoard] = useState([0, 0, 0]);
  //set the difficulty of the game based on the button clicked
  const setDifficulty = (difficulty) => {
    //set the difficulty of the game based on the button clicked
    //get the difficulty of the button clicked
    difficulty = difficulty.target.innerText;
    //hide the difficulty menu
    document.getElementById('difficulty').style.display = 'none';
    switch (difficulty) {
      case 'Easy':
        setBoard([9, 9, 10]);
        break;
      case 'Medium':
        setBoard([16, 16, 40]);
        break;
      case 'Hard':
        setBoard([30, 16, 99]);
        break;
      default:
        setBoard([9, 9, 10]);
        break;
    }
  };

  return (
    <div>
      <div
        className="difficulty absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-all"
        id="difficulty"
      >
        <div className="flex flex-col items-center justify-center p-4 rounded-lg drop-shadow-2xl shadow-2xl bg-slate-100">
          <div>
            <p className="text-4xl">Difficulty</p>
          </div>
          <div className="flex flex-row p-4 mt-4">
            <button
              className="p-4 bg-slate-300 rounded-lg m-4 hover:bg-slate-800 hover:text-white transition-all drop-shadow-lg"
              onClick={setDifficulty}
            >
              Easy
            </button>
            <button
              className="p-4 bg-slate-300 rounded-lg m-4 hover:bg-slate-800 hover:text-white transition-all drop-shadow-lg"
              onClick={setDifficulty}
            >
              Medium
            </button>
            <button
              className="p-4 bg-slate-300 rounded-lg m-4 hover:bg-slate-800 hover:text-white transition-all drop-shadow-lg"
              onClick={setDifficulty}
            >
              Hard
            </button>
          </div>
        </div>
      </div>
      <GameBoard props={board} />
    </div>
  );
}

export default Difficulty;
