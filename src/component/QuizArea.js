import React from 'react'
import Question from './Question';
import AnswerList from './AnswerList';
import UserGreeting from './UserGreeting'
function QuizArea(props) {
  if (props.correct === 2){
      return  <UserGreeting msg={"You Won"}/>
  }
  else if (props.incorrect === 2){
    return  <UserGreeting msg={"You Lose"}/>
}
    return (
        <div className="quiz">
            <h1>Quiz area</h1>
            <Question dataSet={props.dataSet}/>
          <AnswerList handleClick={props.handleClick} dataSet={props.dataSet}/> 
        </div>
    )
}

export default QuizArea
