import React from "react";

import "./sashimiDish.css";

import sashimiDish from "../../assets/images/sashimi-dish.png";

export default function SashimiDish() {
    return (
        <div className="group-sashimi-dish">
            <img
                className="sashimi-dish"
                src={sashimiDish}
                alt="sashimi dish"
            />
        </div>
    );
}
