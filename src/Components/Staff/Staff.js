import React from 'react';
import styled from 'styled-components';
import { isEven } from '../../Utils/utils';

import Line from './Line';
import Space from './Space';
import LedgerLine from './LedgerLine';

import trebleSVG from '../../Images/treble.svg';

const StaffContainer = styled.div`
  background-color: white;
  width: 9.5rem;
  display: inline-flex;
  box-shadow: 0px 0px 0px 5px ${props => props.theme.eighties.blue};
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;

const TrebleContainer = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
`;
const SVGContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 23%;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  margin-left: 0.2rem;
`;

const LineSpaceContainer = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  margin: 1rem;
  padding: 1rem 0;
  position: relative;
  display: flex;
  flex-direction: column-reverse; /* i love flexbox lmao */
`;

const Staff = ({
  notes,
  hoveredNote,
  setHoveredNote,
  addCard,
  staffHovered,
  setStaffHovered
}) => {
  // create array of no sharp notes
  let noSharps = notes.filter(
    note => note.noteClass.indexOf('_sharp') === -1
  );
  // also all sharps
  let sharps = notes.filter(
    note => note.noteClass.indexOf('_sharp') !== -1
  );
  // as we loop through, we will incremement this is we find a note where nextIsSharp
  let sharpIndex = -1; // start at -1 because incremement needs to happen at the top of the loop (see below)

  return (
    <StaffContainer
      onMouseEnter={() => setStaffHovered(true)}
      onMouseLeave={() => setStaffHovered(false)}
    >
      <LineSpaceContainer>
        <SVGContainer>
          <TrebleContainer src={trebleSVG} />
        </SVGContainer>

        {/* 
            this loop uses the `notes` objects nextIsSharp prop to determine if it should pass along
            a `sharp` object from the `sharps` array, 
            this allows the components that have a sharp to display a way to select it on the staff
        */}

        {/* 
          explination of some of the more confusing props
          hovered:      will pass boolean
                        checks if `hoveredNote` exists, and if its index matches that current note
                        we do this so we dont need to pass the whole object
          hoveredSharp: also passes boolean
                        same as above but just checks if hoveredNote index matches sharp note
          staffHovered: boolean
                        true if were hovering over the Staff, used so we can only show greyed sharp note
                        when hovering over staff
          sharp:        passes the next index of `sharps` if the `noSharp` note has a `nextIsSharp` prop

        */}

        {noSharps.map((noSharp, i) => {
          if (noSharp.nextIsSharp) sharpIndex++; // need to incremement at the beginning, which is why sharpIndex starts at -1
          if (isEven(i)) {
            if (i === 0 || i > 10) {
              return (
                <LedgerLine
                  key={noSharp.index}
                  setHoveredNote={setHoveredNote}
                  note={noSharp}
                  addCard={addCard}
                  hovered={
                    hoveredNote && hoveredNote.index === noSharp.index
                  }
                  hoveredSharp={
                    hoveredNote &&
                    noSharp.nextIsSharp &&
                    hoveredNote.index === sharps[sharpIndex].index
                  }
                  staffHovered={staffHovered}
                  sharp={
                    noSharp.nextIsSharp ? sharps[sharpIndex] : null
                  }
                />
              );
            }
            return (
              <Line
                key={noSharp.index}
                setHoveredNote={setHoveredNote}
                note={noSharp}
                addCard={addCard}
                hovered={
                  hoveredNote && hoveredNote.index === noSharp.index
                }
                hoveredSharp={
                  hoveredNote &&
                  noSharp.nextIsSharp &&
                  hoveredNote.index === sharps[sharpIndex].index
                }
                staffHovered={staffHovered}
                sharp={
                  noSharp.nextIsSharp ? sharps[sharpIndex] : null
                }
              />
            );
          } else {
            return (
              <Space
                key={noSharp.index}
                setHoveredNote={setHoveredNote}
                note={noSharp}
                addCard={addCard}
                hovered={
                  hoveredNote && hoveredNote.index === noSharp.index
                }
                hoveredSharp={
                  hoveredNote &&
                  noSharp.nextIsSharp &&
                  hoveredNote.index === sharps[sharpIndex].index
                }
                staffHovered={staffHovered}
                sharp={
                  noSharp.nextIsSharp ? sharps[sharpIndex] : null
                }
              />
            );
          }
        })}
      </LineSpaceContainer>
    </StaffContainer>
  );
};

export default Staff;
