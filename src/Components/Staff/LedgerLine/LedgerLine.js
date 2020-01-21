import React from 'react';
import styled from 'styled-components';

import wholeNoteSVG from '../../../Images/wholeNote.svg';
import sharpSVG from '../../../Images/sharp.svg';

const StyledLedgerLine = styled.div`
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
    border-bottom: 1px solid transparent;
    flex: 3 0 auto;
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
    border-bottom: 1px solid transparent;
    flex: 1 0 auto;
  }
`;

const WholeNoteImg = styled.img`
  width: 93%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const SharpImg = styled.img`
  width: 48%;
  position: absolute;
  left: -35%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.2;

  &:hover {
    opacity: 1;
  }

  /* 
     here we check if the sharp img should be dark, which means the current hovered note
     is a sharped note 
  */

  ${({ sharp, hoveredNote }) =>
    sharp.index === hoveredNote.index &&
    `
    opacity: 1;
  `}
`;

const LedgerLine = ({
  setHoveredNote,
  hoveredNote,
  note,
  addCard,
  sharp
}) => {
  return (
    <StyledLedgerLine
      onMouseEnter={() => setHoveredNote(note)}
      onMouseLeave={() => setHoveredNote(null)}
      onClick={() => addCard(note)}
    >
      {/* 
        a bit more complicated that I would like, but
        each line / space is broken up into 3 sections (spans), where the notes are displayed on the middle one
        and spaced used flexbox, so the middle note is more towards the right ( to give the treble clef space)

        within those middle spans, a check is performed:
          (hoveredNote && hoveredNote.index === note.index)
        this simply checks if a hoveredNote exists, and if its index matches, so we can show the note
        we also check for the `sharp` note, because if we show the sharp img, we also want to show the note next to it
      */}

      <span></span>
      <span>
        {(hoveredNote && hoveredNote.index === note.index) ||
        (hoveredNote &&
          sharp &&
          hoveredNote.index === sharp.index) ? (
          <WholeNoteImg src={wholeNoteSVG} />
        ) : null}

        {/* 
          in the event that a sharp note is passesed, we want to display the sharp svg next to the note
          we will show if there is a `nextIsSharp` on the hovered note,
          or if the current hovered note is the sharp notes index
         */}

        {(hoveredNote &&
          hoveredNote.index === note.index &&
          hoveredNote.nextIsSharp) ||
        (hoveredNote &&
          sharp &&
          hoveredNote.index === sharp.index) ? (
          <SharpImg
            src={sharpSVG}
            onMouseEnter={() => setHoveredNote(sharp)}
            onMouseLeave={() => setHoveredNote(note)}
            onClick={e => {
              e.stopPropagation(); // important, so we dont add the regular note too
              addCard(sharp);
            }}
            sharp={sharp}
            hoveredNote={hoveredNote}
          />
        ) : null}
      </span>
      <span></span>
    </StyledLedgerLine>
  );
};

export default LedgerLine;
