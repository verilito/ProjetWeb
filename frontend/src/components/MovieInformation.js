import React, { Component } from "react";
import MovieCard from "./MovieCard";
import Navigation from "./Navigation";

const apiKey = "f676c67a";

class MovieInformation extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: {}, query: null };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fetchMovie(title) {
    fetch(
      // `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}`
      `http://www.omdbapi.com?&apikey=${apiKey}&t=${title}`
    )
      .then(response => response.json())
      .then(myJson => this.setState({ movie: myJson })); //movie: myJson.Search[0] 
  }

  render() {
    return (
      <div>
        <Navigation />
        <h1>Movie Informations </h1>
        < MovieCard movie={this.state.movie} />
      </div>
    );
  }

  componentDidMount() {
    //this.fetchMovie("Titanic");
    this.fetchMovie();
  }
}

export default MovieInformation;
