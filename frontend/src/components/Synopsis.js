import React, { Component } from "react";


class Synopsis extends Component {
    constructor(props) {
        super(props);
        this.state = { duree: {} };
    }

    render() {
        return (
            <div className="col-sm-6" >
                {" "}
                <p className='titre_widget'>Synopsis:{" "} </p>
                {this.props.value}

            </div>

        );
    }
}


export default Synopsis;
