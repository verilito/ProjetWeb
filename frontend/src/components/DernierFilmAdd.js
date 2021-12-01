import React, { Component } from "react";
import Widget from "./Widget";


const TMDBLogo =
    "https://www.themoviedb.org/assets/2/v4/logos/312x276-primary-green-74212f6247252a023be0f02a5a45794925c3689117da9d20ffe47742a665c518.png";
const moviePosterBaseUrl = "https://image.tmdb.org/t/p/w370_and_h556_bestv2";
let backdropImg;

class DernierFilmAdd extends Component {
    render() {
        let data = this.props.movie;

        let posterIMG = data.Poster;

        console.log("data is: " + JSON.stringify(data));

        if (data.Poster === null) {
            posterIMG =
                "https://m.media-amazon.com/images/M/MV5BMTQzNDUwODk5NF5BMl5BanBnXkFtZTgwNzA0MDQ2NTE@._V1_SX300.jpg";
        }

        return (
            <div id='tout'>

                <div class="flex-container-row">

                    <div id='gauche'>
                        <h1 id='titre_film-profil'>{data.Title}</h1>

                        <div class="flex-container-column-profil">
                            <p className='titre_widget'>Genre:{" "} </p>
                            <Widget value={data.Genre} />
                        </div>

                        <div class="flex-container-row-wrap">

                            <div class="flex-container-column-profil">
                                <p className='titre_widget'>Date Sortie:{" "}</p>
                                <Widget value={data.Released} />
                            </div>

                            <div class="flex-container-column-profil">
                                <p className='titre_widget'>Durée: {" "} </p>
                                <Widget value={data.Runtime} />
                            </div>

                            <div class="flex-container-column-profil">
                                <p className='titre_widget'>Synopsis: {" "} </p>
                                <Widget value={data.Plot} />
                            </div>

                            <div class="flex-container-column-profil">
                                <p className='titre_widget'>Box-Office: {" "} </p>
                                <Widget value={data.BoxOffice} />
                            </div>

                            <div class="flex-container-column-profil">
                                <p className='titre_widget'>Awards: {" "} </p>
                                <Widget value={data.Awards} />
                            </div>

                        </div>
                    </div>

                    <div>
                        <img
                            id="postertest"
                            className="img-thumbnail"
                            src={posterIMG}
                            alt="Poster"
                            height="192px"
                        />
                    </div>

                </div>


            </div >

        );
    }

    componentDidUpdate() {
        document.body.style.backgroundImage = "url(" + backdropImg + ")";
    }
}

function nestedDataToString(nestedData) {
    let nestedArray = [],
        resultString;
    if (nestedData !== undefined) {
        nestedData.forEach(function (item) {
            nestedArray.push(item.name);
        });
    }
    resultString = nestedArray.join(", "); // array to string
    return resultString;
}

export default DernierFilmAdd;
