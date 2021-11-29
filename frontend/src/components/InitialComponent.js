import React from "react";
import MovieInformation from "./MovieInformation";
import MonProfil from "./MonProfil";
import Navigation from "./Navigation";

//import "./styles/app.css";
// <MovieInformation />
function InitialComponent() {
    return (
        <div className="App">
            <Navigation />

            <MovieInformation />
        </div>
    );
}

export default InitialComponent;
