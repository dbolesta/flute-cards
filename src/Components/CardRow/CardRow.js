import React from 'react';
import Card from '../Card';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import { Midi } from 'react-abc';
// midi params: https://github.com/fuhton/react-abc/blob/3e200fd1649b5cc762269b832da1e825333ce016/src/defaults/README.md#midi-params
// midi program number reference: https://en.wikipedia.org/wiki/General_MIDI

const OuterContainer = styled.div`
  /* border: 1px solid white; */
  margin: 0.25rem;

  * {
    user-select: none;
  }
`;

const RowContainer = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  /* border: 2px solid palevioletred; */
  border-radius: 0.2rem;
  overflow: hidden;
  min-height: ${(props) =>
    props.compactView
      ? '110px'
      : '11.25rem'}; /* to adjust height of row when in compact mode */
  justify-content: flex-start;
  /* flex: 1 0 auto; */
  flex: 1 1 11.25rem;
  position: relative;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  transition: background-color 0.25s ease-in-out;
  /* backdrop-filter: saturate(180%) blur(20px); */ /* this breaks react-beautiful-dnd :( */
  /* https://github.com/atlassian/react-beautiful-dnd/issues/1826 */

  &.activeRow {
    /* border: 2px solid red; */
    background-color: rgba(255, 255, 255, 0.4);

    /* only show "add a card" message if the row is empty (rowNotation is < 2) */
    &:after {
      ${({ row }) =>
        row.length <= 0 &&
        `
          content: 'Select a note above to add a Card';
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
    right: 2px;
    bottom: 2px;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    border-radius: 0.2rem;
    justify-content: center;
    overflow: hidden;
    height: 2.1rem;
    opacity: 0;
    transition: opacity 0.1s ease-in-out;
  }

  &:hover span.row-controls {
    opacity: 1;
  }
`;

const RemoveRowButton = styled.div`
  /* width: 100%; */
  /* height: 100%; */
  width: 3rem;
  background-color: #db2828;
  color: white;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex: 1 0 auto;
  display: flex;
`;

const RowHandle = styled.div`
  background-color: #989898;
  width: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 9px 0;

  span {
    width: 54%;
    height: 3px;
    position: relative;
    background: #1c1c1c;
  }
`;

// styling for Midi component is located in App.css

// function used to try and memoize Cards? increase performance?
// loop for cards is moved here, was previously where InnerCards is within CardRow function
// const InnerCards = React.memo(
//   ({ row, removeCard, rowIndex, uuids }) => {
//     return row.map((card, cardIndex) => (
//       <CSSTransition key={cardIndex} timeout={300} classNames="card">
//         <Card
//           key={cardIndex + card.index + card.abcCode}
//           card={card}
//           removeCard={removeCard}
//           cardIndex={cardIndex}
//           rowIndex={rowIndex}
//           uuids={uuids}
//         />
//       </CSSTransition>
//     ));
//   }
// );

const CardRow = ({
  removeCard,
  activeRow,
  setActiveRow,
  removeRow,
  row,
  rowIndex,
  rowNotation,
  uuids,
  hasNewCard,
  compactView,
}) => {
  return (
    <Draggable draggableId={rowNotation + rowIndex} index={rowIndex}>
      {(provided) => (
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
                row={row}
                onClick={(e) => {
                  /* update activeRow when row is clicked, first check if target matches */
                  /* maybe should extract this to its own function...? */
                  if (e.currentTarget !== e.target) return; // need to click on empty space in row
                  setActiveRow(rowIndex);
                }}
                {...provided.droppableProps}
                ref={provided.innerRef}
                compactView={
                  compactView
                } /* to adjust height of row when in compact mode */
              >
                {/* loop through each array (cards) */}
                {/* deferred to second function so we can memoize? */}
                <TransitionGroup component={null}>
                  {/* <InnerCards
                    row={row}
                    removeCard={removeCard}
                    rowIndex={rowIndex}
                    uuids={uuids}
                  /> */}

                  {row.map((card, cardIndex) => (
                    <CSSTransition
                      key={cardIndex}
                      timeout={hasNewCard ? 200 : 0}
                      classNames={hasNewCard ? 'newcard' : 'card'}
                    >
                      <Card
                        key={cardIndex + card.index + card.abcCode}
                        card={card}
                        removeCard={removeCard}
                        cardIndex={cardIndex}
                        rowIndex={rowIndex}
                        uuids={uuids}
                        compactView={compactView}
                      />
                    </CSSTransition>
                  ))}
                </TransitionGroup>

                <span className="row-controls">
                  <RemoveRowButton
                    onClick={() => removeRow(rowIndex)}
                  >
                    x
                  </RemoveRowButton>
                  <Midi
                    key={rowNotation}
                    midiParams={{
                      generateInline: true,
                      qpm: 80,
                      program: 73 /* 74 is flute, check "General MIDI" on wikipedia for full reference (73 piccolo might be better..) */,
                      inlineControls: { startPlaying: false },
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
