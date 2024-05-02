export default function Scoreboard({ currentScore, bestScore }) { 
    return (
        <div className="scoreboard">
            <h3>Current Score: {currentScore}</h3>
            <h3>Best Score: {bestScore}</h3>
        </div>
    )
}