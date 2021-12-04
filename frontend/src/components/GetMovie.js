import React, { Component } from "react";

class GetMovie extends Component {
    render() {
        let data = this.props.movie;

        return (
            <div>
                <img className="poster" src={data.Poster} alt="Poster" />
            </div>
        );
    }

}

export default GetMovie;
