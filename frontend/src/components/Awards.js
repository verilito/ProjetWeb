import React, { Component } from "react";


class Awards extends Component {
    constructor(props) {
        super(props);
        this.state = { date: {} };
    }

    render() {
        return (
            <div className="col-sm-6" >
                {" "}
                <p className='titre_widget'>Awards:{" "} </p>
                {this.props.value}

            </div>

        );
    }
}

export default Awards;
