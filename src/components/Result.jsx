import { useEffect, useState } from "react";

export default function Result({ questionsJson, userAnswers, resetQuiz }) {
  const LAST_SCORE_STORAGE_VARIABLE = "lastScore";
  const HIGH_SCORE_STORAGE_VARIABLE = "highScore";
  
  const correctAnswers = questionsJson.filter(
    (question, index) => question.answer === userAnswers[index]
  ).length;

   const [lastScore, setLastScore] = useState(correctAnswers);
   const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const storedScore = JSON.parse(localStorage.getItem(LAST_SCORE_STORAGE_VARIABLE)) || 0;
    const storedHighScore = JSON.parse(localStorage.getItem(HIGH_SCORE_STORAGE_VARIABLE)) || 0;
    
    setLastScore(storedScore);
    setHighScore(storedHighScore);
  }, []);

  useEffect(() => {
    if (correctAnswers > highScore)
      {
        setHighScore(correctAnswers);
        localStorage.setItem(HIGH_SCORE_STORAGE_VARIABLE, JSON.stringify(correctAnswers.toString()));
    }
  }, [correctAnswers]);

  return (
    <div className="result-container">
      <h2>Results</h2>
      <p>
        You answered {correctAnswers} out of {questionsJson.length} questions
        correctly.
      </p>
      <button onClick={() => {
        setLastScore(correctAnswers);
    localStorage.setItem(LAST_SCORE_STORAGE_VARIABLE, JSON.stringify(correctAnswers.toString()));
    

        resetQuiz();
      }}>Retry</button>

      <div className="last-score">
      {lastScore === null ? (
        <p>No scores yet. Complete your first quiz!</p>
      ) : (
        <>
       {lastScore > 0 && <p>Last Score: <strong>{lastScore}</strong></p>}
        <p>High Score: <strong>{highScore}</strong></p>
        </>
      )}
    </div>
    </div>
  );
}