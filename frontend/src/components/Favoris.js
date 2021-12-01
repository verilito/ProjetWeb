import React, { Component } from "react";

class Favoris extends Component {
    constructor() {
        super();
        this.state = { favoris: [] };
    }

    render() {
        let data = this.state.favoris;
        console.log(data);
        //let updateBoolNumber = Number(data);
        return (
            <div>
                <h1>Favoris</h1>
                {data ? (
                    <img className="coeur" src='../images/coeurnoir.png' alt="Favori" />

                ) : <img className="coeur" src='../images/coeurblanc.png' alt="Non Favori" />}
            </div>
        );
    }

    componentDidMount() {
        fetch(`http://localhost:5000/users/`)
            .then((response) => response.json())
            .then((jsonResponse) => {
                this.setState({ favoris: jsonResponse[0].favori }
                )
            }).catch(error => console.log('Error with Favoris! ' + error.message))

    }

}

export default Favoris;
