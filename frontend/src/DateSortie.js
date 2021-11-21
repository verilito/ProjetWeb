import React, { Component } from "react";

class DateSortie extends Component {
    constructor(props) {
        super(props);
        this.state = { date: {} };
    }

    render() {
        return (
            <div className="col-sm-6">
                {" "}
                Original Release:{" "}
                {this.props.value}
            </div>

        );
    }
}


export default DateSortie;
