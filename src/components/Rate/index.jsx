import React from "react";
import FullStar from "../../assets/Full_star.png";
import EmptyStar from "../../assets/Empty_star.png";

function Rate(props) {
  const score = props.score;
  const notes = [1, 2, 3, 4, 5];

  return (
    <div className="rate-contenair">
      {notes.map((note) =>
        score >= note ? (
          <img
            key={note.toString()}
            className="etoile"
            src={FullStar} // Utilise FullStar pour les étoiles pleines
            alt="star"
          />
        ) : (
          <img
            key={note.toString()}
            className="etoile"
            src={EmptyStar} // Utilise EmptyStar pour les étoiles vides
            alt="star"
          />
        )
      )}
    </div>
  );
}

export default Rate;
