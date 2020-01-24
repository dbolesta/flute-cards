import React from 'react';
import CardSource from '../CardSource';
import Registers from '../Registers';
import Keyboard from '../Keyboard';
import Staff from '../Staff';
import styled from 'styled-components';
import uuid from 'react-uuid';

const Shelf = styled.div`
  border: 1px solid red;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  & > div:first-child {
    padding-left: 0.5rem;
  }

  & > div:last-child {
    padding-right: 0.5rem;
  }
`;

const SelectorShelf = props => {
  return (
    <Shelf>
      <div>
        <h3>Registers</h3>
        <Registers
          hoveredNote={props.hoveredNote}
          setHoveredNote={props.setHoveredNote}
          notes={props.notes}
          addCard={props.addCard}
        />
      </div>
      <div>
        <h3>Keyboard</h3>
        <Keyboard
          notes={props.notes}
          hoveredNote={props.hoveredNote}
          setHoveredNote={props.setHoveredNote}
          addCard={props.addCard}
        />
      </div>
      <div>
        <h3>Staff</h3>
        <Staff
          hoveredNote={props.hoveredNote}
          setHoveredNote={props.setHoveredNote}
          notes={props.notes}
          addCard={props.addCard}
          staffHovered={props.staffHovered}
          setStaffHovered={props.setStaffHovered}
        />
      </div>
    </Shelf>
  );
};

export default SelectorShelf;
