import React, { useEffect, useState } from 'react'
import './Quiz.css';

const Quiz = () => {

    const quizData = [
        {
          id: 1,
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris",
        },
        {
          id: 2,
          question: "Which planet is known as the Red Planet?",
          options: ["Earth", "Mars", "Jupiter", "Saturn"],
          answer: "Mars",
        },
        {
          id: 3,
          question: "What is the largest mammal in the world?",
          options: ["Elephant", "Blue Whale", "Great White Shark", "Giraffe"],
          answer: "Blue Whale",
        },
        {
          id: 4,
          question: "What is the chemical symbol for water?",
          options: ["H2O", "O2", "CO2", "NaCl"],
          answer: "H2O",
        },
        {
          id: 5,
          question: "Who wrote 'Romeo and Juliet'?",
          options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"],
          answer: "William Shakespeare",
        },
      ];

      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [score, setScore] = useState(0);
      const [showScore, setShowScore] = useState(false);
      const [timer, setTimer] = useState(10);

      useEffect(() => {
        let interval;
        if(timer > 0 && !showScore){
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        }else{
            clearInterval(interval);
            setShowScore(true);
        }
        return ()=>clearInterval(interval);
      },[timer,showScore]);

      const handleAnswerClick = (selctedOption) =>{
        if (selctedOption === quizData[currentQuestion].answer){
            setScore((prevScore)=>prevScore + 1)
        }
        if (currentQuestion < quizData.length - 1){
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
            setTimer(10);
        }else{
            setShowScore(true);
        }
      }

      const handleRestartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setTimer(10);
      }
  return (
    <>
    <div className="quiz-app">
        {showScore ? (
            <div className="score-section">
               <h2>Your score : {score}/{quizData.length}</h2>
               <button onClick={handleRestartQuiz}>Restart</button>
        </div>
        ) : 
        (
        <div className="question-section">
            <h2>Queastion {currentQuestion + 1}</h2>
            <p>{quizData[currentQuestion].question}</p>
            <div className="options">
                {quizData[currentQuestion].options.map((option, index) => (
                    <button key={index} onClick={() => handleAnswerClick(option)}>{option}</button>
                ))}
            </div>
            <div className="timer">Time left : <span>{timer}</span></div>
        </div>
    )}
    </div>
    </>
  )
}

export default Quiz
