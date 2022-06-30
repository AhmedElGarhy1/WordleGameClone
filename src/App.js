import { allSolutions } from "./data";
import { useEffect, useState } from "react";
import Wordle from "./components/wordle";

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * allSolutions.length);
    setSolution(allSolutions[randomNum].word);
  }, []);

  return (
    <div className="App">
      <h1>Wordle (Lingo)</h1>
      {solution && console.log(solution)}
      <Wordle solution={solution} />
    </div>
  );
}

export default App;
