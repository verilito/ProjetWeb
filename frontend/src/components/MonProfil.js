import React, { Component } from "react";
import Navigation from "./Navigation";
import AddFilm from "./AddFilm";

function MonProfil() {
    return (
        <div className="App">
            <Navigation />
            <h1>Mon Profil </h1>
            <AddFilm />

        </div>
    );
}
export default MonProfil;
