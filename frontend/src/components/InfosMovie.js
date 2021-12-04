import React, { Component } from "react";

const apiKey = "f676c67a";

class InfosMovie extends Component {
    constructor() {
        super();
        this.state = { movie: [] };
    }

    render() {
        let datas = this.state.movie;
        let title = datas.Title;
        let genre = datas.Genre;
        let released = datas.Released;
        let director = datas.Director;
        let boxOffice = datas.BoxOffice;
        let plot = datas.Plot;

        return (
            <div>
                <h2 class="titre_genre">{title}</h2>
                <h2 class="titre_genre">{genre}</h2>
                <h3><span>Date de sortie:</span> {released}</h3>
                <h3><span>Directeur:</span>  {director}</h3>
                <h3><span>Box-office:</span>  {boxOffice}</h3>
                <h3><span>Synopsis:</span>  {plot}</h3>
            </div>
        );
    }

    componentDidMount() {
        fetch(`http://localhost:5000/users/countMovies`)
            .then((response1 => response1.json()))
            .then((jsonResponse) => {
                const indice = Number(jsonResponse) - 1;
                fetch(`http://localhost:5000/users/`)
                    .then((response1) => response1.json())
                    .then((jsonResponse) => {
                        const title = jsonResponse[indice].title;
                        fetch(`http://www.omdbapi.com?&apikey=${apiKey}&t=${title}`)
                            .then(response => response.json())
                            .then(myJson => this.setState({ movie: myJson }))
                    }).catch(error => console.log('Error! ' + error.message))

            }).catch(error => console.log('Error! ' + error.message))

    }

}

export default InfosMovie;
