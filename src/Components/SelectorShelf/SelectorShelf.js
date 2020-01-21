import React from 'react';
import CardSource from '../CardSource';
import Registers from '../Registers';
import Keyboard from '../Keyboard';
import Staff from '../Staff';
import styled from 'styled-components';
import uuid from 'react-uuid';

const Shelf = styled.div`
  border: 1px solid red;

  p {
  }
`;

const SelectorShelf = props => {
  return (
    <Shelf>
      <Keyboard
        notes={props.notes}
        hoveredNote={props.hoveredNote}
        setHoveredNote={props.setHoveredNote}
        addCard={props.addCard}
      />

      <Staff
        hoveredNote={props.hoveredNote}
        setHoveredNote={props.setHoveredNote}
        notes={props.notes}
        addCard={props.addCard}
        staffHovered={props.staffHovered}
        setStaffHovered={props.setStaffHovered}
      />
      <h2>Flute Cards</h2>

      <Registers
        hoveredNote={props.hoveredNote}
        setHoveredNote={props.setHoveredNote}
        notes={props.notes}
        addCard={props.addCard}
      />
    </Shelf>
  );
};

export default SelectorShelf;
