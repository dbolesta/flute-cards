import React from 'react';
import styled from 'styled-components';
import './keyboard.scss';
import notes from '../../notes';

// bless this beautiful boy:
// https://stackoverflow.com/questions/29656280/how-to-create-a-completely-flexible-piano-keyboard-with-html-and-css

const KeyboardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NoteHighlight = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: red;
  bottom: 15px;
  margin: auto;
`;

const Keyboard = ({ notes, hoveredNote }) => {
  return (
    <KeyboardContainer>
      <div
        className="keyboard"
        onMouseOver={e => console.log(e.target.dataset.note)}
      >
        {notes.map(note => {
          const constructedClass =
            'key ' +
            (note.black ? 'black' : 'white') +
            ' ' +
            note.noteClass;

          return (
            <div className={constructedClass}>
              {note.noteClass === 'c' ? (
                <span>{note.spn}</span>
              ) : null}
              {note.abcCode === hoveredNote ? (
                <NoteHighlight />
              ) : null}
            </div>
          );
        })}
      </div>
    </KeyboardContainer>
  );
};

export default Keyboard;
