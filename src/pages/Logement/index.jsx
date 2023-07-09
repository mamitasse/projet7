import React from "react";
import { useParams } from "react-router-dom";
import LogementData from "../../Data/logements.json";

const Logement = () => {
  const id  = useParams();
  console.log(id);
  const logement = LogementData.find((logement) => logement.id === id);
  

  if (!logement) {
    return <div>Logement introuvable</div>;
  }

  return (
    <div>
      <h2>{logement.title}</h2>
      <img src={logement.cover} alt={logement.title} />
      <p>Description : {logement.description}</p>
      <p>Prix : {logement.price} €</p>
      {/* Ajoutez d'autres informations du logement ici */}
    </div>
  );
};

export default Logement;

