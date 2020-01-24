import React from 'react';
import Card from '../Card';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Midi } from 'react-abc';
// midi params: https://github.com/fuhton/react-abc/blob/3e200fd1649b5cc762269b832da1e825333ce016/src/defaults/README.md#midi-params
// midi program number reference: https://en.wikipedia.org/wiki/General_MIDI

const OuterContainer = styled.div`
  /* border: 1px solid white; */
  margin: 0.25rem;
`;

const RowContainer = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  /* border: 2px solid palevioletred; */
  border-radius: 5px;
  overflow: hidden;
  min-height: 11.25rem;
  justify-content: flex-start;
  flex: 1 0 auto;
  position: relative;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  transition: background-color 0.25s ease-in-out;

  &.activeRow {
    /* border: 2px solid red; */
    background-color: rgba(255, 255, 255, 0.4);

    &:after {
      ${({ rowNotation }) =>
        rowNotation.length <= 2 &&
        `
          content: 'Click a note above to add a Card';
          color: black;
          position: absolute;
          height: 100%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: -1;
      `}
    }
  }

  span.row-controls {
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    display: none;
  }

  &:hover span.row-controls {
    display: flex;
  }
`;

const RemoveRowButton = styled.div`
  /* width: 100%; */
  /* height: 100%; */
  width: 3rem;
  background-color: black;
  color: white;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex: 1 0 auto;
  display: flex;
`;

const RowHandle = styled.div`
  background-color: green;
  width: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    width: 60%;
    height: 3px;
    position: relative;
    margin: 2px 0;
    /* transform-origin: 1px center; */
    background: black;
    border-radius: 10px;
  }
`;

// styling for Midi component is located in App.css

// function used to try and memoize Cards? increase performance?
// loop for cards is moved here, was previously where InnerCards is within CardRow function
const InnerCards = React.memo(
  ({ row, removeCard, rowIndex, uuids }) => {
    return row.map((card, cardIndex) => (
      <Card
        key={cardIndex + card.index + card.abcCode}
        card={card}
        removeCard={removeCard}
        cardIndex={cardIndex}
        rowIndex={rowIndex}
        uuids={uuids}
      />
    ));
  }
);

const CardRow = ({
  removeCard,
  activeRow,
  setActiveRow,
  removeRow,
  row,
  rowIndex,
  rowNotation,
  uuids
}) => {
  return (
    <Draggable draggableId={rowNotation + rowIndex} index={rowIndex}>
      {provided => (
        <OuterContainer
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          <Droppable
            droppableId={'' + rowIndex}
            type="card"
            direction="horizontal"
          >
            {(provided, snapshot) => (
              <RowContainer
                className={
                  activeRow === rowIndex ? 'activeRow' : null
                }
                rowNotation={rowNotation}
                onClick={e => {
                  /* update activeRow when row is clicked, first check if target matches */
                  /* maybe should extract this to its own function...? */
                  if (e.currentTarget !== e.target) return; // need to click on empty space in row
                  setActiveRow(rowIndex);
                }}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {/* loop through each array (cards) */}
                {/* deferred to second function so we can memoize? */}
                <InnerCards
                  row={row}
                  removeCard={removeCard}
                  rowIndex={rowIndex}
                  uuids={uuids}
                />

                <span className="row-controls">
                  <RemoveRowButton
                    onClick={() => removeRow(rowIndex)}
                  >
                    x
                  </RemoveRowButton>
                  <Midi
                    midiParams={{
                      generateInline: true,
                      qpm: 80,
                      program: 73 /* 74 is flute, check "General MIDI" on wikipedia for full reference (73 piccolo might be better..) */,
                      inlineControls: { startPlaying: false }
                    }}
                    notation={rowNotation}
                  />
                  <RowHandle>
                    <span />
                    <span />
                    <span />
                  </RowHandle>
                </span>
                {provided.placeholder}
              </RowContainer>
            )}
          </Droppable>
        </OuterContainer>
      )}
    </Draggable>
  );
};

export default React.memo(CardRow);
