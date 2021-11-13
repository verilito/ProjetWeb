import React from 'react';
import Item from './Item';
import styled from 'styled-components';

const Liste = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex: 0 1 auto;
	padding-top: 200px;
`;
const Widget1 = ({ movie }) => {
    const itemsArray = movie.map((item, index) => <Item key={index} {...item} />);
    return <Liste>{itemsArray}</Liste>;
};

export default Widget1;