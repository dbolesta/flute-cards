import React from 'react';
import styled from 'styled-components';

const StyledLine = styled.div`
  border-bottom: 1px solid black;
  margin: 2px 0;
  display: block;
  width: 100%;
  position: relative;
  cursor: pointer;
`;

const Line = ({ setHoveredNote, note, addCard }) => {
  return (
    <StyledLine
      onMouseEnter={() => setHoveredNote(note.abcCode)}
      onMouseLeave={() => setHoveredNote(null)}
      onClick={() => addCard(note)}
    ></StyledLine>
  );
};

export default Line;
