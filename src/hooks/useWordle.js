import { useState, useEffect } from "react";

const useWordle = (solution) => {
  const [currentGuess, setCurrentGuess] = useState("");
  const [history, setHistory] = useState([]);
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [turn, setTurn] = useState(0);
  const [isWin, setIsWin] = useState(false);
  const [isLose, setIsLose] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});

  useEffect(() => {
    if (turn > 0) {
      if (guesses[turn - 1].every((ele) => ele.color === "green")) {
        setIsWin(true);
        console.log("You Win oh oh");
      }
    } else if (turn === 6) {
      setIsLose(true);
      console.log("You Lose");
    }
  }, [guesses, turn]);

  const formatGuess = (guessess) => {
    const solutionArray = [...solution];
    const formatedGuess = [...currentGuess].map((ele) => {
      return { char: ele, color: "grey" };
    });

    // check if there are green letters (letters in the right position)
    formatedGuess.forEach((ele, i) => {
      if (solutionArray[i] === ele.char) {
        solutionArray[i] = null;
        formatedGuess[i].color = "green";
      }
    });

    // check if there are yellow letter (letter in the word but not in the right position)
    formatedGuess.forEach((ele, i) => {
      if (solutionArray.includes(ele.char) && ele.color !== "green") {
        solutionArray[solutionArray.indexOf(ele.char)] = null;
        formatedGuess[i].color = "yellow";
      }
    });

    return formatedGuess;
  };
  const addNewGuess = (newGuess) => {
    setTurn(turn + 1);
    const formatedGuess = formatGuess(newGuess);

    setHistory((prev) => {
      const past = [...prev];
      past.push(newGuess);
      return past;
    });
    setGuesses((prev) => {
      const past = [...prev];
      past[turn] = formatedGuess;
      return past;
    });

    setUsedKeys((prev) => {
      let newKeys = { ...prev };
      formatedGuess.forEach((ele) => {
        const currentColor = ele.color;
        newKeys[ele.char] = ele.color;
        if (ele.color === "green") {
          newKeys[ele.char] = "green";
          return;
        }
        if (ele.color === "yellow" && currentColor !== "green") {
          newKeys[ele.char] = "yellow";
          return;
        }
        if (
          ele.color === "grey" &&
          currentColor !== "yellow" &&
          currentColor !== "green"
        ) {
          newKeys[ele.char] = "grey";
          return;
        }
      });
      return newKeys;
    });
    setCurrentGuess("");
  };

  const handleKeyUp = ({ key }) => {
    if (currentGuess.length === 5) {
      if (key === "Enter") {
        if (!history.includes(currentGuess)) {
          addNewGuess(currentGuess);
        }
      }
    } else if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((e) => {
          return e + key.toLowerCase();
        });
      }
    } else if (key === "Backspace") {
      setCurrentGuess((prev) => {
        let temp = prev;
        temp = temp.slice(0, -1);
        return temp;
      });
    }
  };
  return { turn, currentGuess, guesses, isWin, isLose, usedKeys, handleKeyUp };
};

export default useWordle;
