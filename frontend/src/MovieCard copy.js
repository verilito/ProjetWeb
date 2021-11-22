import React, { Component } from "react";
import Widget from "./Widget";
import Titre from "./Titre";
import DateSortie from "./DateSortie";
import VoteAverage from "./VoteAverage";
// import * as moment from 'moment';
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
            <div className="row-xs-12 nopadding modal-dialog-centered">
                <div className="col-xs-12 nopadding modal-dialog-centered">
                    <div className="poster-container nopadding col-xs-12 col-md-4 pull-md-8 col-lg-2 pull-lg-7 ">
                        <img
                            id="postertest"
                            className="img-thumbnail"
                            src={posterIMG}
                            alt="Poster"
                        />
                    </div>

                    <div className="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-10 push-lg-5 card">
                        <Titre value={data.original_title} />

                        <div className="row nopadding release-details">
                            <div className="col-sm-6">
                                {" "}
                                Genre:{" "}
                                <Widget value={genresList} />
                            </div>
                        </div>

                        <span className="tagline">{data.tagline}</span>
                        <p>{data.overview}</p>
                        <div className="additional-details">
                            <div className="row nopadding release-details">

                                <DateSortie value={data.release_date} />

                                <VoteAverage value={data.vote_average ? data.vote_average : "N/A"} />

                                <div className="col-sm-6">
                                    {" "}
                                    Productions:{" "}
                                    <Widget value={data.productions} />
                                </div>

                                <div className="col-sm-6">
                                    {" "}
                                    Budget:{" "}
                                    <Widget value={data.budget} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
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
