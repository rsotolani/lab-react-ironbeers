import './App.css';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import { Routes, Route, NavLink } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <div className="beers">
        <NavLink to="/beers">Beers</NavLink>
      </div>

      <div className="random-beer">
        <NavLink to="/random-beer">Random Beer</NavLink>
      </div>

      <div className="new-beer">
        <NavLink to="/new-beer">New Beer</NavLink>
      </div>
      <Routes>
        
          <Route path="/beers" element={<Beers />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
