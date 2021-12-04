import React, { Component } from "react";

class NombreFilms extends Component {
    constructor() {
        super();
        this.state = { nombreFilms: [] };
    }

    render() {
        let data = this.state.nombreFilms;
        return (
            <div>
                <h2>{data}</h2>
            </div>
        );
    }

    componentDidMount() {
        fetch(`http://localhost:5000/users/countMovies`)
            .then((response) => response.json())
            .then((jsonResponse) => {
                this.setState({ nombreFilms: jsonResponse })
            }).catch(error => console.log('Error! ' + error.message))

    }

}

export default NombreFilms;
