import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import BeerDetails from './pages/BeerDetails';
import { Routes, Route, NavLink } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path={"/beers/:idBeer"} element={<BeerDetails />} />
      </Routes>
    </div>
  );
}

export default App;
