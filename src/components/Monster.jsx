import { useState } from "react";
import { useEffect } from "react";

export default function Monster({ increaseCounter, resetCounter }) {
    const [monsters, setMonsters] = useState([]);
    const [randomMonsters, setRandomMonsters] = useState([]);
    
    useEffect(() => {
        const fetchMonster = async () => { 
            const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php`);
            const monsterData = await response.json();
            const monsterArray = monsterData.data
            setMonsters(monsterArray)
            await getRandomMonsters(monsterArray)
        } 
    fetchMonster();
    }, [])

    const getRandomMonsters = async (monsters) => {
        const newMonsters = [];
        while (newMonsters.length < 10) {
            const randomMonster = 
                await monsters[(Math.floor(Math.random() * (monsters.length)))]
            const monsterName = randomMonster.name;
            const monsterImg = randomMonster.card_images[0].image_url_cropped;
            newMonsters.push({
                name: monsterName,
                img: monsterImg
            })
        }
        setRandomMonsters(newMonsters)   
    }

    const shuffleMonsters = (monsters) => {
        return monsters.sort(() => Math.random() - 0.5)
    }
    const shuffledMonsters = shuffleMonsters(randomMonsters)
    
    const [selectedMonsters, setSelectedMonsters] = useState([]);

    const trackSelections = index => () => {
        let selectedMonster = shuffledMonsters[index];
        setSelectedMonsters([...selectedMonsters, selectedMonster])
        const checkedMonster = selectedMonsters.find((monster) => 
            monster.name === selectedMonster.name)
        if (checkedMonster) {
            alert('GAME OVER')
            resetCounter();
            setSelectedMonsters([]);
            getRandomMonsters(monsters);
        } else {
            increaseCounter();
        }
    }

    return (
        <div className="monsters">
                {randomMonsters.map((monster, index) => {
                    return (
                        <div 
                            key={index} 
                            className="monster" 
                            onClick={trackSelections(index)}
                        >
                            <div className="name-container">
                                <h3 className="monster-names">{monster.name}</h3>
                            </div>
                            <div className="img-container">
                                <img src={monster.img} alt={monster.name}></img>
                            </div>
                        </div>
                    )
                })}
            </div>
    )
}