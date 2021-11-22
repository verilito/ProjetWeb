import React, { Component } from "react";
import MovieCard from "./MovieCard";

//const apiKey = "6f8f5ded34fa534314a23fa7d705681b";
const apiKey = "a0a96d32";

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

  handleChange(event) {
    this.setState({ query: event.target.value });
    console.log(this.state.query);
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.query);
    this.fetchMovie(this.state.query);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Movie App </h1>
        <form onSubmit={this.handleSubmit} >
          <label>
            <input
              type="text"
              value={this.state.query}
              onChange={this.handleChange}
              placeholder="Search movie title"
            />
          </label>
          <input type="image" id="image" alt="Search" height="30px" width="30px" src="/images/search.png" />
        </form>
        < MovieCard movie={this.state.movie} />
      </div>
    );
  }

  componentDidMount() {
    this.fetchMovie("Titanic");
  }
}

export default MovieInformation;
