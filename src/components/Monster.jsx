import { useState } from "react";
import { useEffect } from "react";

export default function Monster({ increaseCounter, resetCounter }) {
    const [monsters, setMonsters] = useState([]);
    
    useEffect(() => {
        const fetchMonster = async () => { 
        const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php`);
        const monsterData = await response.json();
        const monsterArray = monsterData.data
        setMonsters(monsterArray)
    } 
    fetchMonster();
    }, [])

    const getRandomMonsters = async (monsters) => {
        const newMonsters = [];
        while (newMonsters.length < 10) {
            const randomMonster = await monsters[(Math.floor(Math.random() * (monsters.length)))]
            const monsterName = randomMonster.name;
            const monsterImg = randomMonster.card_images[0].image_url_cropped;
            newMonsters.push({
                name: monsterName,
                img: monsterImg
            })
        }
        setMonsters(newMonsters)   
    }
    const randomMonsters = getRandomMonsters(monsters)

    // const shuffleMonsters = (monsters) => {
    //     return monsters.sort(() => Math.random() - 0.5)
    // }
    // const shuffledMonsters = shuffleMonsters(monsters)
    

    // const [selectedMonsters, setSelectedMonsters] = useState([]);

    // const trackSelections = (index) => {
    //     let selectedMonster = shuffledMonsters[index];
    //     setSelectedMonsters([...selectedMonsters, selectedMonster])
    //     const checkedMonster = selectedMonsters.find((monster) => 
    //         monster.name === selectedMonster.name)
    //     if (checkedMonster) {
    //         resetCounter();
    //         setSelectedMonsters([]);
    //     } else {
    //         increaseCounter();
    //     }
    // }

    // const click = index => () => {
    //     trackSelections(index)
    // }

    return (
        <div className="monsters">
                {monsters.map((monster, index) => {
                    return (
                        <div 
                            key={index} 
                            className="monster" 
                            // onClick={click(index)}
                        >
                            <div className="name-container">
                                <h3>{monster.name}</h3>
                            </div>
                            <div className="img-container">
                                <img src={monster.img}></img>
                            </div>
                        </div>
                    )
                })}
            </div>
    )
}