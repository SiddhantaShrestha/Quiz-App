import React, { useState, useContext, useEffect } from "react";
import { Questions } from "../Helpers/Questions";
import { QuizContext } from "../Helpers/Context";
import EndingScreen from "./EndingScreen";
import { shuffleArray } from "../Helpers/helpers";

const InGame = () => {
  // State for the shuffled questions
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  //State to get the marks at the end of the quiz
  const { score, setScore, setGameState } = useContext(QuizContext);

  //Creating a state for the current question w.r.t to the index of the array of questions in the Questions.js file
  const [currentQuestion, setCurrentQuestion] = useState(0);

  //Creating a state for selecting the chosen option
  const [chosenOption, setChosenOption] = useState("");

  // Shuffle the questions when the component mounts
  useEffect(() => {
    setShuffledQuestions(shuffleArray(Questions));
  }, []);

  const nextQuestion = () => {
    //Adding 1 mark to the score if the answer matches the one with the database
    if (shuffledQuestions[currentQuestion].answer === chosenOption) {
      setScore(score + 1);
    }
    // alert(score);
    //Changing to next question by incrementing the value of the array by 1
    setCurrentQuestion(currentQuestion + 1);
  };

  //   in case of last question, change the game state to endingScreen
  const finishQuiz = () => {
    if (shuffledQuestions[currentQuestion].answer === chosenOption) {
      setScore(score + 1);
    }
    setGameState("endingScreen");
  };
  return (
    <div className="quiz">
      {/* Make sure to check if shuffledQuestions is not empty */}
      {shuffledQuestions.length > 0 && (
        <>
          <h1>{shuffledQuestions[currentQuestion].prompt}</h1>
          <div className="options">
            <button onClick={() => setChosenOption("A")}>
              {shuffledQuestions[currentQuestion].optionA}
            </button>
            <button onClick={() => setChosenOption("B")}>
              {shuffledQuestions[currentQuestion].optionB}
            </button>
            <button onClick={() => setChosenOption("C")}>
              {shuffledQuestions[currentQuestion].optionC}
            </button>
            <button onClick={() => setChosenOption("D")}>
              {shuffledQuestions[currentQuestion].optionD}
            </button>
          </div>

          {currentQuestion === shuffledQuestions.length - 1 ? (
            <button onClick={finishQuiz}>Finish Quiz</button>
          ) : (
            <button onClick={nextQuestion}>Next Question</button>
          )}
        </>
      )}
    </div>
  );
};

export default InGame;
