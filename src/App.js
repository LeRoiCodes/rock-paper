import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [userChoice, setUserChoice] = useState('rock')
  const [aiChoice, setAiChoice] = useState('rock')
  const [userPoints, setUserPoints] = useState(0)
  const [aiPoints, setAiPoints] = useState(0)
  const [turnResult, setTurnResult] = useState(null)
  const [result, setResult] = useState('lets see who wins')
  const [gameOver, setGameOver] = useState(false)
  const choices = ['rock', 'paper', 'scissors']

  const handleOnclick = (choice) => {
    setUserChoice(choice)
    generateAiChoice()
  }

  const generateAiChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setAiChoice(randomChoice)
  }

  const reset = () => {
    window.location.reload()
  }

  useEffect(() => {
    const comboMoves = userChoice + aiChoice
    if(userPoints <=4 && aiPoints <=4) {
      if(comboMoves === 'rockscissors' || comboMoves === 'paperrock' || comboMoves ==='scissorspaper') {
        const updateUserPoints = userPoints + 1
        setUserPoints(updateUserPoints)
        setTurnResult('User got the the point')
        if(updateUserPoints === 5) {
          setGameOver(true)
          setResult('User wins')
        }
      }
      if(comboMoves === 'paperscissors' || comboMoves === 'scissorsrock' || comboMoves ==='rockpaper') {
        const updateAiPoints = aiPoints + 1
        setAiPoints(updateAiPoints)
        setTurnResult('Computer got the point')
        if (updateAiPoints === 5) {
          setGameOver(true)
          setResult('Computer wins')
        }
      }
      if(comboMoves === 'rockrock' || comboMoves === 'paperpaper' || comboMoves ==='scissorsscissors'){
        setTurnResult('No one got a point')
      }
    }
  }, [userChoice, aiChoice])

  return (
    <div className="App">
      <h1 className='heading'>Rock Paper Scissors</h1>
      <div className='score'>
        <h1>User Points: {userPoints}</h1>
        <h1>computer Points: {aiPoints}</h1>
      </div>
      <div className='choices'>
        <div className='choice-user'>
          <img className='user-hand' src= {'../images/'+userChoice+'.png'} />
        </div>
        <div className='choice-ai'>
          <img className='ai-hand' src={'../images/'+aiChoice+'.png'} />
        </div>
      </div>
      <div children='button-div'>
        {choices.map((choice, index) => 
          <button className='button btn' key={index} onClick={() => handleOnclick(choice)} disabled={gameOver}>
            {choice}
          </button>
        )}
      </div>
      <div className='result'>
        <h1>Turn Result: {turnResult}</h1>
        <h1>Final Result: {result}</h1>
      </div>
      <div className="button-div">
        {gameOver && <button className='button' onClick={() => reset()}>Restart Game?</button>}
      </div>
    </div>
  );
}

export default App;
