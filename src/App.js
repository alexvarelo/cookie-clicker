import logo from './logo.svg';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Game from './pages/Game'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
