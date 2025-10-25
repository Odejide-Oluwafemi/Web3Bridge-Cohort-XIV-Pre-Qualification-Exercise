export default function QuizCard ({ question, onSelectOption }) {
  return (
    <div className="quiz-card">
      <h2>{question.question}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <button
              onClick={() => onSelectOption(option)}
              className="option-button"
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};