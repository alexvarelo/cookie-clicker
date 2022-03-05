import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import UserTable from './components/UserTable';
import Game from './Game'

/* interface Player {
    name: String;
    points: number;
    autoclickers:number;
} */

export default function Home() {

    const [Players, setPlayers] = useState([]);
    const [Player, setPlayer] = useState('');
    const [CurrentPlayer, setCurrentPlayer] = useState();
    const [showGame, setShowGame] = useState(false);

    //localStorage.clear();
    //console.log(Object.keys(localStorage));

    useEffect(() => {
        var values = [];
        var keys = Object.keys(localStorage);
        console.log(keys);
        var i = keys.length;
        while (i--) {
            values.push(JSON.parse(localStorage.getItem(keys[i])));
        }
        console.log(values);
        setPlayers(values);
    }, [showGame])


    const create_player = e => {
        e.preventDefault();
        let current_player = Players.find(player => player.name === Player);
        if (current_player === undefined) {
            current_player = {
                name: Player,
                points: 0,
                autoclickers: 0,
                costAC: 10
            }
            setPlayers(Players.concat(current_player));
        }
        setCurrentPlayer(current_player);
        localStorage.setItem(current_player.name, JSON.stringify(current_player));
        setPlayer('');
        setShowGame(true);
    }


    return (
        <div>
            {!showGame &&
                <div>
                    <h2>Bienvenido a Cookie Clicker</h2>
                    <h4>Crea un jugador</h4>
                    <form onSubmit={create_player}>
                        <input
                            type="text"
                            placeholder="Jugador *"
                            value={Player}
                            name="text"
                            onChange={(e) => { setPlayer(e.target.value) }}>
                        </input>
                        <button>Comenzar</button>
                    </form>
                    <br></br>
                    <div>
                        <UserTable CurrentPlayers={Players} />
                    </div>
                </div>
            }
            <div>
                {showGame && <Game CurrentPlayer={CurrentPlayer} showGame={setShowGame} Players={Players} updatePlayers={setPlayers}></Game>}
            </div>
        </div>
    )
}
