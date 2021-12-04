import React from "react";
import InfosMovie from "./InfosMovie";
import Affiche from "./Affiche";
import Navigation from "./Navigation";
import MaNote from "./MaNote";
import Favoris from "./Favoris";
import NombreFilms from "./NombreFilms";
import SearchMovie from "./SearchMovie";
import '../styles/dashboard_style.css';
import Graph from "./Graph";


function InitialComponent() {
    return (
        <div className="App">
            <body>

                <nav>
                    <Navigation />
                </nav>

                <main id="dashboard">

                    <aside id="partie_gauche">
                        <article id="nombreFilmsVues" class="boite">
                            <h2>Nombre de films vues</h2>
                            <NombreFilms />
                        </article>

                        <article id="mesFavoris" class="boite">
                            <h2>Recherche d'un film</h2>
                            <SearchMovie />
                        </article>

                        <article id="notesParGenre" class="boite">
                            <h2>Mes notes par genre</h2>
                            <Graph />
                        </article>

                    </aside>

                    <div id="dernierFilmAdd">
                        <h1> Dernier Film Ajouté</h1>
                        <div id="infosDernierFilmAdd">

                            <div id="favoris_note_affiche">
                                <div id="favoris_note">
                                    <article id="favoris" class="boite">
                                        <h2>Favoris</h2>
                                        <Favoris />
                                    </article>

                                    <article id="note" class="boite">
                                        <h2>Ma note </h2>
                                        <MaNote />
                                    </article>
                                </div>

                                <article id="affiche">
                                    <Affiche />
                                </article>
                            </div>


                            <article id="infosFilm" class="boite">
                                <InfosMovie />
                            </article>


                        </div>
                    </div>
                </main>

            </body>
        </div>


    );
}

export default InitialComponent;
