import { useEffect, useState } from "react";

export default function Result({ questionsJson, userAnswers, resetQuiz }) {
  const correctAnswers = questionsJson.filter(
    (question, index) => question.answer === userAnswers[index]
  ).length;

   const [lastScore, setLastScore] = useState(correctAnswers);
   const storageVariable = "lastScore";

  useEffect(() => {
    const storedScore = JSON.parse(localStorage.getItem(storageVariable)) || [];
    setLastScore(storedScore);
  }, []);

  useEffect(() => {
    setLastScore(correctAnswers);
    localStorage.setItem(storageVariable, JSON.stringify(lastScore));
  }, [correctAnswers]);

  return (
    <div className="result-container">
      <h2>Results</h2>
      <p>
        You answered {correctAnswers} out of {questionsJson.length} questions
        correctly.
      </p>
      <button onClick={resetQuiz}>Retry</button>

      <Leaderboard lastScore={lastScore}/>
    </div>
  );
}

function Leaderboard({ lastScore }) {
  return (
    <div className="leaderboard">
      <h3>Score History</h3>
      {lastScore === null ? (
        <p>No scores yet. Complete your first quiz!</p>
      ) : (
        <p>Last Score: <strong>{lastScore}</strong></p>
      )}
    </div>
  );
}