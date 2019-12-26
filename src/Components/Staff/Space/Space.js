import React from 'react';
import styled from 'styled-components';

import wholeNoteSVG from '../../../Images/wholeNote.svg';

const StyledSpace = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & span {
    height: 5px;
  }

  & span:nth-of-type(1) {
    flex: 3 0 auto;
  }
  & span:nth-of-type(2) {
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & span:nth-of-type(3) {
    flex: 1 0 auto;
  }
`;

const WholeNoteImg = styled.img`
  height: 225%;
  margin-left: 14px;
`;

const Space = ({ setHoveredNote, hoveredNote, note, addCard }) => {
  return (
    <StyledSpace
      onMouseEnter={() => setHoveredNote(note.abcCode)}
      onMouseLeave={() => setHoveredNote(null)}
      onClick={() => addCard(note)}
    >
      <span></span>
      <span>
        {hoveredNote === note.abcCode ? (
          <WholeNoteImg src={wholeNoteSVG} />
        ) : null}
      </span>
      <span></span>
    </StyledSpace>
  );
};

export default Space;
