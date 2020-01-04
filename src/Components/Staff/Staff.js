import React from 'react';
import styled from 'styled-components';
import { isEven } from '../../Utils/utils';
import uuid from 'react-uuid';

import Line from './Line';
import Space from './Space';
import LedgerLine from './LedgerLine';

import trebleSVG from '../../Images/treble.svg';

const StaffContainer = styled.div`
  background-color: white;
  width: 244px;
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
  margin: 4rem;
  padding: 2rem 0;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
`;

const Staff = ({ notes, hoveredNote, setHoveredNote, addCard }) => {
  // create array of no sharp notes
  let noSharps = notes.filter(
    note => note.noteClass.indexOf('_sharp') === -1
  );

  return (
    <StaffContainer>
      <LineSpaceContainer>
        <SVGContainer>
          <TrebleContainer src={trebleSVG} />
        </SVGContainer>

        {noSharps.map((noSharp, i) => {
          if (isEven(i)) {
            if (i === 0 || i > 10) {
              return (
                <LedgerLine
                  setHoveredNote={setHoveredNote}
                  note={noSharp}
                  addCard={addCard}
                  hoveredNote={hoveredNote}
                  key={uuid()}
                />
              );
            }
            return (
              <Line
                setHoveredNote={setHoveredNote}
                note={noSharp}
                addCard={addCard}
                hoveredNote={hoveredNote}
                key={uuid()}
              />
            );
          } else {
            return (
              <Space
                setHoveredNote={setHoveredNote}
                note={noSharp}
                addCard={addCard}
                hoveredNote={hoveredNote}
                key={uuid()}
              />
            );
          }
        })}
      </LineSpaceContainer>
    </StaffContainer>
  );
};

export default Staff;
