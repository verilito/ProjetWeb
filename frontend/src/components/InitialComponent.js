import React from "react";
import InfosMovie from "./InfosMovie";
import Affiche from "./Affiche";
import Navigation from "./Navigation";
import MaNote from "./MaNote";
import Favoris from "./Favoris";
import NombreFilms from "./NombreFilms";

function InitialComponent() {
    return (
        <div className="App">
            <Navigation />
            <MaNote />
            <Affiche />
            <InfosMovie />
            <Favoris />
            <NombreFilms />
        </div>
    );
}

export default InitialComponent;
