import React from "react";

import { useParams } from "react-router-dom";
import LogementData from "../../Data/logements.json";
import ErrorPage from "../ErrorPage";
import Carrousel from "../../components/carrousel";
import "./Logement.css";
import Rating from "../../components/Rate";
import Host from "../../components/Host";
import Collapse from "../../components/Collapse";
import Tag from "../../components/Tag";

const Logement = () => {
  const id = useParams().id;
  console.log(id);
  const logement = LogementData.find((logement) => logement.id === id);

  /* Tags */
  const tagsLogement = logement?.tags.map((tags, i) => {
    return <Tag key={i} nom={tags} />;
  });

  /* Équipements */
  const equipements = logement?.equipments.map((equipment, i) => {
    return (
      <ul key={i}>
        <li>{equipment}</li>
      </ul>
    );
  });

  if (!logement) {
    return <ErrorPage />;
  }

  return (
    <div className="Fiche-container">
      <Carrousel pictures={logement.pictures} />
      <div className="titreEtProprietaire">
        <div className="titreEtProprietaire__info__title">
          <span className="titre-logement">{logement?.title}</span>
          <span className="endroit-logement">{logement?.location}</span>
          {/* Tags */}
          <div className="titreEtProprietaire__info__tags">{tagsLogement}</div>
        </div>
        <div className="titreEtProprietaire__propietaire">
          {/* Hosting */}
          <div className="description-info__proprietaire__nom-prop">
            <Host name={logement?.host.name} picture={logement?.host.picture} />
          </div>
          {/* Rating */}
          <div className="description-info__proprietaire__rate">
            <Rating score={logement.rating} />
          </div>
        </div>
      </div>

      <div className="description-centent">
        <div className="description-centent__description">
          <Collapse title="Description" content={logement?.description} />
        </div>
        <div className="description-centent__equipement">
          <Collapse title="Équipements" content={equipements} />
        </div>
      </div>
    </div>
  );
};

export default Logement;
