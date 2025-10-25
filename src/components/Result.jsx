export default function Result({ questionsJson, userAnswers, resetQuiz }) {
  const correctAnswers = questionsJson.filter((question, index) => question.answer === userAnswers[index]).length;
  
  return (
    <div className="result-container">
      <h2>Results</h2>
      <p>You answered {correctAnswers} out of {questionsJson.length} questions correctly.</p>
      <button onClick={resetQuiz}>Retry</button>
    </div>
  );
}
