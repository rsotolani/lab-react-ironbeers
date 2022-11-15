import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom'
import Header from "../components/Header";
import axios from "axios";



function BeerDetails() {

    const { idBeer } = useParams();
    const [beer, setBeer] = useState([]);

    useEffect( () => {
        // axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`).then( (response) => {
        //     console.log("response.data", response.data);
        //     setBeer(response.data);
        // })
        async function fetchBeer() {
            const response = await axios.get(
                `https://ih-beers-api2.herokuapp.com/beers/${idBeer}`
            );
            setBeer(response.data);
        }
        fetchBeer();

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

            <div className="header alink">
                <Link to="/beers">Voltar</Link>
            </div>
            
        </div>
     );
}

export default BeerDetails;