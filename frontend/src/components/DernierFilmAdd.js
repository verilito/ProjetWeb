import React, { Component } from "react";
import Genre from "./Genre";
import Synopsis from "./Synopsis";
import Duree from "./Duree";
import Titre from "./Titre";
import DateSortie from "./DateSortie";
import Awards from "./Awards";
import BoxOffice from "./BoxOffice";


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
            <div>

                <img
                    id="postertest"
                    className="img-thumbnail"
                    src={posterIMG}
                    alt="Poster"
                />

                <Titre value={data.Title} />

                <Genre value={data.Genre} />

                <DateSortie value={data.Released} />

                <Duree value={data.Runtime} />

                <Synopsis value={data.Plot} />

                <BoxOffice value={data.BoxOffice} />

                <Awards value={data.Awards} />


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
