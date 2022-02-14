import React from "react";

import "./ingredientImage.css";

import salmon from "../../assets/images/salmon.png";
import caviar from "../../assets/images/caviar.png";
import shrimp from "../../assets/images/shrimp.png";
import clam from "../../assets/images/clam.png";
import octopus from "../../assets/images/octopus.png";

export default function IngredientImage({ state }) {
    console.log(state);
    const ingredients = [
        {
            id: 0,
            image: salmon,
            alt: "salmon-fish",
            name: "Salmon Fish",
        },
        {
            id: 1,
            image: caviar,
            alt: "caviar",
            name: "Caviar",
        },
        {
            id: 2,
            image: shrimp,
            alt: "eel",
            name: "Eel",
        },
        {
            id: 3,
            image: clam,
            alt: "red-clam",
            name: "Red Clam",
        },
        {
            id: 4,
            image: octopus,
            alt: "octopus",
            name: "Octopus",
        },
    ];

    return (
        <>
            {ingredients.map((ingredient, index) => (
                <div
                    className={
                        state === "play"
                            ? "info-img left"
                            : state === "reverse"
                            ? "info-img left-back"
                            : "info-img"
                    }
                    style={{
                        alignItems: state === "play" ? "flex-start" : "center",
                        transition: "alignItems 1600ms ease", //need delay
                    }}
                >
                    <img src={ingredient.image} alt={ingredient.alt} />
                    <div
                        style={{
                            color: state === "play" ? "white" : "#545454",
                            transition: "color 1600ms ease",
                        }}
                        className={
                            state === "play"
                                ? "rotate"
                                : state === "reverse"
                                ? "rotate-back"
                                : ""
                        }
                    >
                        {ingredient.name}
                    </div>
                </div>
            ))}
        </>
    );
}
