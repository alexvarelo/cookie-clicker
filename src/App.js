import React, { useState } from 'react'
import Home from './pages/Home'
import Game from './pages/Game'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './pages/components/Footer';

/* 
Funcion principal donde se declaran los Hooks que se van a compartir entre componentes, y gestiona la interaccion de vistas
*/
function App() {

  const [Players, setPlayers] = useState([]); //Hook donde se van a almacenar un array de objectos, cada uno representando un jugador
  const [CurrentPlayer, setCurrentPlayer] = useState(); //Hook que representa el jugador actual para poder transferirlo al componente Game
  const [showGame, setShowGame] = useState(false); //Hook que gestiona la apertura de vistas segun donde este el usuario

  /*
  Funcion que dado un numero y el numero de digitos de detalle, devuelve el numero expresado en base miles, millones, mil millones y 
  billones
  Dado el numero encuentra en que base esta, es decir, cuantos digitos tiene, para saber que "letra" se va a adherir, 
  y dado los digitos devuelve el numero con x digitos y su letra
  */
  const transformNum = (num, digits) => {
    const base = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "MM" },
      { value: 1e12, symbol: "B" },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = base.slice().reverse().find(function (item) {
      return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
  }

  return !showGame ? (
    <>
      <div>
        <Home
          Players={Players}
          CurrentPlayer={CurrentPlayer}
          setPlayers={setPlayers}
          setCurrentPlayer={setCurrentPlayer}
          showGame={showGame}
          setShowGame={setShowGame}
          transformNum = {transformNum}
           />
      </div>
      <Footer setShowGame={setShowGame} />
    </>
  ) : (
    <>
      <div>
        <Game
          CurrentPlayer={CurrentPlayer}
          showGame={setShowGame}
          Players={Players}
          updatePlayers={setPlayers}
          transformNum = {transformNum} />
      </div>
    </>
  )
}

export default App;
