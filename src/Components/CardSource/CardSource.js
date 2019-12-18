import React from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';

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
  vertical-align: bottom;

  ${({ black }) =>
    black &&
    `
      margin-bottom: 1rem;
      background-color: black;
      color: white;
   `}
`;

const CardSource = props => {
  return (
    <Card
      onClick={() => props.addCard(props.note)}
      black={props.note.black}
    >
      {props.note.letters.map((letter, i) => {
        return (
          <span key={uuid()}>
            {i !== 0 ? ' / ' + letter : letter}
            {console.log(props.note.black)}
          </span>
        );
      })}
    </Card>
  );
};

export default CardSource;
