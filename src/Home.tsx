import React, { useState } from 'react'
import './Home.css';
import { QuestionCard } from './components/QuestionCard';
import { fetchQuizQuestions } from './api';
import {QuestionState,Difficulty} from './api'

type AnswerObject ={
    question:string;
    answer:string;
    correct:boolean;
    correctAnswer:string;
}

const TOTAL_QUESTIONS = 10;

export const Home = () => {
    const [loading,setLoading]=useState(false)
    const [questions,setQuestions]= useState<QuestionState[]>([]);
    const [number, setNumber]=useState(0);
    const [userAnswers,setUserAnswers]=useState<AnswerObject[]>([]);
    const [score, setScore]=useState(0);
    const [gameOver, setGameOver]=useState(true)

    console.log(fetchQuizQuestions(TOTAL_QUESTIONS,Difficulty.EASY))

    const startTrivia = async()=>{

    }
    const checkAnswer =(e:React.MouseEvent<HTMLButtonElement>)=>{

    }
    const nextQuestion = ()=>{

    }
  return (
    <div className="home">
        <h1>React Quiz</h1>
        <button className='start' onClick={startTrivia}>
            Start
        </button>
        <p>Loading Question...</p>
        <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answer={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number]:undefined}
        callback={checkAnswer}
        />
        <button className='next' onClick={nextQuestion}>
            Next Question
        </button>
     </div>
  )
}
