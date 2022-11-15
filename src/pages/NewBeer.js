import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function NewBeer() {

    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState(1);
    const [contributedBy, setContributedBy] = useState("");
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
                    "name": name,
                    "tagline": tagline,
                    "description": description,
                    "first_brewed": firstBrewed,
                    "brewers_tips": brewersTips,
                    "attenuation_level": attenuationLevel,
                    "contributed_by": contributedBy
                };
        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
            .then((response) => {
                //Reset the state
                setName("");
                setTagline("");
                setDescription("");
                setFirstBrewed("");
                setBrewersTips("");
                setAttenuationLevel(1);
                setContributedBy("");

                //navigate to the / page
                navigate("/");
            })
    }

    return ( 
        <div>
            <Header />
            <h2>Add New Beer</h2>
            <form onSubmit={handleSubmit}>
                <div class="input-group">
                    <label className="label">Name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="input"
                    />
                </div> 
                
                <div class="input-group">
                    <label>Tagline</label>
                    <input
                        type="text"
                        name="tagline"
                        onChange={(e) => setTagline(e.target.value)}
                        value={tagline}
                        className="input"
                    />
                </div>
                
                <div class="input-group">
                    <label>Description</label>
                    <input
                        type="text"
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        className="input"
                    />
                </div>
                
                <div class="input-group">
                    <label>First Brewed</label>
                    <input
                        type="text"
                        name="first_brewed"
                        onChange={(e) => setFirstBrewed(e.target.value)}
                        value={firstBrewed}
                        className="input"
                    />
                </div>

                <div class="input-group">
                    <label>Brewers Tips</label>
                    <input
                        type="text"
                        name="brewers_tips"
                        onChange={(e) => setBrewersTips(e.target.value)}
                        value={brewersTips}
                        className="input"
                    />
                </div>
                
                <div class="input-group">
                    <label>Attenuation Level</label>
                    <input
                        type="number"
                        name="attenuation_level"
                        onChange={(e) => setAttenuationLevel(e.target.value)}
                        value={attenuationLevel}
                        className="input"
                    />
                </div>

                <div class="input-group">
                    <label>Contributed By</label>
                    <input
                        type="text"
                        name="contributed_by"
                        onChange={(e) => setContributedBy(e.target.value)}
                        value={contributedBy}
                        className="input"
                    />
                </div>
                
                <button type="submit">Create Beer</button>
            </form>
        </div>
     );
}

export default NewBeer;