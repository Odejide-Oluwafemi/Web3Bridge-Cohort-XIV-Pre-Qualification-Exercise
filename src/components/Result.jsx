export default function Result({ questionsJson, userAnswers }) {
  const correctAnswers = questionsJson.filter((question, index) => question.answer === userAnswers[index]).length;
  
  return (
    <div>
      <h2>Results</h2>
      <p>You answered {correctAnswers} out of {questionsJson.length} questions correctly.</p>
    </div>
  );
}
