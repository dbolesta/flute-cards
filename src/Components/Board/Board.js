import React from 'react';
import styled from 'styled-components';
import Card from '../Card';

const BoardContainer = styled.div`
  border: 1px solid green;
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
          return <Card card={card} />;
        })}
      </CardRow>
    </BoardContainer>
  );
};

export default Board;
