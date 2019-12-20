import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import uuid from 'react-uuid';

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
  min-height: 1rem;
  justify-content: flex-start;
  flex: 1 0 auto;
`;

const Board = ({ cards, addRow, removeCard }) => {
  return (
    <>
      <h3>Flute Cards</h3>
      <BoardContainer>
        {/* loop through first dimension of array (rows) */}
        {cards.map((row, rowIndex) => {
          return (
            <CardRow>
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
            </CardRow>
          );
        })}

        <p onClick={() => addRow()}>New row!</p>
      </BoardContainer>
    </>
  );
};

export default Board;
