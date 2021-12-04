import React, { useState } from "react";
import axios from "axios";

function AddFilm() {
    const [input, setInput] = useState({
        favori: '',
        title: '',
        note: '',
        genre: ''
    })

    function handleChange(event) {
        const { name, value } = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        const newMovie = {
            favori: input.favori,
            title: input.title,
            note: input.note,
            genre: input.note
        }
        axios.post('http://localhost:5000/users/createMovie', newMovie)
    }
    return (
        <div>
            <header>
                <h2>Ajouter un film</h2>
            </header>
            <form>
                <div className="form-group">
                    <input name="favori" value={input.favori} onChange={handleChange} className="form-control" placeholder="Favori (1) or not(0)"></input>
                </div>
                <div className="form-group">
                    <input name="title" value={input.title} onChange={handleChange} className="form-control" placeholder="Add movie title"></input>
                </div>
                <div className="form-group">
                    <input name="note" value={input.note} onChange={handleChange} className="form-control" placeholder="Add movie average"></input>
                </div>
                <div className="form-group">
                    <input name="genre" value={input.genre} onChange={handleChange} className="form-control" placeholder="Add movie genre"></input>
                </div>
                <button onClick={handleClick} className="btn btn-lg-info">Add a movie</button>
            </form>

        </div>
    );
}



export default AddFilm;