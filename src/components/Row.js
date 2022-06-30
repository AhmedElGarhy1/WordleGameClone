const Row = ({ guess, currentGuess }) => {
  if (guess) {
    return (
      <div className="row past">
        {guess.map((ele, i) => {
          return (
            <div key={i} className={ele.color}>
              {ele.char}
            </div>
          );
        })}
      </div>
    );
  }
  if (currentGuess) {
    return (
      <div className="row current">
        {currentGuess.split("").map((ele, i) => (
          <div key={i} className="filled">
            {ele}
          </div>
        ))}
        {[...Array(5 - currentGuess.length)].map((ele, i) => (
          <div key={i}></div>
        ))}
      </div>
    );
  }

  return (
    <div className="row">
      {[...Array(5)].map((ele, i) => {
        return <div key={i}></div>;
      })}
    </div>
  );
};

export default Row;

{
  /* {guess &&
        guess.map((ele, i) => {
          return <div key={i}>{ele.char}</div>;
        })} */
}
