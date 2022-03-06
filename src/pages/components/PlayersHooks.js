 import React, { useState } from 'react'

/* PARA PODER ACCEDER A LOS HOOKS DEL TEST | NO ESTA EN USO*/
function PlayersHooks() {
    const [Players, setPlayers] = useState([]);
    const [CurrentPlayer, setCurrentPlayer] = useState();
    const [showGame, setShowGame] = useState(false);
    
    return {Players, setPlayers, CurrentPlayer, setCurrentPlayer, showGame, setShowGame};
}

export default PlayersHooks