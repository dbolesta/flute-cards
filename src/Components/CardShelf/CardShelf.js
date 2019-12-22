import React from 'react';
import CardSource from '../CardSource';
import Keyboard from '../Keyboard';
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
      <Keyboard notes={props.notes} />
      <h2>Flute Cards</h2>

      {props.notes.map((note, i) => (
        <React.Fragment key={uuid()}>
          <CardSource
            key={uuid()}
            note={note}
            index={i}
            addCard={props.addCard}
            setHoveredNote={props.setHoveredNote}
            hoveredNote={props.hoveredNote}
          />

          {/* put each register on its own line. */}
          {/* sloppy implementation... should probably restructure notes.js so each register is its own array? */}
          {note.index === 11 || note.index === 23 ? (
            <div style={{ display: 'block', height: '2rem' }}></div>
          ) : null}
        </React.Fragment>
      ))}
    </Shelf>
  );
};

export default CardShelf;
