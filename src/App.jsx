import { useState, useEffect } from 'react';

import Header from "./components/Header";
import QuizCard from "./components/QuizCard";
import QuestionsJson from "./data/questions.json";
import Result from "./components/Result";

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizOver, setQuizOver] = useState(false);

  function optionSelected(optionSelected) {
    setUserAnswers([...userAnswers, optionSelected]);

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < QuestionsJson.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setQuizOver(true);
    }
  }

  function resetQuiz() {
    setCurrentQuestionIndex(0);
    setQuizOver(false);
  }

  return <>
    <Header/>

    <main>
      {quizOver ? <Result questionsJson={QuestionsJson} userAnswers={userAnswers} resetQuiz={resetQuiz}/> : <QuizCard question={QuestionsJson[currentQuestionIndex]} onSelectOption={optionSelected}/>}
    </main>
  </>
}
