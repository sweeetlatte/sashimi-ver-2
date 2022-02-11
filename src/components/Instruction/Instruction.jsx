import React from "react";

import "./instruction.css"

export default function Instruction() {
    return (
        <div className="group-instruction">
            <div className="instruction-title">Step 1</div>
            <div className="instruction-content">
                Purchase 4 oz (110 g) each of sushi grade salmon, tuna, and
                yellowtail. The fish you use to make sashimi needs to be
                incredibly fresh. Go to a fish market and purchase sushi grade
                salmon, tuna, or yellowtail. Do not buy fish that is not
                considered safe to eat raw!
            </div>
            <div className="instruction-content">
                If there is no fish market in your area, try visiting an Asian
                market that has a seafood counter or ask the employees at your
                grocery store’s fish counter if they have any sushi grade fish
                available. Keep in mind that this usually just means the fish
                was previously frozen to kill any parasites.
                <br />
                Tell the fish monger or fish counter employee that you are
                making sashimi and ask them to cut it into a sashimi block so
                that you only have to purchase what you need
            </div>
            <div style={{ paddingTop: "48%" }}>
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
    );
}
