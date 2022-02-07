import "./App.css";

import menuIcon from "../src/assets/icons/menu.svg";
import timerIcon from "../src/assets/icons/timer.svg";
import peopleIcon from "../src/assets/icons/user.svg";

import ink from "../src/assets/images/ink.png";
import sashimiDish from "../src/assets/images/sashimi-dish.png";
import salmon from "../src/assets/images/salmon.png";
import caviar from "../src/assets/images/caviar.png";
import shrimp from "../src/assets/images/shrimp.png";
import clam from "../src/assets/images/clam.png";
import octopus from "../src/assets/images/octopus.png";

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="w10">
                        <div style={{ paddingTop: "46px" }}>
                            <img src={menuIcon} alt="menu icon" />
                        </div>
                    </div>
                    <div className="w20">
                        <div
                            style={{
                                position: "fixed",
                                display: "flex",
                                flexdirection: "column",
                                justifyContent: "flex-end",
                                height: "57%",
                            }}
                        >
                            <div
                                style={{
                                    fontFamily: "Wilma",
                                    color: "#545454",
                                    fontSize: " 7.313rem",
                                    letterSpacing: "-5px",
                                    lineHeight: 0.9,
                                }}
                            >
                                Sashimi <br />
                                Recipe
                            </div>
                            <div
                                style={{
                                    fontFamily: "MrsSaintDelafield",
                                    fontSize: "60px",
                                }}
                            >
                                Signature{" "}
                                <span
                                    style={{
                                        fontFamily: "sans-serif",
                                        fontSize: "18px",
                                    }}
                                >
                                    FOOD
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w20">
                        <div
                            style={{
                                zIndex: 0,
                            }}
                        >
                            <img
                                style={{
                                    marginTop: "-18%",
                                    marginLeft: "15%",
                                }}
                                src={ink}
                                alt="ink"
                            />
                        </div>
                    </div>

                    <div className="w50" style={{ zIndex: 1 }}>
                        <div
                            style={{
                                marginTop: "-18%",
                                marginLeft: "5%",
                            }}
                        >
                            <img
                                style={{ width: "98%" }}
                                src={sashimiDish}
                                alt="sashimi dish"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="w10">
                        <div>
                            <div>Cooking Time</div>
                            <div className="row">
                                <img
                                    style={{ width: "22px", height: "22px" }}
                                    src={timerIcon}
                                    alt="timer icon"
                                />
                                <div>1h 30m</div>
                            </div>
                        </div>
                        <div>
                            <div>Serving</div>
                            <div className="row">
                                <img
                                    style={{ width: "22px", height: "22px" }}
                                    src={peopleIcon}
                                    alt="people icon"
                                />
                                <div>2 people</div>
                            </div>
                        </div>
                    </div>
                    <div className="w40">
                        <div>Ingredients</div>
                        <ul>
                            <li>
                                1 pound fresh, sashimi-quality fish, such as
                                yellowfin tuna or salmon
                            </li>
                            <li>2 teaspoons extra-virgin olive oil</li>
                            <li>
                                4 teaspoons shiro dashi or regular Japanese soy
                                sauce
                            </li>
                            <li>2 teaspoons white sesame seeds</li>
                            <li>1/2 teaspoon thinly sliced chives</li>
                        </ul>
                    </div>
                    <div className="w50 row">
                        <div>
                            <img src={salmon} alt="salmon" />
                            <div>Salmon</div>
                        </div>
                        <div>
                            <img src={caviar} alt="caviar" />
                            <div>Caviar</div>
                        </div>
                        <div>
                            <img src={shrimp} alt="shrimp" />
                            <div>Shrimp</div>
                        </div>
                        <div>
                            <img src={clam} alt="clam" />
                            <div>Clam</div>
                        </div>
                        <div>
                            <img src={octopus} alt="octopus" />
                            <div>Octopus</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
