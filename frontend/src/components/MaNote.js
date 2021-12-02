import React, { Component } from "react";

class MaNote extends Component {
    constructor() {
        super();
        this.state = { note: [] };
    }

    render() {
        let data = this.state.note;
        return (
            <div>
                <h1>Ma note</h1>
                <h2>{data}</h2>
            </div>
        );
    }

    componentDidMount() {

        fetch(`http://localhost:5000/users/countMovies`)
            .then((response1 => response1.json()))
            .then((jsonResponse) => {
                const indice = Number(jsonResponse) - 1;
                fetch(`http://localhost:5000/users/`)
                    .then((response) => response.json())
                    .then((jsonResponse2) => {
                        this.setState({ note: jsonResponse2[indice].note })
                    }).catch(error => console.log('Error! ' + error.message))
            }).catch(error => console.log('Error! ' + error.message))
    }
}

export default MaNote;
