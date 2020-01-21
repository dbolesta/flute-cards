import React from 'react';
import styled from 'styled-components';
import { isEven } from '../../Utils/utils';

import Line from './Line';
import Space from './Space';
import LedgerLine from './LedgerLine';

import trebleSVG from '../../Images/treble.svg';

const StaffContainer = styled.div`
  background-color: white;
  width: 11.5rem;
  display: inline-flex;
  position: absolute;
  top: 0;
  left: 0;
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
  margin-bottom: 4rem;
  padding-bottom: 2.85rem;
  margin-left: 0.2rem;
`;

const LineSpaceContainer = styled.div`
  border: 1px solid red;
  width: 100%;
  margin: 2rem;
  padding: 2rem 0;
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
            a second note to the component, which would be its "sharped" note (the next note in the object)
            this allows the components that have a sharp, display a way to select it on the staff
            uses `notes.find(data => data.index === noSharp.index + 1)` to find the sharped note
        */}

        {noSharps.map((noSharp, i) => {
          if (isEven(i)) {
            if (i === 0 || i > 10) {
              return (
                <LedgerLine
                  key={noSharp.index}
                  setHoveredNote={setHoveredNote}
                  note={noSharp}
                  addCard={addCard}
                  hoveredNote={hoveredNote}
                  staffHovered={staffHovered}
                  sharp={
                    noSharp.nextIsSharp
                      ? notes.find(
                          data => data.index === noSharp.index + 1
                        )
                      : null
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
                hoveredNote={hoveredNote}
                staffHovered={staffHovered}
                sharp={
                  noSharp.nextIsSharp
                    ? notes.find(
                        data => data.index === noSharp.index + 1
                      )
                    : null
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
                hoveredNote={hoveredNote}
                staffHovered={staffHovered}
                sharp={
                  noSharp.nextIsSharp
                    ? notes.find(
                        data => data.index === noSharp.index + 1
                      )
                    : null
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
