import React, { useState, useEffect } from "react";

import "./App.css";
import "./animation.css";
import IconMenu from "./components/IconMenu/IconMenu";
import Brand from "./components/Brand/Brand";
import Ink from "./components/Ink/Ink";
import SashimiDish from "./components/SashimiDish/SashimiDish";
import CookingTime from "./components/CookingTime/CookingTime";
import IngredientText from "./components/IngredientText/IngredientText";
import IngredientImage from "./components/IngredientImage/IngredientImage";
import Instruction from "./components/Instruction/Instruction";

import cooking from "../src/assets/images/cooking.jpg";

function App() {
    const [control, setControl] = useState(null);
    // const [background, setBackground] = useState(null);
    const [justifyContent, setJustifyContent] = useState("");

    function updateClassHide() {
        if (control === "play") {
            setTimeout(function () {
                setJustifyContent("justify-content_update");
            }, 50);
        } else if (control === "reverse") {
            setTimeout(function () {
                setJustifyContent("");
            }, 200);
        }
    }

    console.log("12 ", justifyContent);
    useEffect(() => updateClassHide(), [control]);

    return (
        <div
            className="App"
            style={{ width: "100vw", display: "flex", overflow: "hidden" }}
        >
            <div
                className="container"
                style={{ width: "100vw" }}
                onClick={() => {
                    if (control !== "play") {
                        setControl("play");
                        // setBackground("grey");
                        updateClassHide();
                    } else {
                        setControl("reverse");
                        // setBackground("white");
                    }
                }}
            >
                <div className="row">
                    <div className="w13">
                        <IconMenu />
                    </div>
                    <div
                        style={{ paddingTop: "39.6%", paddingLeft: "12%" }}
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
                                ? "w36 group-info-2 fade-out-left"
                                : control === "reverse"
                                ? "w36 group-info-2 in-left"
                                : "w36 group-info-2"
                        }
                    >
                        <IngredientText />
                    </div>
                    <div
                        className={
                            control === "play"
                                ? "w50 w50-container_animate"
                                : control === "reverse"
                                ? "w50 w50-container_animate-back"
                                : "w50"
                        }
                        style={{
                            position: "absolute",
                            zIndex: 1,
                            paddingLeft: "43%",
                        }}
                    >
                        <div
                            className={
                                control === "play"
                                    ? `row group-info-3 group-info-3_animate ${justifyContent}`
                                    : control === "reverse"
                                    ? "row group-info-3 group-info-3_animate-back"
                                    : "row group-info-3"
                            }
                        >
                            <IngredientImage state={control} />
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    position: "relative",
                    height: "100vh",
                    width: "100vw",
                    right: "-45.5vw",
                    // 610 / 1340
                }}
            >
                <div
                    className={
                        control === "play"
                            ? "row slide-left"
                            : control === "reverse"
                            ? "row slide-right"
                            : "row"
                    }
                    style={{
                        backgroundColor: "#303238",
                        justifyContent: "flex-end",
                        position: "absolute",
                        width: "100vw",
                    }}
                >
                    <div className="w25">
                        <Instruction />
                    </div>
                    <div
                        className="w51"
                        style={{ height: "100vh", overflow: "hidden" }}
                    >
                        <img
                            style={{ width: "100%" }}
                            src={cooking}
                            alt="cooking"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
