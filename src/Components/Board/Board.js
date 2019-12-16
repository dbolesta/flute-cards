import React from 'react';
import styled from 'styled-components';
import G from '../../Images/7_G.svg';

const BoardContainer = styled.div`
  border: 1px solid green;
`;

const Card = styled.div`
  border: 1px solid purple;
  display: inline-block;
  background-color: white;
`;

const FingerImg = styled.img`
  width: 10rem;
  padding: 1.25rem;
`;

const Staff = styled.div`
  span {
    border-bottom: 1px solid black;
    margin-top: 8px;
    display: block;
  }
`;

const Board = ({ cards }) => {
  return (
    <BoardContainer>
      <p>test board</p>
      {cards.map(card => (
        <Card>
          {card}
          <Staff>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </Staff>
          <FingerImg src={G} />
        </Card>
      ))}
    </BoardContainer>
  );
};

export default Board;
