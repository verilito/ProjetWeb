import React, { Component } from "react";


class Duree extends Component {
    constructor(props) {
        super(props);
        this.state = { duree: {} };
    }

    render() {
        return (
            <div className="col-sm-6" >
                {" "}
                <p className='titre_widget'>Durée:{" "} </p>
                {this.props.value}

            </div>

        );
    }
}


export default Duree;
