import React, { Component } from "react";
import Widget from "./Widget";
import Titre from "./Titre";
import DateSortie from "./DateSortie";
import VoteAverage from "./VoteAverage";
import { ContainerTitle, ContainerSynopsis, ContainerDate, ContainerVote, ContainerPoster } from "./Dashboard.js";
let numeral = require("numeral");

const TMDBLogo =
    "https://www.themoviedb.org/assets/2/v4/logos/312x276-primary-green-74212f6247252a023be0f02a5a45794925c3689117da9d20ffe47742a665c518.png";
const moviePosterBaseUrl = "https://image.tmdb.org/t/p/w370_and_h556_bestv2";
let backdropImg;

class MovieCard extends Component {
    render() {
        let data = this.props.movie;
        var budget = parseInt(data.budget);

        let posterIMG = moviePosterBaseUrl + data.poster_path,
            genres = data.genre_ids,
            genresList = nestedDataToString(genres);
        //backdropImg = "https://image.tmdb.org/t/p/original" + data.backdrop_path;



        console.log("data is: " + JSON.stringify(data));

        if (data.poster_path === null) {
            posterIMG =
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g";
        }

        return (
            <div>
                <ContainerPoster>
                    <img
                        id="postertest"
                        className="img-thumbnail"
                        src={posterIMG}
                        alt="Poster"
                    />
                </ContainerPoster >
                <ContainerTitle> <Titre value={data.original_title} /> </ContainerTitle>

                < ContainerSynopsis> <p>{data.overview}</p></ContainerSynopsis>

                <ContainerDate>  <DateSortie value={data.release_date} /></ContainerDate>

                <ContainerVote>   <VoteAverage value={data.vote_average ? data.vote_average : "N/A"} /> </ContainerVote>


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

export default MovieCard;
