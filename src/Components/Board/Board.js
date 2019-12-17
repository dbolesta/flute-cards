import React from 'react';
import styled from 'styled-components';
import C from '../../Images/0_C.svg';
import { Notation } from 'react-abc';
import svgs from '../../svgs';

// const notation = `X:1
// T:Notes
// M:C
// L:1
// K:C
// C | _D, __E, ^F,|^^G, A, B, C|D E F G|A B c d|e f g a|b c' d' e'|f' g' a' b'|]`;

// const notation = 'X:1\nM:C\nL:1\nK:C\nC';

// https://paulrosen.github.io/abcjs/visual/visual-params.html
const engraverParams = {
  add_classes: false,
  editable: false,
  listener: null,
  paddingbottom: 0,
  paddingleft: 0,
  paddingright: 0,
  paddingtop: 0,
  responsive: 'resize',
  scale: 1,
  staffwidth: 100
};

const notation = 'K:clef=none\nL:1\n^c_D';

const BoardContainer = styled.div`
  border: 1px solid green;
`;

const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  border: 1px solid purple;
  background-color: white;
  border-radius: 5px;
  display: inline-flex;
  flex-direction: column;
  flex: 0 0 10rem;
  margin: 0.2rem;
`;

const Letters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  margin: auto;
`;

const FingerImg = styled.img`
  /* width: 10rem; */
  /* padding: 1.25rem; */
  padding: 0;
  width: 100%;
  /* padding-top: 0; */
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

      <CardRow>
        {cards.map(card => {
          return (
            <Card>
              <Letters>
                {card.letters.map(letter => (
                  <span>{letter}</span>
                ))}
              </Letters>
              <Notation
                engraverParams={{
                  ...engraverParams
                }}
                notation={`K:clef=none\nL:1\n${card.abcCode}`}
              />
              <FingerImg src={svgs[card.imgRef]} />
            </Card>
          );
        })}
      </CardRow>
    </BoardContainer>
  );
};

export default Board;
