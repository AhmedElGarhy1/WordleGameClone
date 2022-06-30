import React from "react";
import Keyboard from "./Keyboard";
import Row from "./Row";
const Board = ({
  guesses,
  currentGuess,
  turn,
  usedKeys,
  isWin,
  isLose,
  handleKeyUp,
}) => {
  return (
    <div className="board">
      {guesses.map((guess, i) => {
        if (i === turn) {
          return <Row key={i} currentGuess={currentGuess} />;
        }
        return <Row key={i} guess={guess} />;
      })}
      <Keyboard
        guesses={guesses}
        turn={turn}
        usedKeys={usedKeys}
        handleKeyUp={handleKeyUp}
        isWin={isWin}
        isLose={isLose}
      />
    </div>
  );
};

export default Board;
