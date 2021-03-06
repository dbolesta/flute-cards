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
  staffwidth: 100,
};

const SCard = styled.div`
  /* border: 1px solid purple; */
  /* border: 1px solid rgba(34, 36, 38, 0.15); */
  /* box-shadow: 0px 1px 3px 0px #d4d4d5, 0px 0px 0px 1px #d4d4d5; */
  box-shadow: 5px 5px 15px rgba(186, 126, 126, 0.5);
  background-color: white;
  border-radius: 0.2rem;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  flex: 0 1 10rem;
  margin: 0.2rem;
  padding: 0.2rem;
  position: relative;
  min-width: 0px;

  span.remove-button {
    position: absolute;
    top: -2px;
    right: -2px;
    width: 2rem;
    height: 2rem;
    background-color: #db2828;
    color: white;
    display: none;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    border-radius: 0.2rem;
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
  margin-top: 0.75rem;
`;

const FingerImg = styled.img`
  margin-top: ${(props) => (props.compactView ? '0rem' : '-3rem')};
  padding: 0;
  /* width: auto; */
  /* width: 160px; */
  width: 100%;

  /* padding-top: 0; */
`;

const Card = ({
  card,
  removeCard,
  cardIndex,
  rowIndex,
  uuids,
  compactView,
}) => {
  const { letters, abcCode, imgRef } = card;

  // only first card in row should have treble clef
  let clef;
  if (cardIndex === 0) {
    clef = 'treble';
  } else {
    clef = 'none';
  }

  // unique id from the uuids state
  const uniqueId = uuids[rowIndex][cardIndex];

  return (
    <Draggable draggableId={uniqueId} index={cardIndex}>
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
          {!compactView && (
            <Notation
              engraverParams={{
                ...engraverParams,
              }}
              notation={`K:clef=${clef}\nL:1\n${abcCode}`}
            />
          )}

          <FingerImg src={svgs[imgRef]} compactView={compactView} />
        </SCard>
      )}
    </Draggable>
  );
};

export default React.memo(Card);
