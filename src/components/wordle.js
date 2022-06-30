import { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Board from "./Board";

const Wordle = ({ solution }) => {
  const { turn, guesses, currentGuess, isWin, isLose, usedKeys, handleKeyUp } =
    useWordle(solution);
  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    if (isWin || isLose) window.removeEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);
  return (
    <>
      <Board
        guesses={guesses}
        currentGuess={currentGuess}
        turn={turn}
        usedKeys={usedKeys}
        handleKeyUp={handleKeyUp}
        isWin={isWin}
        isLose={isLose}
      />
    </>
  );
};

export default Wordle;
