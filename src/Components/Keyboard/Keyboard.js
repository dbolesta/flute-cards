import React from 'react';
import styled from 'styled-components';
import './keyboard.scss';

// bless this beautiful boy:
// https://stackoverflow.com/questions/29656280/how-to-create-a-completely-flexible-piano-keyboard-with-html-and-css

const KeyboardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 5px solid #39d2fa; */
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

const Keyboard = ({
  notes,
  hoveredNote,
  setHoveredNote,
  addCard
}) => {
  return (
    <KeyboardContainer>
      <div className="keyboard">
        {notes.map(note => {
          const constructedClass =
            'key ' +
            (note.black ? 'black' : 'white') +
            ' ' +
            note.noteClass;

          return (
            <div
              className={constructedClass}
              onMouseEnter={() => setHoveredNote(note)}
              onMouseLeave={() => setHoveredNote(null)}
              onClick={() => addCard(note)}
              key={note.index}
            >
              {note.noteClass === 'c' ? (
                <span>{note.spn}</span>
              ) : null}
              {hoveredNote && hoveredNote.index === note.index ? (
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
