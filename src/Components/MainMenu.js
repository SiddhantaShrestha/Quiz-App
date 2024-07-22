import { React, useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import "../App.css";

export const MainMenu = () => {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="menu">
      {/* Changing the state to quiz using onClick rendering the InGame component */}
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
};
