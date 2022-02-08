import "./App.css";
import IconMenu from "./components/Icon Menu/IconMenu";
import Brand from "./components/Brand/Brand";
import Ink from "./components/Ink/Ink";
import SashimiDish from "./components/Sashimi Dish/SashimiDish";
import CookingTime from "./components/Cooking Time/CookingTime";
import IngredientText from "./components/Ingredient Text/IngredientText";
import IngredientImage from "./components/Ingredient Image/IngredientImage";

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="w13">
                        <IconMenu />
                    </div>
                    <div className="w16">
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
                    <div className="w13">
                        <CookingTime />
                    </div>
                    <div className="w36">
                        <IngredientText />
                    </div>
                    <div className="w50 ">
                        <IngredientImage />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
