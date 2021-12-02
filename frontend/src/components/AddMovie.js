import React, { Component } from "react";


class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "Venom", favori: 1, note: 3, genre: "Horror" };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    fetchMovie() {
        fetch(
            `http://localhost:5000/users/createMovie`
        )
            .then(response => response.json())
            .then(myJson => alert("Le film" + { myJson } + "a été ajouté")
            ).catch(error => console.log('Error! ' + error.message))
    }

    handleSubmit(event) {
        this.fetchMovie();
    }
    handleChange(event) {
        this.setState({ title: event.target.value });

    }


    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit} >
                    <label>
                        <input
                            type="text"
                            value={this.state.favori}
                            onChange={this.handleChange}
                            placeholder="Favori or not"
                            name="favori"
                        />
                        <input
                            type="text"
                            value={this.state.title}
                            onChange={this.handleChange}
                            placeholder="Add movie title"
                            name="title"
                        />
                        <input
                            type="text"
                            value={this.state.note}
                            onChange={this.handleChange}
                            placeholder="Movie average"
                            name="note"
                        />
                        <input
                            type="text"
                            value={this.state.genre}
                            onChange={this.handleChange}
                            placeholder="Add movie genre"
                            name="genre"
                        />
                    </label>
                    <input type="submit" value="Add a movie" />
                </form>

            </div>
        );
    }

}

export default AddMovie;
