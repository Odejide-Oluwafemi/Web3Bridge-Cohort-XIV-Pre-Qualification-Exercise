export default function QuizCard ({ question, onSelectOption }) {
  return (
    <div className="quiz-card">
      <div className="card-header">
        <h2>{question.question}</h2>
      </div>
      
      <div className="card-content">
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
    </div>
  );
};