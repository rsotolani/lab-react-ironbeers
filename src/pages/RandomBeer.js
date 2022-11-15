import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";

function RandomBeer() {

    const [beer, setBeer] = useState([]);
    //const navigate = useNavigate();

    useEffect( () => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random").then( (response) => {
            console.log("response.data", response.data);
            setBeer(response.data);
        })
    }, []);

    return ( 
        <div>
            <Header />
            <img src={beer.image_url} alt={beer.name} height="250px" />
            <h1>{beer.name}</h1>
            <p>{beer.tagline}</p>
            <p>First brewed: {beer.first_brewed}</p>
            <p>Attenuation level: {beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>Created by: {beer.contributed_by}</p>
        </div>
     );
}

export default RandomBeer;