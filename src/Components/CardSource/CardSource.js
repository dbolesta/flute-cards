import React from 'react';
import styled from 'styled-components';

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

  &.highlight {
    border-color: red;
  }

  ${({ black }) =>
    black &&
    `
      margin-bottom: 1rem;
      background-color: black;
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
      onMouseEnter={() => setHoveredNote(note.index)}
      onMouseLeave={() => setHoveredNote(null)}
      className={hoveredNote === note.index ? 'highlight' : null}
    >
      {note.letters.map((letter, i) => {
        return <span key={i}>{letter}</span>;
      })}
    </Card>
  );
};

export default CardSource;
