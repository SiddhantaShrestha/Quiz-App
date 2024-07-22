import { useState } from "react";
import "./App.css";
import { MainMenu } from "./Components/MainMenu";
import InGame from "./Components/InGame";
import EndingScreen from "./Components/EndingScreen";
import { QuizContext } from "./Helpers/Context";

function App() {
  //Creating 3 diff states for different stages of the game - game, in game, ending
  const [gameState, setGameState] = useState("menu");

  //Creating a state for the score for the final marking
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <h1>Quiz App</h1>

      {/* Providing a context for the states */}
      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        {/* Checking the state of the game and rendering appropriate content */}
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <InGame />}
        {gameState === "endingScreen" && <EndingScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
