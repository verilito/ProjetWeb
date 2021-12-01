import React, { Component } from "react";

const apiKey = "a0a96d32";

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
                <h2>{title}</h2>
                <h2>{genre}</h2>
                <h2>Date de sortie: {released}</h2>
                <h2>Directeur: {director}</h2>
                <h2>Box-office: {boxOffice}</h2>
                <h2>Synopsis: {plot}</h2>
            </div>
        );
    }

    componentDidMount() {
        fetch(`http://localhost:5000/users/`)
            .then((response1) => response1.json())
            .then((jsonResponse) => {
                const title = jsonResponse[0].title;
                fetch(`http://www.omdbapi.com?&apikey=${apiKey}&t=${title}`)
                    .then(response => response.json())
                    .then(myJson => this.setState({ movie: myJson }))
            }).catch(error => console.log('Error! ' + error.message))



    }

}

export default InfosMovie;
