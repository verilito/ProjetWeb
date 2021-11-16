import React from 'react';
import Header from './Header';
import ItemsList from './ItemsList';
import Widget1 from './Widget1';
import Item from './Item';
import styled, { createGlobalStyle } from 'styled-components';
import { itunesApiRequest } from './utils';
import Palette from './palette';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
		margin: 0;
		background-color: ${Palette('Grey', 800)};
  }
`;
const Content = styled.div`
	width: 100%;
	height: 100%;
`;
//  

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchResults: [], searchMovie: [] };
        this.updateSearch = this.updateSearch.bind(this);
        this.updateMovie = this.updateMovie.bind(this);
    }

    async updateSearch(text) {
        const response = await itunesApiRequest(text);
        console.log(text);
        this.setState({ searchResults: response.results });
    }
    async updateMovie(trackId) {
        const response2 = await itunesApiRequest(trackId);
        console.log(trackId);
        this.setState({ searchMovie: response2.results });
    }

    render() {
        const { searchResults } = this.state;
        const { searchMovie } = this.state;

        return (
            <>
                <GlobalStyle />
                <Content>
                    <Header startSearch={this.updateSearch} />
                    <ItemsList items={searchResults} />
                    <Item startMovie={this.updateMovie} />
                    <Widget1 movie={searchMovie} />

                </Content>
            </>
        );
    }
}

export default App;