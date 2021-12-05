import React, { Component, useState } from "react";
import '../styles/mon_profil_style.css';
import axios from "axios";

const apiKey = "f676c67a";

class UpdateMovieBis extends Component {
    constructor(props) {
        super(props);
        this.state = { movie: {}, id: '' };
    }

    render() {
        let data = this.state.movie;
        let id = this.state.id;

        return (
            <div>

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
                        const titre = jsonResponse[indice].title;
                        this.setState({ id: jsonResponse[indice]._id })
                        fetch(`http://www.omdbapi.com?&apikey=${apiKey}&t=${titre}`)
                            .then(response => response.json())
                            .then(myJson => this.setState({ movie: myJson }))
                    }).catch(error => console.log('Error! ' + error.message))
            }).catch(error => console.log('Error! ' + error.message))
    }

}

export default UpdateMovieBis;
