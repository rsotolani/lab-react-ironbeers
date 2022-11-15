//import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Beers() {
    
    const [beers, setBeers] = useState([]);
    //const navigate = useNavigate();

    useEffect( () => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers").then( (response) => {
            console.log("response.data", response.data);
            setBeers(response.data);
        })
    }, []);

    return ( 
        <div className="beers-list">
            <Header />
            <h2>List of beers</h2>
            {beers.map( (beer) => (
                <div className="beers-items" key={beer._id}>
                    <div className="beers-imagem">
                        <Link to={`/beers/${beer._id}`}>
                            <img src={beer.image_url} alt={beer.name} height="150px" />
                        </Link>
                    </div>
                    <div className="beers-dados">
                        <Link to={`/beers/${beer._id}`} className="name">
                            <h3 >{beer.name}</h3>
                        </Link>
                        <p className="tagline">{beer.tagline}</p>
                        <p>Created by: {beer.contributed_by}</p>
                    </div>  
                </div>
            ))}
        </div>
     );
}

export default Beers;