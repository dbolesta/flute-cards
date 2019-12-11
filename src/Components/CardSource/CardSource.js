import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 1.25rem;
  height: 1rem;
  width: 1rem;
  background-color: white;
  display: inline-block;
`;

const CardSource = props => {
  return <Card>{props.note}</Card>;
};

export default CardSource;
