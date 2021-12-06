import React, { Component } from "react";
import '../styles/mon_profil_style.css';
import axios from "axios";

const apiKey = "f676c67a";

class DeleteMovie extends Component {
    constructor() {
        super();
        this.state = { movie: {}, id: '' };
    }

    render() {
        let data = this.state.movie;
        let idM = this.state.id;

        function handleClick(event) {
            event.preventDefault();
            axios.delete('http://localhost:5000/users/' + idM)
            window.location.reload(true)
        }

        return (
            <div>
                <h3>Titre: {data.Title}</h3>
                <img className="poster" src={data.Poster} alt="Poster" height="160px" /> <br />
                <button onClick={handleClick} className="btn btn-lg-info" className="boutonCrud"><img className="imageCrud" src='../images/trash.png' alt="Bouton SUPPRIMER" width="50px"
                    height="50px" /></button>
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

export default DeleteMovie;
