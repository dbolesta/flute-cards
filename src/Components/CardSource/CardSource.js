import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #1c1c1c;
  color: #1c1c1c;
  border-radius: 5px;
  height: 2.5rem;
  width: 2rem;
  margin: 0.15rem;
  background-color: white;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  vertical-align: bottom;
  cursor: pointer;

  &.highlight {
    /* border-color: red; */
    background-color: #f0f7b3;
    color: #1c1c1c;
  }

  ${({ black }) =>
    black &&
    `
      margin-bottom: 1rem;
      background-color: #1C1C1C;
      color: white;
      width: 2rem;
   `}
`;

const CardSource = ({
  addCard,
  note,
  setHoveredNote,
  hoveredNote
}) => {
  return (
    <Card
      onClick={() => addCard(note)}
      black={note.black}
      onMouseEnter={() => setHoveredNote(note)}
      onMouseLeave={() => setHoveredNote(null)}
      className={
        hoveredNote && hoveredNote.index === note.index
          ? 'highlight'
          : null
      }
    >
      {note.letters.map((letter, i) => {
        return <span key={i}>{letter}</span>;
      })}
    </Card>
  );
};

export default CardSource;
