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
const SharpImg = styled.img`
  width: 48%;
  position: absolute;
  left: -35%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: ${(props) => (props.staffHovered ? 0.2 : 0)};

  &:hover {
    opacity: 1;
  }

  /* 
     here we check if the sharp img should be dark, which means the current hovered note
     is a sharped note 
  */
  ${({ hoveredSharp }) =>
    hoveredSharp &&
    `
    opacity: 1;
  `}
`;

const Line = ({
  setHoveredNote,
  hovered,
  hoveredSharp,
  note,
  addCard,
  sharp,
  staffHovered,
}) => {
  return (
    <StyledLine
      onMouseEnter={() => setHoveredNote(note)}
      onMouseLeave={() => setHoveredNote(null)}
      onClick={() => addCard(note)}
    >
      {/* 
        each line / space is broken up into 3 sections (spans), where the notes are displayed on the middle one
        and spaced used flexbox, so the middle note is more towards the right (to give the treble clef space)

        first we check `hovered || hoveredSharp`
          this means we should display the whole note

        second we check `(hovered || hoveredSharp) && (note.nextIsSharp || sharp)`
          this means we are either hovering over a sharp note or the note has a sharp note
          in which case, we should display a sharp note
      */}

      <span></span>
      <span>
        {hovered || hoveredSharp ? (
          <WholeNoteImg src={wholeNoteSVG} />
        ) : null}

        {(hovered || hoveredSharp) && (note.nextIsSharp || sharp) ? (
          <SharpImg
            src={sharpSVG}
            onMouseEnter={() => setHoveredNote(sharp)}
            onMouseLeave={() => setHoveredNote(note)}
            onPointerUp={(e) => {
              e.stopPropagation(); // important, so we dont add the regular note too
              addCard(sharp);
            }}
            staffHovered={staffHovered}
            hoveredSharp={hoveredSharp}
          />
        ) : null}
      </span>
      <span></span>
    </StyledLine>
  );
};

export default React.memo(Line);
