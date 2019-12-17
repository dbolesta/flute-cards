import React from 'react';
import CardSource from '../CardSource';
import styled from 'styled-components';
import uuid from 'react-uuid';

const Shelf = styled.div`
  border: 1px solid red;

  p {
  }
`;

const CardShelf = props => {
  return (
    <Shelf>
      <p>testing card shelf</p>
      {props.notes.map((note, i) => (
        <CardSource
          key={uuid()}
          note={note}
          index={i}
          addCard={props.addCard}
        />
      ))}
    </Shelf>
  );
};

export default CardShelf;
