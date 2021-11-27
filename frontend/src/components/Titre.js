import React, { Component } from "react";



class Titre extends Component {
    constructor(props) {
        super(props);
        this.state = { titre: {} };
    }

    render() {
        return (
            <h1 id='titre_film'>{this.props.value}</h1>
        );
    }
}


export default Titre;
