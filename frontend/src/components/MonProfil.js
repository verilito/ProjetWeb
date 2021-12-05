import React, { Component } from "react";
import Navigation from "./Navigation";
import AddFilm from "./AddFilm";
import DeleteMovie from "./DeleteMovie";
import UpdateMovie from "./UpdateMovie";
import '../styles/mon_profil_style.css';

function MonProfil() {
    return (
        <div className="App">

            <div className="bod">

                <nav>
                    <Navigation />
                </nav>

                <header>
                    <h1>Mon profil</h1>
                </header>

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
                                    <div className="affiche">
                                        <DeleteMovie />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="boite">
                        <header>
                            <h2>Modifiez le dernier film ajouté</h2>
                        </header>
                        <div className="mesFilms">
                            <div className="film">
                                <div className="infosFilm">
                                    <div className="affiche">
                                        <UpdateMovie />
                                    </div>

                                    <div className="note">
                                        <h4>Ma note</h4>
                                        <p>10/10</p>
                                        <button onclick="plus()">+</button>
                                        <button onclick="moins()">-</button>
                                    </div>

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
