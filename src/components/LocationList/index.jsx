import React from "react";

import "./LocationList.css";

import LogementData from "../../Data/logements.json";
import { NavLink } from "react-router-dom";
import Cards from "../cards";

const LocationList=()=> {
    return(
       
            <div className="block-logements">
                {LogementData.map((logement) => 
                    <NavLink key={logement.id} to={"/Logement/"+logement.id}>
                        <Cards key={logement.id} id={logement.id} image={logement.cover} titre={logement.title} />
                    </NavLink>)}
            </div>
        
    );
}

export default LocationList;