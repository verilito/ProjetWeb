import React, { Component } from "react";


class Titre extends Component {
    constructor(props) {
        super(props);
        this.state = { titre: {} };
    }

    render() {
        return (
            <p>{this.props.value}</p>
        );
    }
}


export default Titre;
