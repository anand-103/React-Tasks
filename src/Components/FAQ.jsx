import React, { useState } from 'react'
import './FAQ.css'

const FaqItem = ({question, answer}) => {
    const [show, setShow] = useState(false);

    const toggleItem = () => {
        setShow(!show)
    }
    return (
        <div className={`faq-item ${show ? "active" : ""}`}>
            <div className="faq-item-header" onClick={toggleItem}>
                {question}
            </div>
            <div className="faq-item-body">
                <div className="faq-item-body-content">
                   {answer}
                </div>
            </div>
        </div>
    )
}

const FAQ = () => {
    return (
        <div className='faq-accordion'>
            <h1>FAQs</h1>
            {data.map((item) => (
                <FaqItem key={item.id} question={item.question} answer={item.answer} />
            ))}
        </div>
    )
}

const data = [
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces, maintained by Facebook. It allows developers to create reusable UI components and manage the state of their applications efficiently."
    },
    {
      id: 2,
      question: "What are components in React?",
      answer: "Components are the building blocks of a React application. They are reusable pieces of code that represent a part of the user interface and can be either functional or class-based."
    },
    {
      id: 3,
      question: "What is JSX?",
      answer: "JSX is a syntax extension for JavaScript that looks similar to HTML. It allows developers to write UI elements within JavaScript code, making it easier to visualize the UI structure."
    }
    // ,
    // {
    //   id: 4,
    //   question: "How does state work in React?",
    //   answer: "State is an object that represents parts of a component that can change. React re-renders components whenever the state updates, allowing the UI to stay in sync with the data."
    // },
    // {
    //   id: 5,
    //   question: "What is the purpose of props in React?",
    //   answer: "Props, short for properties, are used to pass data from parent components to child components in React. They are read-only, allowing for a unidirectional data flow within the application."
    // },
    // {
    //   id: 6,
    //   question: "What is the Virtual DOM?",
    //   answer: "The Virtual DOM is a lightweight copy of the actual DOM in memory. React uses it to optimize UI updates by making changes in the Virtual DOM first and then updating the real DOM only where necessary."
    // },
    // {
    //   id: 7,
    //   question: "What is React Router?",
    //   answer: "React Router is a library for handling routing in React applications, allowing developers to manage multiple views or pages without reloading the page. It enables navigation between different components or views in a single-page application."
    // },
    // {
    //   id: 8,
    //   question: "What are React hooks?",
    //   answer: "Hooks are functions that let developers use state and other React features in functional components. Common hooks include useState, useEffect, and useContext."
    // },
    // {
    //   id: 9,
    //   question: "What is useEffect used for?",
    //   answer: "The useEffect hook is used for performing side effects in functional components, like data fetching, subscriptions, or manually changing the DOM. It runs after the component renders and can also be set to run only when certain values change."
    // },
    // {
    //   id: 10,
    //   question: "How is React different from other JavaScript frameworks?",
    //   answer: "React is focused solely on the view layer, which makes it different from full-featured frameworks like Angular or Vue. It provides flexibility in choosing libraries for handling state management, routing, and other application needs."
    // }
  ];
  

export default FAQ
