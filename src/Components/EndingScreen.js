import { React, useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import { Questions } from "../Helpers/Questions";
import "../App.css";

const EndingScreen = () => {
  //Using the contextAPI to access the states
  const { score, setScore, setGameState } = useContext(QuizContext);

  //setting the score to 0 and state to menu to restart the quiz
  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className="endScreen">
      <h1>Quiz Ended</h1>
      <h3>
        {/* displaying the score  */}
        {score}/ {Questions.length}
      </h3>
      <button onClick={restartQuiz}>Restart quiz</button>
    </div>
  );
};

export default EndingScreen;
