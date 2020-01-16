import React from 'react';
import styled from 'styled-components';

import wholeNoteSVG from '../../../Images/wholeNote.svg';
import sharpSVG from '../../../Images/sharp.svg';

const StyledLine = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & span {
    margin: 2px 0;
  }

  & span:nth-of-type(1) {
    border-bottom: 1px solid black;
    flex: 3 0 auto;
    /* position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end; */
  }
  & span:nth-of-type(2) {
    border-bottom: 1px solid black;
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  & span:nth-of-type(3) {
    border-bottom: 1px solid black;
    flex: 1 0 auto;
  }
`;

const WholeNoteImg = styled.img`
  /* width: 95%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */
  width: 93%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
// const SharpImg = styled.img`
//   width: 75%;
//   position: absolute;
//   left: 0%;
//   top: 0%;
//   transform: translate(-50%, -50%);
// `;

const Line = ({ setHoveredNote, hoveredNote, note, addCard }) => {
  return (
    <StyledLine
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
    </StyledLine>
  );
};

export default Line;
