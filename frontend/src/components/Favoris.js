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
                {data ? (
                    <img className="coeur" src='../images/coeur_rempli.png' alt="Favori" />

                ) : <img className="coeur" src='../images/coeur_vide.png' alt="Non Favori" />}
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
                    .then((jsonResponse) => {
                        this.setState({ favoris: jsonResponse[indice].favori }
                        )
                    }).catch(error => console.log('Error with Favoris! ' + error.message))
            }).catch(error => console.log('Error! ' + error.message))
    }

}

export default Favoris;
