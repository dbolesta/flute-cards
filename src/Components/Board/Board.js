import React from 'react';
import styled from 'styled-components';

const BoardContainer = styled.div`
  border: 1px solid green;
`;

const Board = () => {
  return (
    <BoardContainer>
      <p>test board</p>
    </BoardContainer>
  );
};

export default Board;
