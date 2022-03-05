import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


// pasarle directamente el index del player con el que esta jugando para que se actualice directamente sobre eso
export default function Game(props) {
    const costBaseAC = 10;
    const [count, setCount] = useState(props.CurrentPlayer.points);
    const [autoclickers, setAutoclickers] = useState(props.CurrentPlayer.autoclickers);
    const [costAC, setCostAC] = useState(props.CurrentPlayer.costAC);
    const [loadACButton, setLoadACButton] = useState(false);


    useEffect(() => {
        if (count >= costAC) {
            setLoadACButton(true);
        }
        if (autoclickers > 0) {
            const intervalId = setInterval(() => {
                setCount((prevCounter) => prevCounter + autoclickers);
            }, 1000);
            return () => clearInterval(intervalId);
        }
    }, [count]);

    const buyAutoClickers = () => {
        setLoadACButton(false);
        setAutoclickers(autoclickers + 1);
        setCount(count - costAC);
        setCostAC(costBaseAC + costBaseAC * (autoclickers + 1));
    }

    const updateData = () => {
        props.showGame(false);
        localStorage.setItem(props.CurrentPlayer.name, JSON.stringify({
            name: props.CurrentPlayer.name,
            points: count,
            autoclickers: autoclickers,
            costAC: costAC
        }));
        /* props.updatePlayers(props.Players.map(player => {
            if (player.name === props.CurrentPlayer.name) {
                return {
                    name: player.name,
                    points: count,
                    autoclickers: autoclickers,
                    costAC: costAC
                }
            }
            return player;
        })); */
    }

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>Jugador {props.CurrentPlayer.name}</h4>
            <button onClick={updateData}>Home</button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>Cookie</button>
            {loadACButton &&
                <button onClick={buyAutoClickers}>Buy AutoClicker for {costAC} cookies</button>
            }
        </div>
    )
}
