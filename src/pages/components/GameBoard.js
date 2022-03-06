import React from 'react'
import Galleta from '../../assets/galleta.png'
import { Button } from 'react-bootstrap';


export default function GameBoard(props) {
    return (
        <div className='Game'>
            <h4 className="Game__title">Jugador {props.CurrentPlayer.name}</h4>
            <br />
            <h5>AutoClickers: {props.autoclickers}</h5>
            <h5>Coste AutoClicker: {props.transformNum(props.costAC, 2)}</h5>
            <h5 className="Game__boost" onClick={props.boost}>🚀 Boostea tu contador: {props.costPower}🍪</h5>
            <span className="Game__cookies">{props.transformNum(props.count, 2)}</span>
            <img alt="cookie" className="Game__galleta" onClick={() => props.setCount(props.count + props.powerClick)} src={Galleta}></img>
            {props.loadACButton &&
                <Button className="btn btn-success Game__ACbutton" onClick={props.buyAutoClickers}>Buy AutoClicker for {props.costAC} 🍪</Button>
            }
        </div>
    )
}
