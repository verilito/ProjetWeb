import React, { Component } from "react";
import '../styles/mon_profil_style.css';
import axios from "axios";

const apiKey = "f676c67a";

class UpdateMovie extends Component {
    constructor() {
        super();
        this.state = { movie: {}, id: '', note: [] };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        let idF = this.state.id;
        axios.patch('http://localhost:5000/users/' + idF, { note: this.state.note });
        window.location.reload(true);
    }
    handleChange(event) {
        this.setState({ note: event.target.value });
    }
    render() {
        const enabled = this.state.note > 5 || this.state.note < 0

        return (
            <div>
                <h3>Titre: {this.state.movie.Title}</h3>


                <img className="poster" src={this.state.movie.Poster} alt="Poster" height="160px" />
                <h3>Note actuelle: {this.state.note}</h3>
                <form>
                    <fieldset>
                        <legend>Nouvelle note</legend>
                        <div className="form-group">
                            <input type="radio" name="note" value="0" onChange={this.handleChange} className="form-control" /><label>0</label>
                            <input type="radio" name="note" value="1" onChange={this.handleChange} className="form-control" /><label>1</label>
                            <input type="radio" name="note" value="2" onChange={this.handleChange} className="form-control" /><label>2</label>
                            <input type="radio" name="note" value="3" onChange={this.handleChange} className="form-control" /><label>3</label>
                            <input type="radio" name="note" value="4" onChange={this.handleChange} className="form-control" /><label>4</label>
                            <input type="radio" name="note" value="5" onChange={this.handleChange} className="form-control" /><label>5</label>

                        </div>
                    </fieldset>
                    <button onClick={this.handleClick} disabled={enabled} className="btn btn-lg-info" className="boutonCrud"><img className="imageCrud" src='../images/save.png' alt="Bouton Ajoutez" /></button>
                </form>
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
                        const noteF = jsonResponse[indice].note;
                        this.setState({ note: noteF })
                        this.setState({ id: jsonResponse[indice]._id })
                        fetch(`http://www.omdbapi.com?&apikey=${apiKey}&t=${titre}`)
                            .then(response => response.json())
                            .then(myJson => this.setState({ movie: myJson }))
                    }).catch(error => console.log('Error! ' + error.message))
            }).catch(error => console.log('Error! ' + error.message))
    }

}

export default UpdateMovie;
