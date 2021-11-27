import React, { Component } from "react";


class BoxOffice extends Component {
    constructor(props) {
        super(props);
        this.state = { date: {} };
    }

    render() {
        return (
            <div className="col-sm-6" >
                {" "}
                <p className='titre_widget'>Box-Office:{" "} </p>
                {this.props.value}

            </div>

        );
    }
}


export default BoxOffice;
