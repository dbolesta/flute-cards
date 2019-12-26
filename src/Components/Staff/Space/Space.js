import React from 'react';
import styled from 'styled-components';

const StyledSpace = styled.div`
  height: 6px;
  display: block;
  width: 100%;
  position: relative;
  cursor: pointer;
`;

const Space = ({ setHoveredNote, note, addCard }) => {
  return (
    <StyledSpace
      onMouseEnter={() => setHoveredNote(note.abcCode)}
      onMouseLeave={() => setHoveredNote(null)}
      onClick={() => addCard(note)}
    ></StyledSpace>
  );
};

export default Space;
