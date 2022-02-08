import React, { useState, useEffect } from "react";

import "./App.css";
import "./animation.css";
import IconMenu from "./components/Icon Menu/IconMenu";
import Brand from "./components/Brand/Brand";
import Ink from "./components/Ink/Ink";
import SashimiDish from "./components/Sashimi Dish/SashimiDish";
import CookingTime from "./components/Cooking Time/CookingTime";
import IngredientText from "./components/Ingredient Text/IngredientText";
import IngredientImage from "./components/Ingredient Image/IngredientImage";

function App() {
    const [control, setControl] = useState(null);
    const [meta, setMeta] = useState({
        //meta state of the player
        control: control,
        progress: 0,
        currentTime: 0,
        duration: 0,
    });
    const [background, setBackground] = useState(null);
    const [hide, setHide] = useState("");

    function updateClassHide() {
        if (control === "play") {
            setTimeout(function () {
                setHide("ingredients-left-hide");
            }, 858);
        } else {
            setHide("");
        }
    }

    return (
        <div className="App">
            <div
                className="container"
                onClick={() => {
                    if (control !== "play") {
                        setControl("play");
                        setBackground("grey");
                        updateClassHide();
                    } else {
                        setControl("reverse");
                        setBackground("white");
                    }
                }}
            >
                <div className="row">
                    <div className="w13">
                        <IconMenu />
                    </div>
                    <div
                        style={{ paddingTop: "18%" }}
                        className={
                            control === "play" ? "w16 fade-out-left" : "w16"
                        }
                    >
                        <Brand />
                    </div>
                    <div className="w20">
                        <Ink />
                    </div>
                    <div className="w50" style={{ zIndex: 1 }}>
                        <SashimiDish />
                    </div>
                </div>
                <div className="row group-info">
                    <div
                        className={
                            control === "play" ? "w13 fade-out-left" : "w13"
                        }
                    >
                        <CookingTime />
                    </div>
                    <div
                        className={
                            control === "play" ? "w36 fade-out-left" : "w36"
                        }
                    >
                        <IngredientText />
                    </div>
                    <div className="w50 row group-info-3">
                        <IngredientImage />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
