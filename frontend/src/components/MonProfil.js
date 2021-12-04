import React, { Component } from "react";
import Navigation from "./Navigation";
import AddFilm from "./AddFilm";
import '../styles/mon_profil_style.css';

function MonProfil() {
    return (
        <div className="App">

            <body>

                <nav>
                    <Navigation />
                </nav>

                <header>
                    <h1>Mon profil</h1>
                </header>

                <main id="profil">

                    <article class="boite">
                        <header>
                            <AddFilm />
                        </header>
                    </article>

                    <article class="boite">
                        <header>
                            <h2>Modifier mes films</h2>
                        </header>

                        <div class="mesFilms">
                            <div class="film">
                                <h3>Parasite</h3>
                                <div class="infosFilm">
                                    <div class="affiche">
                                        affiche parasite
                                    </div>

                                    <div class="note">
                                        <h4>Ma note</h4>
                                        <p>10/10</p>
                                        <button onclick="plus()">+</button>
                                        <button onclick="moins()">-</button>
                                    </div>

                                    <div class="favoris_supprimer_sauvegarder">
                                        <div>
                                            coeur rempli
                                        </div>
                                        <div>
                                            delete
                                        </div>
                                        <div>
                                            save
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="film">
                                <h3>Queen Slim</h3>
                                <div class="infosFilm">
                                    <div class="affiche">
                                        affiche queen slim
                                    </div>

                                    <div class="note">
                                        <h4>Ma note</h4>
                                        <p>8/10</p>
                                        <button onclick="plus()">+</button>
                                        <button onclick="moins()">-</button>
                                    </div>

                                    <div class="favoris_supprimer_sauvegarder">
                                        <div>
                                            coeur rempli
                                        </div>
                                        <div>
                                            delete
                                        </div>
                                        <div>
                                            save
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="film">
                                <h3>Le voyage de Chihiro</h3>
                                <div class="infosFilm">
                                    <div class="affiche">
                                        affiche chihiro
                                    </div>

                                    <div class="note">
                                        <h4>Ma note</h4>
                                        <p>10/10</p>
                                        <button onclick="plus()">+</button>
                                        <button onclick="moins()">-</button>
                                    </div>

                                    <div class="favoris_supprimer_sauvegarder">
                                        <div>
                                            coeur
                                        </div>
                                        <div>
                                            delete
                                        </div>
                                        <div>
                                            save
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </main>
            </body>

        </div>
    );
}
export default MonProfil;
