import React, { useState } from 'react'

function PlayersHooks() {
    const [Players, setPlayers] = useState([]);
    const [CurrentPlayer, setCurrentPlayer] = useState();
    const [showGame, setShowGame] = useState(false);
    
    return {Players, setPlayers, CurrentPlayer, setCurrentPlayer, showGame, setShowGame};
}

export default PlayersHooks