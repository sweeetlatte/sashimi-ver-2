import React, { useState, useEffect } from "react";

import "./instruction.css";

export default function Instruction({ state }) {
    const [overflow, setOverflow] = useState("");
    const [shadow, setShadow] = useState("");

    function updateOverflow() {
        if (state === "play") {
            setTimeout(function () {
                setOverflow("abcxyz");
                setShadow("shadow");
            }, 1933);
        } else if (state === "reverse") {
            setOverflow("");
            setTimeout(function () {
                setShadow("");
            }, 533);
        }
    }
    useEffect(() => updateOverflow(), [state]);

    return (
        <div className={`group-instruction ${overflow}`}>
            <div className={`${shadow}`}></div>
            <div style={{ paddingTop: "5vh", paddingBottom: "5vh" }}>
                <div
                    className={
                        state === "play"
                            ? "fade-in-right instruction-title"
                            : state === "reverse"
                            ? "fade-out-right-2 instruction-title"
                            : "instruction-title"
                    }
                >
                    Step 1
                </div>
                <div
                    className={
                        state === "play"
                            ? "fade-in-right instruction-content"
                            : state === "reverse"
                            ? "fade-out-right-2 instruction-content"
                            : "instruction-content"
                    }
                >
                    Purchase 4 oz (110 g) each of sushi grade salmon, tuna, and
                    yellowtail. The fish you use to make sashimi needs to be
                    incredibly fresh. Go to a fish market and purchase sushi
                    grade salmon, tuna, or yellowtail. Do not buy fish that is
                    not considered safe to eat raw!
                </div>
                <div
                    className={
                        state === "play"
                            ? "fade-in-right-2 instruction-content"
                            : state === "reverse"
                            ? "fade-out-right instruction-content"
                            : "instruction-content"
                    }
                >
                    If there is no fish market in your area, try visiting an
                    Asian market that has a seafood counter or ask the employees
                    at your grocery store’s fish counter if they have any sushi
                    grade fish available. Keep in mind that this usually just
                    means the fish was previously frozen to kill any parasites.
                    <br />
                    Tell the fish monger or fish counter employee that you are
                    making sashimi and ask them to cut it into a sashimi block
                    so that you only have to purchase what you need
                </div>
                <div
                    style={{ paddingTop: "19.5vh" }}
                    className={
                        state === "play"
                            ? "fade-in-right-2"
                            : state === "reverse"
                            ? "fade-out-right"
                            : ""
                    }
                >
                    <div className="instruction-title">Step 2</div>
                    <div className="instruction-content">
                        Choose fresh vegetables to pair with sashimi. Sashimi is
                        often served with a selection of fresh raw vegetables to
                        complement the flavors of the fresh fish. Pick up a few
                        fresh, whole veggies at the market when you purchase the
                        fish. Some good options include:
                        <br /> Daikon radish
                        <br /> Cucumber
                        <br /> Carrots
                        <br /> Avocado
                        <br /> Shiso leaves
                    </div>
                </div>
            </div>
            <div className={`${shadow}-reverse`}></div>
        </div>
    );
}
