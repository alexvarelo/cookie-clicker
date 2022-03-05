import React, { useEffect, useState } from 'react'

export default function UserTable(props) {

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Cookies</th>
                    <th>AutoClicks</th>
                </tr>
            </thead>
            <tbody>
                {props.CurrentPlayers.map(player => {
                    return (
                        <tr key={player.name}>
                            <td>{player.name}</td>
                            <td>{player.points}</td>
                            <td>{player.autoclickers}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
