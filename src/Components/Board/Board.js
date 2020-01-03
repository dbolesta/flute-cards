import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import uuid from 'react-uuid';
import { Midi } from 'react-abc';
// midi params: https://github.com/fuhton/react-abc/blob/3e200fd1649b5cc762269b832da1e825333ce016/src/defaults/README.md#midi-params
// midi program number reference: https://en.wikipedia.org/wiki/General_MIDI

const BoardContainer = styled.div`
  border: 1px solid green;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 0 0 auto;
`;

const CardRow = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  border: 2px solid palevioletred;
  border-radius: 3px;
  min-height: 11.25rem;
  justify-content: flex-start;
  flex: 1 0 auto;
  position: relative;

  &.activeRow {
    border: 2px solid red;
  }

  span.row-controls {
    /* border: 2px solid palegreen; */
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    display: none;
  }

  &:hover span.row-controls {
    display: flex;
  }
`;

const NewRowButton = styled.div`
  border-radius: 5px;
  padding: 15px 25px;
  font-size: 22px;
  text-decoration: none;
  margin: 20px;
  color: #fff;
  position: relative;
  display: inline-block;
  cursor: pointer;

  &:active {
    transform: translate(0px, 5px);
    -webkit-transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
  }

  &.green {
    background-color: #2ecc71;
    box-shadow: 0px 5px 0px 0px #15b358;
  }

  &.green:hover {
    background-color: #48e68b;
  }
`;

const RemoveRowButton = styled.div`
  /* position: absolute;
  top: 0px;
  right: 0px;
  width: 2rem;
  height: 2rem; */
  width: 100%;
  background-color: black;
  color: white;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex: 1 0 auto;
  display: flex;
`;

const StyledMidi = styled(Midi)`
  display: flex;
  flex-direction: column;

  &.abcjs-midi-reset,
  &.abcjs-midi-progress-background,
  &.abcjs-midi-clock {
    display: none !important;
  }
`;
// styling for Midi component is located in App.css

const Board = ({
  cards,
  addRow,
  removeCard,
  activeRow,
  setActiveRow,
  removeRow
}) => {
  return (
    <>
      <h3>Flute Cards</h3>

      <BoardContainer>
        {/* loop through first dimension of array (rows) */}
        {cards.map((row, rowIndex) => {
          let rowNotation = '|:';
          {
            /* collect complete abc notation of all cards in row, so we can use it for midi */
          }
          {
            row.map(card => {
              rowNotation = rowNotation + card.midiCode;
            });
          }
          return (
            <CardRow
              key={uuid()}
              className={activeRow === rowIndex ? 'activeRow' : null}
              rowNotation={rowNotation}
              onClick={e => {
                {
                  /* update activeRow when row is clicked, first check if target matches */
                  /* maybe should extract this to its own function...? */
                }
                if (e.currentTarget !== e.target) return;
                setActiveRow(rowIndex);
              }}
            >
              {/* loop through each array (cards) */}
              {row.map((card, cardIndex) => {
                return (
                  <Card
                    key={uuid()}
                    card={card}
                    removeCard={removeCard}
                    cardIndex={cardIndex}
                    rowIndex={rowIndex}
                  />
                );
              })}

              <span className="row-controls">
                <RemoveRowButton onClick={() => removeRow(rowIndex)}>
                  x
                </RemoveRowButton>
                <Midi
                  midiParams={{
                    generateInline: true,
                    qpm: 80,
                    program: 74 /* 74 is flute, check "General MIDI" on wikipedia for full reference (73 piccolo might be better..) */,
                    inlineControls: { startPlaying: false }
                  }}
                  notation={rowNotation}
                />
              </span>
            </CardRow>
          );
        })}

        <NewRowButton className="green" onClick={() => addRow()}>
          New row!
        </NewRowButton>
      </BoardContainer>
    </>
  );
};

export default Board;
