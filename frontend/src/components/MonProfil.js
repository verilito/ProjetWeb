import React from "react";
import Navigation from "./Navigation";
import AddFilm from "./AddFilm";
import DeleteMovie from "./DeleteMovie";
import UpdateMovie from "./UpdateMovie";
import '../styles/mon_profil_style.css';

function MonProfil() {
    return (
        <div className="App">

            <div className="body">

                <Navigation />

                <h1 id="profil">Mon profil</h1>


                <main id="profil">

                    <article className="boite">
                        <header>
                            <AddFilm />
                        </header>
                    </article>

                    <article className="boite">
                        <header>
                            <h2>Supprimer le dernier film ajouté</h2>
                        </header>
                        <div className="mesFilms">
                            <div className="film">
                                <div className="infosFilm">
                                    <DeleteMovie />

                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="boite">
                        <header>
                            <h2>Modifier le dernier film ajouté</h2>
                        </header>
                        <div className="mesFilms">
                            <div className="film">
                                <div className="infosFilm">
                                    <UpdateMovie />
                                </div>
                            </div>
                        </div>
                    </article>
                </main>
            </div>

        </div>
    );
}
export default MonProfil;
