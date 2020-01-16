import React from 'react';
import Card from '../Card';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Midi } from 'react-abc';
// midi params: https://github.com/fuhton/react-abc/blob/3e200fd1649b5cc762269b832da1e825333ce016/src/defaults/README.md#midi-params
// midi program number reference: https://en.wikipedia.org/wiki/General_MIDI

const OuterContainer = styled.div`
  border: 1px solid white;
`;

const RowContainer = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  border: 2px solid palevioletred;
  border-radius: 3px;
  min-height: 11.25rem;
  justify-content: flex-start;
  flex: 1 0 auto;
  position: relative;
  width: 100%;

  &.activeRow {
    border: 2px solid red;
  }

  span.row-controls {
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

const RemoveRowButton = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex: 1 0 auto;
  display: flex;
`;

// styling for Midi component is located in App.css

const CardRow = ({
  removeCard,
  activeRow,
  setActiveRow,
  removeRow,
  row,
  rowIndex,
  rowNotation
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
                {row.map((card, cardIndex) => {
                  return (
                    <Card
                      key={cardIndex + card.index + card.abcCode}
                      card={card}
                      removeCard={removeCard}
                      cardIndex={cardIndex}
                      rowIndex={rowIndex}
                    />
                  );
                })}

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

export default CardRow;
