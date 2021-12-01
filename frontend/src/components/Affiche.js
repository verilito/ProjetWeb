import React, { Component } from "react";

const apiKey = "a0a96d32";

class Affiche extends Component {
    constructor() {
        super();
        this.state = { movie: [] };
    }

    render() {
        let data = this.state.movie.Poster;
        return (
            <div>
                <img className="poster" src={data} alt="Poster" />
            </div>
        );
    }

    componentDidMount() {
        fetch(`http://localhost:5000/users/`)
            .then((response1) => response1.json())
            .then((jsonResponse) => {
                const titre = jsonResponse[0].title;
                fetch(`http://www.omdbapi.com?&apikey=${apiKey}&t=${titre}`)
                    .then(response => response.json())
                    .then(myJson => this.setState({ movie: myJson }))
            }).catch(error => console.log('Error! ' + error.message))



    }





}

export default Affiche;
