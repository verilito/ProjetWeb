import React, { Component } from "react";
import GetMovie from "./GetMovie";

const apiKey = "f676c67a";

class SearchMovie extends Component {
    constructor(props) {
        super(props);
        this.state = { movie: {}, query: null };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    fetchMovie(title) {
        fetch(
            `http://www.omdbapi.com?&apikey=${apiKey}&t=${title}`
        )
            .then(response => response.json())
            .then(myJson => this.setState({ movie: myJson }));
    }

    handleChange(event) {
        this.setState({ query: event.target.value });
        console.log(this.state.query);
    }

    handleSubmit(event) {
        this.fetchMovie(this.state.query);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input
                            type="text"
                            value={this.state.query}
                            onChange={this.handleChange}
                            placeholder="Search movie title"
                        />
                    </label>
                    <input type="submit" value="Search" />
                </form>
                <GetMovie movie={this.state.movie} />
            </div>
        );
    }

    componentDidMount() {
        this.fetchMovie("Titanic");
    }
}

export default SearchMovie;
