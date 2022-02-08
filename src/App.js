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
                    <div className="w13">
                        <div className="group-icon">
                            <img
                                className="icon"
                                src={menuIcon}
                                alt="menu icon"
                            />
                        </div>
                    </div>
                    <div className="w16">
                        <div className="group-brand">
                            <div className="brand-1">
                                Sashimi <br />
                                Recipe
                            </div>
                            <div className="brand-2">
                                Signature <span>FOOD</span>
                            </div>
                        </div>
                    </div>
                    <div className="w20">
                        <div className="group-ink">
                            <img className="ink" src={ink} alt="ink" />
                        </div>
                    </div>
                    <div className="w50" style={{ zIndex: 1 }}>
                        <div className="group-sashimi-dish">
                            <img
                                className="sashimi-dish"
                                src={sashimiDish}
                                alt="sashimi dish"
                            />
                        </div>
                    </div>
                </div>
                <div className="row group-info">
                    <div className="w13">
                        <div className="group-info-1">
                            <div className="title-1">Cooking Time</div>
                            <div className="row">
                                <img
                                    className="info-icon"
                                    src={timerIcon}
                                    alt="timer icon"
                                />
                                <div
                                    className="info-text-1"
                                    style={{ fontWeight: "bold" }}
                                >
                                    1h 30m
                                </div>
                            </div>
                            <div className="info-bottom">
                                <div className="title-1">Serving</div>
                                <div className="row">
                                    <img
                                        className="info-icon"
                                        src={peopleIcon}
                                        alt="people icon"
                                    />
                                    <div className="info-text-1">2 people</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w36">
                        <div className="title-2">Ingredients</div>
                        <ul className="info-text-2">
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
                    <div className="w50 row group-info-3">
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
                </div>
            </div>
        </div>
    );
}

export default App;
