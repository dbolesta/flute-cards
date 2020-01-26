import React from 'react';
import CardSource from '../CardSource';
import styled from 'styled-components';
import uuid from 'react-uuid';

const RegistersContainer = styled.div`
  /* border: 2px solid green; */
  /* padding: 1rem; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: 100%;

  box-shadow: 0px 0px 0px 5px ${props => props.theme.eighties.yellow};
  border-radius: 10px;
  overflow: hidden;
  transition: box-shadow 0.3s cubic-bezier(0.7, 0.23, 0.31, 1.2);

  &:hover {
    box-shadow: 0px 0px 0px 8px
      ${props => props.theme.eighties.yellow};
  }
`;

const RegisterRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > span {
    text-align: left;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    background-color: pink;
    align-self: stretch;
    text-align: center;
    margin-right: 3px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

// we want each register to be in its own row, so we create this row generating function
// to help us create them individually
// this SO post helped: https://stackoverflow.com/questions/39774851/how-to-conditionally-add-closing-and-starting-jsx-tags
const renderRow = (notes, addCard, setHoveredNote, hoveredNote) => {
  return (
    <RegisterRow key={uuid()}>
      {/* super terrible way to display name of register row..*/}
      <span>
        {notes[2].register.replace(/^\w/, c => c.toUpperCase())}
      </span>
      {notes.map(note => (
        <CardSource
          note={note}
          addCard={addCard}
          setHoveredNote={setHoveredNote}
          hoveredNote={hoveredNote}
          key={note.index}
        />
      ))}
    </RegisterRow>
  );
};

const Registers = ({
  hoveredNote,
  setHoveredNote,
  notes,
  addCard
}) => {
  // in order to render each set of notes per register, we need to do some trickery
  // rowsHolder holds the rows themselves, while rows conains each note selector
  let rowsHolder = [];
  let rows = [];

  // loop through all the notes
  notes.forEach(note => {
    // we push each note into the rows array
    rows.push(note);
    if (note.index === 11 || note.index === 23) {
      // at the end of each register (hardcoded), we then send the rows array
      // up to this point into the renderRow function, as well as all the props each of those
      // notes will need
      rowsHolder.push(
        renderRow(rows, addCard, setHoveredNote, hoveredNote)
      );
      rows = []; // reset the rows array
    }
  });

  // this catches that last ammount of notes that are left
  if (rows.length) {
    rowsHolder.push(
      renderRow(rows, addCard, setHoveredNote, hoveredNote)
    );
  }

  // render the accumulated rowsHolder array
  return <RegistersContainer>{rowsHolder}</RegistersContainer>;
};

export default Registers;
