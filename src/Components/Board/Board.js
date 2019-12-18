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
`;

const Board = ({ cards }) => {
  return (
    <BoardContainer>
      <p>test board</p>

      <CardRow>
        {cards.map(card => {
          return <Card key={uuid()} card={card} />;
        })}
      </CardRow>
    </BoardContainer>
  );
};

export default Board;
