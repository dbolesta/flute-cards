import React from 'react';
import CardSource from '../CardSource';
import styled from 'styled-components';
import uuid from 'react-uuid';
import { nextTick } from 'q';

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
        <>
          <CardSource
            key={uuid()}
            note={note}
            index={i}
            addCard={props.addCard}
          />

          {note.index === 11 || note.index === 23 ? (
            <div style={{ display: 'block', height: '2rem' }}></div>
          ) : null}
        </>
      ))}
    </Shelf>
  );
};

export default CardShelf;
