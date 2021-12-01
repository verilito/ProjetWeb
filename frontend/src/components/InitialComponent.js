import React from "react";
import InfosMovie from "./InfosMovie";
import Affiche from "./Affiche";
import Navigation from "./Navigation";
import MaNote from "./MaNote";
import Favoris from "./Favoris";

function InitialComponent() {
    return (
        <div className="App">
            <Navigation />
            <MaNote />
            <Affiche />
            <InfosMovie />
            <Favoris />
        </div>
    );
}

export default InitialComponent;
