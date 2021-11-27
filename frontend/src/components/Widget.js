import React, { Component } from "react";

class Widget extends Component {
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


export default Widget;
