import React, { Component } from "react";
import './search.css';

class Search extends Component {
    handleChange(event) {
        event.target.select();
    }
    render() {
        return (
            <div className="col-xs-12 search-container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-lg-7">
                        <form className="searchbox">
                            <input
                                ref="search suggestion"
                                onClick={this.handleChange}
                                className="typeahead form-control"
                                type="text"
                                placeholder="Search Movie Title..."
                            />

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Search;