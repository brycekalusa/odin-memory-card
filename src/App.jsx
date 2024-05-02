import './App.css';
import { useState } from 'react';
import GameBoard from './components/Gameboard';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

    const increaseCounter = () => {
      setCurrentScore(currentScore + 1);
    }

    const resetCounter = () => {
        setCurrentScore(0);
    }

    currentScore > bestScore ? setBestScore(bestScore + 1) : null;

  return (
    <>
      <h1>Yu-Gi-Oh! Memory Game</h1>
      <p>Keep clicking new monsters and raise your score. Can you beat your best score?</p>
      <GameBoard
        currentScore={currentScore}
        bestScore={bestScore}
        increaseCounter={increaseCounter}
        resetCounter={resetCounter}
      />
    </>
  )
}

export default App
