import React from 'react';
import styled from 'styled-components';
import DeckControls from './DeckControls';
import { Droppable } from 'react-beautiful-dnd';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import CardRow from '../CardRow';
import uuid from 'react-uuid';

const RowsContainer = styled.div`
  /* border: 5px solid purple; */
`;

const BoardContainer = styled.div`
  /* border: 1px solid green; */
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 0 0 auto;
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
    transition: background-color 0.2s ease-in-out;
  }

  &.green:hover {
    background-color: #48e68b;
  }
`;

const InnerRow = React.memo(
  ({
    cards,
    removeCard,
    activeRow,
    setActiveRow,
    removeRow,
    uuids,
  }) => {
    /* loop through first dimension of array (rows) */
    return cards.map((row, rowIndex) => {
      let rowNotation = '|:';

      // collect complete abc notation of all cards in row, so we can use it for midi
      row.map((card) => {
        rowNotation += card.midiCode;
        return rowNotation;
      });

      return (
        <CardRow
          removeCard={removeCard}
          activeRow={activeRow}
          setActiveRow={setActiveRow}
          removeRow={removeRow}
          row={row}
          rowIndex={rowIndex}
          rowNotation={rowNotation}
          key={rowIndex}
          uuids={uuids}
        />
      );
    });
  }
);

const Board = ({
  cards,
  addRow,
  removeCard,
  activeRow,
  setActiveRow,
  removeRow,
  deckName,
  setDeckName,
  setCards,
  uuids,
  setUuids,
  hasNewCard,
  compactView,
  setCompactView,
}) => {
  return (
    <>
      <DeckControls
        deckName={deckName}
        setDeckName={setDeckName}
        cards={cards}
        setCards={setCards}
        uuids={uuids}
        setUuids={setUuids}
        compactView={compactView}
        setCompactView={setCompactView}
      />

      <BoardContainer>
        <Droppable droppableId="all-rows" type="row">
          {(provided) => (
            <RowsContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <TransitionGroup component={null}>
                {/* <InnerRow
                cards={cards}
                removeCard={removeCard}
                activeRow={activeRow}
                setActiveRow={setActiveRow}
                removeRow={removeRow}
                uuids={uuids}
              /> */}

                {cards.map((row, rowIndex) => {
                  let rowNotation = '|:';

                  // collect complete abc notation of all cards in row, so we can use it for midi
                  row.map((card) => {
                    rowNotation += card.midiCode + ' | ';
                    return rowNotation;
                  });

                  return (
                    <CSSTransition
                      key={rowIndex}
                      timeout={200}
                      classNames="row"
                    >
                      <CardRow
                        removeCard={removeCard}
                        activeRow={activeRow}
                        setActiveRow={setActiveRow}
                        removeRow={removeRow}
                        row={row}
                        rowIndex={rowIndex}
                        rowNotation={rowNotation}
                        key={rowIndex}
                        uuids={uuids}
                        hasNewCard={hasNewCard}
                      />
                    </CSSTransition>
                  );
                })}
              </TransitionGroup>

              {provided.placeholder}
            </RowsContainer>
          )}
        </Droppable>

        <NewRowButton className="green" onClick={() => addRow()}>
          New row!
        </NewRowButton>
      </BoardContainer>
    </>
  );
};

export default Board;
