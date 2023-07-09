import React, { useState } from "react";
import "./Collapse.css";
import fleche from "../../assets/ChevronOpen.png";

function Collapse({title, content}) {
   /* Hook */
    const [ouvert, setOuvert] = useState(false);

    return(
        <div className="collapse" id={`about-${title}`}>
            <div className="header-collapse">
                <div className="title-collapse">{title}</div>
                <span className={`fleche-collapse ${ouvert}`} onClick={() => setOuvert(!ouvert)}>
                    <img src={fleche} alt="Ouvrir cette liste"/>
                </span>
            </div>
        {
         /* Si true > description */
        ouvert && <div className="content-collapse">{content}</div>
        }
        </div>
    );
}

export default Collapse;