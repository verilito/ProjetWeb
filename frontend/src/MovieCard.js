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

        let posterIMG = data.Poster;

        console.log("data is: " + JSON.stringify(data));

        if (data.Poster === null) {
            posterIMG =
                "https://m.media-amazon.com/images/M/MV5BMTQzNDUwODk5NF5BMl5BanBnXkFtZTgwNzA0MDQ2NTE@._V1_SX300.jpg";
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
                <ContainerTitle> <Titre value={data.Title} /> </ContainerTitle>

                < ContainerSynopsis> <p>{data.Plot}</p></ContainerSynopsis>

                <ContainerDate>  <DateSortie value={data.Released} /></ContainerDate>

                <ContainerVote>   <VoteAverage value={data.Actors} /> </ContainerVote>


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
