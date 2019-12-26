import React from 'react';
import styled from 'styled-components';

import wholeNoteSVG from '../../../Images/wholeNote.svg';

const StyledLedgerLine = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & span {
    margin: 3px 0;
  }

  & span:nth-of-type(1) {
    border-bottom: 1px solid transparent;
    flex: 3 0 auto;
  }
  & span:nth-of-type(2) {
    border-bottom: 1px solid black;
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & span:nth-of-type(3) {
    border-bottom: 1px solid transparent;
    flex: 1 0 auto;
  }
`;

const WholeNoteImg = styled.img`
  height: 161%;
  position: absolute;
  margin-top: 1px;
`;

const LedgerLine = ({
  setHoveredNote,
  hoveredNote,
  note,
  addCard
}) => {
  return (
    <StyledLedgerLine
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
    </StyledLedgerLine>
  );
};

export default LedgerLine;
