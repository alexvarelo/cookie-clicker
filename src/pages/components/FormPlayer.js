import React from 'react'
import { Button } from 'react-bootstrap';

/* 
Funcion que devuelve renderizado el componente del formulario de creacion del jugador. Este componente actualiza
el hook Player de ../Home cada vez que se escribe en el input. Cuando se hace un submit mediante la tecla enter o 
el boton, se invoca a la funcion create_player de Home, la cual crea o carga la partida de un jugador. 
*/
export default function FormPlayer(props) {
    return (
        <form onSubmit={props.create_player}>
            <input
                className="form-control"
                type="text"
                placeholder="Jugador *"
                value={props.Player}
                name="text"
                onChange={(e) => { props.setPlayer(e.target.value) }}>
            </input>
            <br />
            <Button className="btn btn-light" style={{ fontSize: "20px" }} onClick={props.create_player}>Comenzar</Button>
        </form>
    )
}
