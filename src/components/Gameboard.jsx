import Scoreboard from "./Scoreboard";
import Monster from "./Monster";

export default function GameBoard({ currentScore, bestScore, increaseCounter, resetCounter }) {
    return (
        <section className="gameboard">
            <Scoreboard
                currentScore={currentScore}
                bestScore={bestScore}
            />
            <Monster
                increaseCounter={increaseCounter}
                resetCounter={resetCounter}
            />
        </section> 
    )
}