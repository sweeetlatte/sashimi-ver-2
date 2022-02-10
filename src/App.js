import React, { useState, useEffect } from "react";

import "./App.css";
import "./animation.css";
import IconMenu from "./components/IconMenu/IconMenu";
import Brand from "./components/Brand/Brand";
import Ink from "./components/Ink/Ink";
import SashimiDish from "./components/SashimiDish/SashimiDish";
import CookingTime from "./components/CookingTime/CookingTime";
import IngredientText from "./components/Ingredient Text/IngredientText";
import IngredientImage from "./components/IngredientImage/IngredientImage";

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
                        style={{ paddingTop: "19.6%" }}
                        className={
                            control === "play"
                                ? "w16 fade-out-left"
                                : control === "reverse"
                                ? "w16 in-left"
                                : "w16"
                        }
                    >
                        <Brand />
                    </div>
                    <div className="w20">
                        <Ink />
                    </div>
                    <div
                        className={
                            control === "play"
                                ? "w50 up-left"
                                : control === "reverse"
                                ? "w50 down-right"
                                : "w50"
                        }
                        style={{
                            zIndex: 1,
                            position: "absolute",
                            left: "48.5%",
                        }}
                    >
                        <SashimiDish />
                    </div>
                </div>
                <div className="row group-info">
                    <div
                        className={
                            control === "play"
                                ? "w13 fade-out-left"
                                : control === "reverse"
                                ? "w13 in-left"
                                : "w13"
                        }
                    >
                        <CookingTime />
                    </div>
                    <div
                        className={
                            control === "play"
                                ? "w36 fade-out-left"
                                : control === "reverse"
                                ? "w36 in-left"
                                : "w36"
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
