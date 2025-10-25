import { useEffect, useState } from "react";

export default function QuizCard ({ question, onSelectOption }) {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  function showCheck() {
  const allCheckmarks = document.querySelectorAll(".checkmark");
    allCheckmarks.forEach((mark) => {
      mark.style.display = "flex";
  });
  }

  // alert(selectedAnswer);
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
                onClick={() => {
                  setSelectedAnswer(option);
                }}
                className={"option-button" + " " + (selectedAnswer === option ? "selected" : "")}
                disabled={selectedAnswer !== ""}
              >
                {option}
              </button>

              {
                selectedAnswer !== "" &&  
                <div className="checkmark">
                {option === question.answer ? "✅" : "❌"}
              </div>
              }
            </li>
          ))}
        </ul>

        <button className="next-btn" onClick={() => {
          if (selectedAnswer === "") {
            alert("Please Select a Valid Answer");
            return;
          }

          // alert(selectedAnswer);
          onSelectOption(selectedAnswer);
        setSelectedAnswer("");
        
      }
        }>Next</button>
      </div>
    </div>
  );
};