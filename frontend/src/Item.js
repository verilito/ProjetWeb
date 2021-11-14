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

function startMovie(trackId) {

    return trackId;
}
const Item = ({ kind, trackId, artistName, trackName, artworkUrl100 }) => (

    <Card onClick={() => window.location.href = "https://www.google.com"}>

        <div>{kind}</div>
        <div>{trackId}</div>
        <CardText>{artistName}</CardText>
        <CardText>{trackName}</CardText>
        <div>
            <img src={artworkUrl100} />
        </div>
    </Card>

);

export default Item;
