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
`;
const SelectorContainer = styled.div`
  margin: 0.75rem;
`;
const AllSelectors = styled.div`
  border: 2px solid green;
  display: flex;
  flex-direction: column;
`;
const TopShelf = styled.div`
  border: 2px solid red;
`;
const BottomShelf = styled.div`
  border: 2px solid purple;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

const SelectorShelf = props => {
  return (
    <Shelf>
      <AllSelectors>
        <TopShelf>
          <SelectorContainer>
            <Keyboard
              notes={props.notes}
              hoveredNote={props.hoveredNote}
              setHoveredNote={props.setHoveredNote}
              addCard={props.addCard}
            />
          </SelectorContainer>
        </TopShelf>
        <BottomShelf>
          <SelectorContainer>
            <Staff
              hoveredNote={props.hoveredNote}
              setHoveredNote={props.setHoveredNote}
              notes={props.notes}
              addCard={props.addCard}
              staffHovered={props.staffHovered}
              setStaffHovered={props.setStaffHovered}
            />
          </SelectorContainer>
          <SelectorContainer>
            <Registers
              hoveredNote={props.hoveredNote}
              setHoveredNote={props.setHoveredNote}
              notes={props.notes}
              addCard={props.addCard}
            />
          </SelectorContainer>
        </BottomShelf>
      </AllSelectors>
    </Shelf>
  );
};

export default SelectorShelf;
