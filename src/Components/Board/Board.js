import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
import uuid from 'react-uuid';

const BoardContainer = styled.div`
  border: 1px solid green;
  margin-bottom: 2rem;
`;

const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 2px solid palevioletred;
  border-radius: 3px;
  min-height: 1rem;
`;

const Board = ({ cards, addRow }) => {
  return (
    <BoardContainer>
      <p>test board</p>

      {cards.map(row => {
        return (
          <CardRow>
            {row.map(card => {
              return <Card key={uuid()} card={card} />;
            })}
          </CardRow>
        );
      })}

      <p onClick={() => addRow()}>New row!</p>
    </BoardContainer>
  );
};

export default Board;
