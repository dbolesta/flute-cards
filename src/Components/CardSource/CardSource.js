import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #1c1c1c;
  color: #1c1c1c;
  border-radius: 5px;
  height: 2.5rem;
  width: 2rem;
  margin: 0.15rem;
  background-color: white;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  vertical-align: bottom;
  cursor: pointer;

  &.highlight {
    /* border-color: red; */
    background-color: #f0f7b3;
    color: #1c1c1c;
    cursor: pointer;
  }

  ${({ black }) =>
    black &&
    `
      margin-bottom: 1rem;
      background-color: #1C1C1C;
      color: white;
      width: 2rem;
      cursor: pointer;
   `}

  span {
    pointer-events: none;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 1.55rem;
    font-size: 0.8rem;
    cursor: pointer;
  }
`;

const CardSource = ({
  addCard,
  note,
  setHoveredNote,
  hoveredNote,
}) => {
  const eventHandler = (event) => {
    const { type, bubbles } = event;
    switch (type) {
      case 'mouseover':
      case 'mouseenter':
        setHoveredNote(note);
        console.log('mouse entered');
        break;
      case 'mouseout':
      case 'mouseleave':
        setHoveredNote(null);
        console.log('mouse leaved');
        break;
      case 'click':
        console.log('clikked');
        addCard(note);
        if (bubbles) {
          // handle hover state
          setHoveredNote(note);
        }
        break;
      default:
        break;
    }
  };
  const onMouseEnter = (event) => eventHandler(event);
  const onMouseLeave = (event) => eventHandler(event);

  return (
    <Card
      onPointerUp={() => addCard(note)}
      onMouseEnter={() => setHoveredNote(note)}
      onMouseLeave={() => setHoveredNote(null)}
      black={note.black}
      className={
        hoveredNote && hoveredNote.index === note.index
          ? 'highlight'
          : null
      }
      role="button"
    >
      {note.letters.map((letter, i) => {
        return <span key={i}>{letter}</span>;
      })}
    </Card>
  );
};

export default CardSource;
