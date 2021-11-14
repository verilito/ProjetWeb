import React from 'react';
import styled from 'styled-components';
import Palette from './palette';

const Card = styled.button`
height: 400px;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  white-space: nowrap;
	margin: 10px 5px;
	padding: 5px;
	background-color: ${Palette('Grey', 600)};
	color: ${Palette('White')};
	:hover {
		box-shadow: 0 0 0.75rem ${Palette('Secondary', 'dark')};
	}
`;

const CardText = styled.div`
	overflow: hidden;
	text-overflow: ellipsis;
`;

class Item extends React.Component {
    constructor(trackId, artworkUrl100) {
        this.trackId = trackId;
        this.artworkUrl100 = artworkUrl100;

    }

    render() {
        const { startMovie } = this.props;
        const { trackId } = this.state;
        return (
            <Card onClick={() => { startMovie(trackId) }}>

                <div>{trackId}</div>
                <div>
                    <img src={artworkUrl100} />
                </div>
            </Card>


        );
    }
}

export default Item;
