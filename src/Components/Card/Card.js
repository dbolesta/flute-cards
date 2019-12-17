import React from 'react';
import styled from 'styled-components';
import { Notation } from 'react-abc';
import svgs from '../../svgs';
import uuid from 'react-uuid';

//abc documentation:
// https://paulrosen.github.io/abcjs/
// https://github.com/paulrosen/abcjs

// example of abc notation
// const notation = 'X:1\nM:C\nL:1\nK:C\nC';
////// or
// const notation = `X:1
// T:Notes
// M:C
// L:1
// K:C
// C | _D, __E, ^F,|^^G, A, B, C|D E F G|A B c d|e f g a|b c' d' e'|f' g' a' b'|]`;

// https://paulrosen.github.io/abcjs/visual/visual-params.html
const engraverParams = {
  add_classes: false,
  editable: false,
  listener: null,
  paddingbottom: 15,
  paddingleft: 15,
  paddingright: 15,
  paddingtop: 15,
  responsive: 'resize',
  scale: 1,
  staffwidth: 100
};

const SCard = styled.div`
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

const Card = ({ card }) => {
  const { letters, abcCode, imgRef } = card;

  return (
    <SCard>
      <Letters>
        {letters.map(letter => (
          <span key={uuid()}>{letter}</span>
        ))}
      </Letters>
      <Notation
        engraverParams={{
          ...engraverParams
        }}
        notation={`K:clef=none\nL:1\n${abcCode}`}
      />
      <FingerImg src={svgs[imgRef]} />
    </SCard>
  );
};

export default Card;
