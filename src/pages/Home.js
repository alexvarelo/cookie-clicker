import React, { useEffect, useState } from 'react'
import UserTable from './components/UserTable';
import Galleta from '../assets/galleta.png'
import FormPlayer from './components/FormPlayer';



export default function Home(props) {


    const [Player, setPlayer] = useState(''); //Hook que gestiona el input para crear nuevos jugadores

    // Cada vez que se actualice showgame se actualiza la lista de jugadores en local, extrayendo los datos del localstorage
    useEffect(() => {
        var values = [];
        Object.keys(localStorage).map(key => values.push(JSON.parse(localStorage.getItem(key))));
        props.setPlayers(values);
    }, [props.showGame])

    /*
    Funcion que dado el nombre de un jugador, carga su partida buscando en el hook de Players, y si el usuario 
    es nuevo crea una partida nueva con el nombre indicado. Si el campo es vacio alerta al jugador
    */
    const create_player = e => {
        e.preventDefault();
        if (Player === '') {
            alert("Introduce un usuario");
            return;
        }
        let current_player = props.Players.find(player => player.name === Player);
        if (current_player === undefined) {
            current_player = {
                name: Player,
                points: 0,
                autoclickers: 0,
                costAC: 50
            }
            props.setPlayers(props.Players.concat(current_player));
            localStorage.setItem(current_player.name, JSON.stringify(current_player));
        }
        props.setCurrentPlayer(current_player);
        setPlayer('');
        props.setShowGame(true);
    }


    return (
        <div className="Home">
            <img className="Home__galleta" src={Galleta}></img>
            <h4 className="Home__text">Crea un jugador</h4>
            <br />
            <FormPlayer create_player={create_player} setPlayer={setPlayer} />
            <div style={{ marginTop: "30px" }}>
                <UserTable CurrentPlayers={props.Players} transformNum = {props.transformNum} />
            </div>
        </div>
    )
}
