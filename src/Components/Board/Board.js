import React from 'react';
import styled from 'styled-components';

import CardRow from '../CardRow';
import uuid from 'react-uuid';

const BoardContainer = styled.div`
  border: 1px solid green;
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
  }

  &.green:hover {
    background-color: #48e68b;
  }
`;

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

          row.map(card => {
            // collect complete abc notation of all cards in row, so we can use it for midi
            rowNotation = rowNotation + card.midiCode;
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
              key={rowIndex + rowNotation}
            />
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
