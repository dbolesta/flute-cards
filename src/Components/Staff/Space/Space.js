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
    height: 7px;
  }

  & span:nth-of-type(1) {
    flex: 3 0 auto;
  }
  & span:nth-of-type(2) {
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  & span:nth-of-type(3) {
    flex: 1 0 auto;
  }
`;

const WholeNoteImg = styled.img`
  /* height: 164%;
  margin-left: 14px; */
  width: 95%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Space = ({ setHoveredNote, hoveredNote, note, addCard }) => {
  return (
    <StyledSpace
      onMouseEnter={() => setHoveredNote(note)}
      onMouseLeave={() => setHoveredNote(null)}
      onClick={() => addCard(note)}
    >
      <span></span>
      <span>
        {hoveredNote && hoveredNote.index === note.index ? (
          <WholeNoteImg src={wholeNoteSVG} />
        ) : null}
      </span>
      <span></span>
    </StyledSpace>
  );
};

export default Space;
