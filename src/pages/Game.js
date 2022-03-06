import React, { useEffect, useState } from 'react'
import Galleta from '../assets/galleta.png'
import { Button } from 'react-bootstrap';


export default function Game(props) {
    const costBaseAC = 50; 
    const [count, setCount] = useState(props.CurrentPlayer.points); // Numero de puntos que tiene el usuario 
    const [autoclickers, setAutoclickers] = useState(props.CurrentPlayer.autoclickers); //NUmero de autoclickers que tiene el usuario
    const [costAC, setCostAC] = useState(props.CurrentPlayer.costAC); //Precio de sus autoclickers
    const [loadACButton, setLoadACButton] = useState(false); // Booleano que se activa cuando el usuario puede comprar autoclickers, para que aparezca el boton


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
            }, 1000);
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
            costAC: costAC
        }));
    }


    return (
        <div>
            <Button className="btn btn-dark HomeButton" onClick={updateData}>Home</Button>
            <div className='Game'>
                <h4 className="Game__title">Jugador {props.CurrentPlayer.name}</h4>
                <br />
                <h5>AutoClickers: {autoclickers}</h5>
                <h5>Coste AutoClicker: {props.transformNum(costAC,2)}</h5>
                <span className="Game__cookies">{props.transformNum(count,2)}</span>
                <img className="Game__galleta" onClick={() => setCount(count + 1)} src={Galleta}></img>
                {loadACButton &&
                    <Button className="btn btn-success Game__ACbutton" onClick={buyAutoClickers}>Buy AutoClicker for {costAC} cookies</Button>
                }
            </div>
        </div>
    )
}
