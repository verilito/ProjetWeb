import React, { Component } from "react";
import '../styles/mon_profil_style.css';
import axios from "axios";

const apiKey = "f676c67a";

class UpdateMovie extends Component {
    constructor() {
        super();
        this.state = { movie: {}, id: '', note: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        let idF = this.state.id;
        axios.patch('http://localhost:5000/users/' + idF, { note: this.state.note });

    }
    handleChange(event) {
        this.setState({ note: event.target.value });
    }
    render() {

        return (
            <div>
                <h3>{this.state.movie.Title}</h3>

                <img className="poster" src={this.state.movie.Poster} alt="Poster" />
                <form>
                    <div className="form-group">
                        <input name="note" value={this.state.note} onChange={this.handleChange} className="form-control" placeholder="Entez une nouvelle note"></input>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-lg-info">Modifiez le film</button>
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
                        this.setState({ id: jsonResponse[indice]._id })
                        fetch(`http://www.omdbapi.com?&apikey=${apiKey}&t=${titre}`)
                            .then(response => response.json())
                            .then(myJson => this.setState({ movie: myJson }))
                    }).catch(error => console.log('Error! ' + error.message))
            }).catch(error => console.log('Error! ' + error.message))
    }

}

export default UpdateMovie;
