import React from 'react'
import TotalCorrect from './TotalCorrect';
import TotalIncorrect from './TotalIncorrect';
function ScoreArea(props) {
    return (
        <div className="scoreWrapper">
            <h1>Score Area</h1>
            <TotalCorrect correct={props.correct}/>
            <TotalIncorrect incorrect={props.incorrect}/>
        </div>
    )
}

export default ScoreArea
