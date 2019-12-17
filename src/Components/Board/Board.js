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

const engraverParams = {
  add_classes: false,
  editable: false,
  listener: null,
  paddingbottom: 30,
  paddingleft: 15,
  paddingright: 50,
  paddingtop: 15,
  responsive: undefined,
  scale: 1,
  staffwidth: 740
};

const notation = 'K:clef=none\nL:1\n^c_D';

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

      {cards.map(card => {
        return (
          <Card>
            {card.letters.map((letter, i) => {
              return <span>{i !== 0 ? ' / ' + letter : letter}</span>;
            })}
            <Notation
              engraverParams={{
                ...engraverParams,
                staffWidth: '100%'
              }}
              notation={`K:clef=none\nL:1\n${card.abcCode}`}
            />
            <FingerImg src={svgs[card.imgRef]} />
          </Card>
        );
      })}
    </BoardContainer>
  );
};

export default Board;
