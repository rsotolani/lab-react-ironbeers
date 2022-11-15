import {NavLink} from "react-router-dom";

function Home() {
    return ( 
        <div>
            <div className="beers alink">
                <NavLink to="/beers">Beers</NavLink>
            </div>

            <div className="random-beer alink">
                <NavLink to="/random-beer">Random Beer</NavLink>
            </div>

            <div className="new-beer alink">
                <NavLink to="/new-beer">New Beer</NavLink>
            </div>
        </div>
        
     );
}

export default Home;