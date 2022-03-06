import React from 'react'


/* 
Dado el Hook de Players, devuelve renderizada una tabla de los usuarios que hay ordenada de mayor a menor segun los 
puntos de un usuario 
*/
export default function UserTable(props) {

    return props.CurrentPlayers.length !== 0 ? (
        <div className="Home__table">
            <h4 className="Home__ranking">Ranking</h4>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th className="Home__text">Jugador</th>
                        <th className="Home__text">Cookies</th>
                        <th className="Home__text">AutoClicks</th>
                    </tr>
                </thead>
                <tbody>
                    {props.CurrentPlayers.sort((a, b) => a.points < b.points ? 1 : -1).map(player => {
                        return (
                            <tr key={player.name}>
                                <td className="Home__text">{player.name}</td>
                                <td className="Home__text">{props.transformNum(player.points,1)}</td>
                                <td className="Home__text">{props.transformNum(player.autoclickers,2)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    ) : null;
}
