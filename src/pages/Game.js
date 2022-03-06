import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import GameBoard from './components/GameBoard';


export default function Game(props) {

    const costBaseAC = 50;
    const [count, setCount] = useState(props.CurrentPlayer.points); // Numero de puntos que tiene el usuario 
    const [autoclickers, setAutoclickers] = useState(props.CurrentPlayer.autoclickers); //NUmero de autoclickers que tiene el usuario
    const [costAC, setCostAC] = useState(props.CurrentPlayer.costAC); //Precio de sus autoclickers
    const [loadACButton, setLoadACButton] = useState(false); // Booleano que se activa cuando el usuario puede comprar autoclickers, para que aparezca el boton
    const [powerClick, setPowerClick] = useState(props.CurrentPlayer.powerClick); // Cada power comprado duplica la cantidad de cookies por cada vez que se pulsa
    const [costPower, setCostPower] = useState(props.CurrentPlayer.costPower); // Coste de cada power click
    /*
    Hook que se actualiza cada vez que hay un cambio en count.
    Se comprueba si puede comprar un autoclick, para poder mostrar el boton de compra, y si tiene autoclickers, se actualiza el
    contador cada X milisegundos, concretamente se le suma el número de autoclickers.
    */
    useEffect(() => {
        if (count >= costAC) {
            setLoadACButton(true);
        }
        if (autoclickers > 0) {
            const intervalId = setInterval(() => {
                setCount((prevCounter) => prevCounter + autoclickers);
            }, 100);
            return () => clearInterval(intervalId);
        }
    }, [count]);

    // Funcion que compra autoclickers, actualiza el contador, y actualiza el coste del proximo autoclicker
    const buyAutoClickers = () => {
        setLoadACButton(false);
        setAutoclickers(autoclickers + 1);
        setCount(count - costAC);
        setCostAC(costBaseAC + (costBaseAC * (autoclickers + 1)));
    }

    // Si el usuario puede permitirse comprar el boost, se aumentara su incremento de cookies cada vez que pulse y se descuenta de su cuenta
    const boost = () => {
        if (count >= costPower) {
            setPowerClick(powerClick + 1);
            setCount(count - costPower);
            setCostPower(costPower*2);
        }
    }

    /*
    Funcion que se activa cuando el usuario vuelve a la Home. Se actualiza la informacion del usuario en el localstorage,
    y al cargar la home se actualiza en el hook de players.
 
    Nota: Esto se puede gestionar todo a traves del localStorage, sin tener que crear un hook donde se almacenen los jugadores,
    pero para poder tratar con el array de objetos de forma mas eficiente y sencillo a nivel de codigo, he decidido declarar
    el hook de Players.
    */
    const updateData = () => {
        props.showGame(false);
        localStorage.setItem(props.CurrentPlayer.name, JSON.stringify({
            name: props.CurrentPlayer.name,
            points: count,
            autoclickers: autoclickers,
            costAC: costAC,
            powerClick: powerClick
        }));
        if (count > props.Players.sort((a, b) => a.points < b.points ? 1 : -1)[0].points)
            alert("Jugador " + props.CurrentPlayer.name + ", ERES EL TOP 1 ACTUAL 🚀 CON " + count + " PUNTOS");
    }


    return (
        <div>
            <Button className="btn btn-dark HomeButton" onClick={updateData}>Home</Button>
            <h5 className='Game__tutorial'>¡Pulsa la galleta!</h5>
            <GameBoard 
                CurrentPlayer= {props.CurrentPlayer}
                autoclickers = {autoclickers}
                costAC = {costAC}
                boost = {boost}
                loadACButton = {loadACButton}
                buyAutoClickers = {buyAutoClickers}
                count = {count}
                setCount = {setCount}
                powerClick = {powerClick}
                transformNum = {props.transformNum}
                costPower = {costPower}
            />
        </div>
    )
}
