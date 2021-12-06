import React, { useState } from "react";
import axios from "axios";

const apiKey = "f676c67a";

function AddFilm() {
    const [input, setInput] = useState({
        favori: '',
        title: '',
        note: ''
    })
    const enabled =
        input.title > 0 &&
        input.note > -1 && input.favori != 0 && 1;

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
                window.location.reload(true)
            })
            .catch(error => console.log('Error! ' + error.message))


    }
    return (
        <div>
            <header>
                <h2>Ajouter un film</h2>
            </header>
            <form>
                <fieldset>
                    <legend>Titre du film</legend>
                    <div className="form-group">
                        <input name="title" value={input.title} onChange={handleChange} className="form-control" placeholder="Entrez le titre du film"></input>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Note du film</legend>
                    <div className="form-group">

                        <input type="radio" name="note" value="0" onChange={handleChange} className="form-control" /><label>0</label>
                        <input type="radio" name="note" value="1" onChange={handleChange} className="form-control" /><label>1</label>
                        <input type="radio" name="note" value="2" onChange={handleChange} className="form-control" /><label>2</label>
                        <input type="radio" name="note" value="3" onChange={handleChange} className="form-control" /><label>3</label>
                        <input type="radio" name="note" value="4" onChange={handleChange} className="form-control" /><label>4</label>
                        <input type="radio" name="note" value="5" onChange={handleChange} className="form-control" /><label>5</label>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Mettre en favori</legend>
                    <div className="radio">

                        <input type="radio" name="favori" value="1" onChange={handleChange} className="form-control" /><label> <img src='../images/coeur_rempli.png' alt="Favori" /></label>
                        <input type="radio" name="favori" value="0" onChange={handleChange} className="form-control" placeholder="Favori (1) or not(0)" /><label> <img src='../images/broken_heart.png' alt="Non Favori" /></label>
                    </div>
                </fieldset>
                <button disabled={enabled} onClick={handleClick} className="btn btn-lg-info" className="boutonupdate"><img src='../images/save.png' alt="Bouton Ajoutez" width="50px"
                    height="50px" /></button>

            </form>

        </div>
    );
}



export default AddFilm;