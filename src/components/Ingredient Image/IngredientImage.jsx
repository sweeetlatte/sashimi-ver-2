import React from "react";

import salmon from "../../assets/images/salmon.png";
import caviar from "../../assets/images/caviar.png";
import shrimp from "../../assets/images/shrimp.png";
import clam from "../../assets/images/clam.png";
import octopus from "../../assets/images/octopus.png";

export default function IngredientImage() {
    return (
        <div className="row group-info-3">
            <div className="info-img">
                <img src={salmon} alt="salmon" />
                <div>Salmon Fish</div>
            </div>
            <div className="info-img">
                <img src={caviar} alt="caviar" />
                <div>Caviar</div>
            </div>
            <div className="info-img">
                <img src={shrimp} alt="shrimp" />
                <div>Shrimp</div>
            </div>
            <div className="info-img">
                <img src={clam} alt="clam" />
                <div>Red Clam</div>
            </div>
            <div className="info-img">
                <img src={octopus} alt="octopus" />
                <div>Octopus</div>
            </div>
        </div>
    );
}
