import React from 'react';
import CardSource from '../CardSource';
import styled from 'styled-components';

const Shelf = styled.div`
  border: 1px solid red;

  p {
  }
`;

const CardShelf = props => {
  return (
    <Shelf>
      <p>testing card shelf</p>
      {props.notes.map(note => (
        <CardSource note={note} />
      ))}
    </Shelf>
  );
};

export default CardShelf;
