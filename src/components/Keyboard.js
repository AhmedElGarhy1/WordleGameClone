import { useState } from "react";
import { keyboardKeys } from "../data";

const Keyboard = ({ usedKeys, handleKeyUp, isWin, isLose }) => {
  const [keyboard, setKeyboard] = useState(keyboardKeys);
  const onkeyClick = (char) => {
    if (!isWin && !isLose) {
      const temp = { key: char };
      handleKeyUp(temp);
    }
  };

  return (
    <div className="keyboard">
      {[...keyboardKeys].map((row, ri) => (
        <div key={ri} className="key-row">
          {row.map((ele, ei) => {
            const color = usedKeys[ele.key];
            return (
              <div
                key={ei}
                className={color}
                onClick={() => onkeyClick(ele.key)}
              >
                {ele.key}
              </div>
            );
          })}
        </div>
      ))}
      <div className="remove" onClick={() => onkeyClick("Backspace")}>
        Delete
      </div>
      <div className="submite" onClick={() => onkeyClick("Enter")}>
        Enter
      </div>
    </div>
  );
};

export default Keyboard;
