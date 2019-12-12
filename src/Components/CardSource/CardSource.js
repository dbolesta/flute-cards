import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  height: 3rem;
  width: 3rem;
  margin: 0.15rem;
  background-color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const CardSource = props => {
  return <Card>{props.note}</Card>;
};

export default CardSource;
