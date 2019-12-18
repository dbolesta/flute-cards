import React from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';

const Card = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  height: 4rem;
  width: 3rem;
  margin: 0.15rem;
  background-color: white;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  vertical-align: bottom;
  cursor: pointer;

  ${({ black }) =>
    black &&
    `
      margin-bottom: 1rem;
      background-color: black;
      color: white;
      width: 2rem;
      
   `}
`;

const CardSource = props => {
  return (
    <Card
      onClick={() => props.addCard(props.note)}
      black={props.note.black}
    >
      {props.note.letters.map((letter, i) => {
        return <span key={uuid()}>{letter}</span>;
      })}
    </Card>
  );
};

export default CardSource;
