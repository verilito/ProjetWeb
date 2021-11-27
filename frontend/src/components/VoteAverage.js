import React, { Component } from "react";


class VoteAverage extends Component {
    constructor(props) {
        super(props);
        this.state = { date: {} };
    }

    render() {
        return (
            <div className="col-sm-6" >
                {" "}
                Original Release:{" "}
                {this.props.value}

            </div>

        );
    }
}


export default VoteAverage;
