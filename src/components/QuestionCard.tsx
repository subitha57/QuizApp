import React from 'react'

type Props={
    question:string;
    answer:string[];
    callback:any;
    userAnswer:any;
    questionNr:number;
    totalQuestions:number;
}

export const QuestionCard:React.FC<Props> = ({question,answer,callback,userAnswer,questionNr,totalQuestions}) => {
  return (
    <div>
        <p className='number'>
            Question:{questionNr}/{totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html:question}}/>
        <div>
            {answer.map(answer=>(
                <div>
                    <button disabled={userAnswer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html:answer}}/>

                    </button>
                    </div>
            ))}
        </div>

    </div>
  )
}
