import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { Notation } from 'react-abc';
import svgs from '../../svgs';

//abc documentation:
// https://paulrosen.github.io/abcjs/
// https://github.com/paulrosen/abcjs

// example of abc notation
// const notation = 'X:1\nM:C\nL:1\nK:C\nC';
// can also use `K:clef=treble\nL:1\n${abcCode}` to show treble clef

////// or
// const notation = `X:1
// T:Notes
// M:C
// L:1
// K:C
// C | _D, __E, ^F,|^^G, A, B, C|D E F G|A B c d|e f g a|b c' d' e'|f' g' a' b'|]`;

// https://paulrosen.github.io/abcjs/visual/visual-params.html
// mostly used here to make the renderes staff responsive
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
  flex: 0 1 10rem;
  margin: 0.2rem;
  padding: 0.2rem;
  position: relative;

  span.remove-button {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 2rem;
    height: 2rem;
    background-color: black;
    color: white;
    display: none;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
  }

  &:hover span.remove-button {
    display: flex;
  }
`;

const Letters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  margin: auto;
`;

const FingerImg = styled.img`
  margin-top: -3rem;
  padding: 0;
  /* width: auto; */
  /* width: 160px; */
  width: 100%;
  /* padding-top: 0; */
`;

const Card = ({ card, removeCard, cardIndex, rowIndex }) => {
  const { letters, abcCode, imgRef } = card;

  // only first card in row should have treble clef
  let clef;
  if (cardIndex === 0) {
    clef = 'treble';
  } else {
    clef = 'none';
  }

  return (
    <Draggable draggableId={'' + cardIndex} index={cardIndex}>
      {(provided, snapshot) => (
        <SCard
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <span
            className="remove-button"
            onClick={() => removeCard(rowIndex, cardIndex)}
          >
            x
          </span>
          <Letters>
            {letters.map((letter, i) => (
              <span key={i}>{letter}</span>
            ))}
          </Letters>
          <Notation
            engraverParams={{
              ...engraverParams
            }}
            notation={`K:clef=${clef}\nL:1\n${abcCode}`}
          />
          <FingerImg src={svgs[imgRef]} />
        </SCard>
      )}
    </Draggable>
  );
};

export default Card;
