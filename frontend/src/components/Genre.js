import React, { Component } from "react";


class Genre extends Component {
    constructor(props) {
        super(props);
        this.state = { genre: {} };
    }

    render() {
        return (
            <div className="col-sm-6" id='genre_film' >
                {" "}
                <p className='titre_widget'>Genre:{" "} </p>
                {this.props.value}

            </div>

        );
    }
}


export default Genre;
