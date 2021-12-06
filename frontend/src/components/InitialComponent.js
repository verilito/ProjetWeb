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
        <div id="bo">
            <div id="tete">

                <Navigation />


                <h1 id="dash">TuTeFaisDesFilms</h1>

            </div>
            <main id="dashboard">

                <aside id="partieGauche">
                    <article id="notesParGenre" className="boite">
                        <h2>Mes notes par genre</h2>
                        <Graph />
                    </article>

                    <article id="mesFavoris" className="boite">
                        <h2>Recherche d'un film</h2>
                        <SearchMovie />
                    </article>


                    <article id="nombreFilmsVues" className="boite">
                        <h2>Nombre de films vues</h2>
                        <NombreFilms />
                    </article>

                </aside>

                <div id="dernierFilmAdd">
                    <h1> Dernier Film Ajouté</h1>

                    <div id="infosDernierFilmAdd">
                        <div>  <article id="affiche">
                            <Affiche />
                        </article>
                        </div>
                        <div id="favoris_note_affiche">
                            <div id="favoris_note">
                                <article id="favoris" className="boite">
                                    <h2>Favoris</h2>
                                    <Favoris />
                                </article>

                                <article id="note" className="boite">
                                    <h2>Ma note </h2>
                                    <MaNote />
                                </article>
                            </div>
                            <div>
                                <article id="infosFilm" className="boite">
                                    <InfosMovie />
                                </article></div>


                        </div>

                    </div>
                </div>
            </main>

        </div>



    );
}

export default InitialComponent;
