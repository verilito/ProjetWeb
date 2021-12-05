import React, { useState } from "react";
import axios from "axios";

const apiKey = "f676c67a";

function AddFilm() {
    const [input, setInput] = useState({
        favori: '',
        title: '',
        note: ''
    })

    function handleChange(event) {
        const { name, value } = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        }
        )

    }

    function handleClick(event) {
        event.preventDefault();

        fetch(`http://www.omdbapi.com?&apikey=${apiKey}&t=${input.title}`)
            .then(response => response.json())
            .then((myJson) => {
                const genreF = myJson.Genre;
                const newMovie = {
                    favori: input.favori,
                    title: input.title,
                    note: input.note,
                    genre: genreF
                }
                axios.post('http://localhost:5000/users/createMovie', newMovie)
            })
            .catch(error => console.log('Error! ' + error.message))


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

                <button onClick={handleClick} className="btn btn-lg-info">Ajouter un film</button>
            </form>

        </div>
    );
}



export default AddFilm;