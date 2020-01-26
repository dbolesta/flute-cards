import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import SelectorShelf from './Components/SelectorShelf';
import Board from './Components/Board';
import Menu from './Components/Menu';
import './App.css';
import allNotes from './notes';
import uuid from 'react-uuid';

import {
  addUuid,
  removeUuid,
  addUuidRow,
  removeUuidRow,
  dragUuid,
  dragUuidRow
} from './Utils/handleUuids'; // to save space, all uuid functions, which are almost identical to most card functions, are in their own file

import styled, {
  createGlobalStyle,
  ThemeProvider
} from 'styled-components';
import { globalStyles } from './Styles/global';
import { theme } from './Styles/theme';

const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`;

function App() {
  const [notes, setNotes] = useState(allNotes); // all note objects (probably shoudnt be state, since never changed?)
  const [cards, setCards] = useState([[]]); // all cards and rows
  const [activeRow, setActiveRow] = useState(0); // the currently selected row (which array index new cards will be added)
  const [hoveredNote, setHoveredNote] = useState(''); // note user is hovering over on any Selector (keyboard, staff, notes), which is used to display that note on all selectors
  const [deckName, setDeckName] = useState('Deck 1'); // Name of Deck, to be used when saving / loading
  const [uuids, setUuids] = useState([[]]); // unique ids for Cards, will match length of cards state
  const [staffHovered, setStaffHovered] = useState(false); // if the staff is being hovered over, used to check if we should show the optional sharp icon
  const [menuSelection, setMenuSelection] = useState('how'); // which option is selected in the main menu

  ///////////////
  // CARD CRUD STUFF
  const addCard = note => {
    // if no rows exist (activeRow === -1),
    // just manually set the cards state to the note, set active row, and uuid
    if (activeRow === -1) {
      setUuids([[uuid()]]);
      setCards([[note]]);
      setActiveRow(0);
      return; // cut the function short
    }

    // 0. call addUuid from utils, to add a uuid to the uuid state
    setUuids(addUuid(uuids, activeRow));

    // otherwise, procede as normal:
    // 1. copy current cards
    let cardsCopy = cards.slice();

    // 2. push new note into the currently active rows array
    cardsCopy[activeRow].push(note);

    // 3. set new cardsCopy as card state
    setCards(cardsCopy);
  };
  const removeCard = (rowIndex, cardIndex) => {
    // 0. remove uuid from the uuid state
    setUuids(removeUuid(uuids, rowIndex, cardIndex));

    // 1. copy current cards
    let cardsCopy = cards.slice();

    // 2. splice out selected card in selected row
    cardsCopy[rowIndex].splice(cardIndex, 1);

    // 3. set new cardsCopy as card state
    setCards(cardsCopy);
  };

  const addRow = () => {
    // 0. add uuid row to uuid state from utils function
    setUuids(addUuidRow(uuids));

    // 1. copy current cards
    let cardsCopy = cards.slice();

    // 2. push empty array to end
    cardsCopy.push([]);

    // 3. set new cardsCopy as card state
    setCards(cardsCopy);

    // 4. set activeRow to last array
    setActiveRow(cardsCopy.length - 1);
  };

  const removeRow = rowIndex => {
    // 0. remove uuid row
    setUuids(removeUuidRow(uuids, rowIndex));
    // 1. copy current cards
    let cardsCopy = cards.slice();

    // 2. splice out selected row
    cardsCopy.splice(rowIndex, 1);

    // 3. if active row no longer exists, set it to last row
    if (cardsCopy[activeRow] === undefined) {
      setActiveRow(cardsCopy.length - 1);
    }

    // 4. set new cardsCopy as card state
    setCards(cardsCopy);
  };

  /// react beautiful dnd-stuff
  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    // if no target, cancel method
    if (!destination) return;

    // if destination is the same as the source (no change), cancel method
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // if we dragged a row...
    if (type === 'row') {
      let cardsCopy = [...cards]; // copy state

      // capture start and destination index
      let start = source.index;
      let end = destination.index;

      // 0. move uuid row
      setUuids(dragUuidRow(uuids, start, end));

      let arrToMove = cardsCopy[start]; // copy the array that is being moved

      cardsCopy.splice(start, 1); // delete where it was
      cardsCopy.splice(end, 0, arrToMove); // insert where we want it

      setActiveRow(end); // active row is whatever row we just moved
      setCards(cardsCopy); // save new card state
      return; // end onDragEnd
    }

    // if we dragged a card...
    // 0. move uuid to new position in uuids state
    setUuids(
      dragUuid(
        uuids,
        source.droppableId,
        source.index,
        destination.index
      )
    );

    // 1. make reference to row were working within
    let row = cards[source.droppableId];

    // 2. make deeper copy that we will tamper with
    const newRow = Array.from(row); // can also copy array with `const newRow = [...row];`

    // 3. use splice to remove the card that was moved (source)
    newRow.splice(source.index, 1);

    // 4. use splice to insert the moved card (taken from first copy) into its new position
    newRow.splice(destination.index, 0, row[source.index]);

    // 5. copy state, and insert newly constructed array in place of old one
    // IMPORTANT: dealt with a bug for a long time because previously, the following line was:
    // let newCards = cards;
    // because that was just a reference, not a copy, the component was not re-rendering
    // thanks https://stackoverflow.com/a/55856425/1925805
    let newCards = Array.from(cards);
    newCards[source.droppableId] = newRow;

    // 6. set the state with new array
    setCards(newCards);
    return;
  };

  // styled-components
  const TopSection = styled.div`
    /* border: 1px solid orange; */
    display: flex;
  `;

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <TopSection>
          <Menu
            menuSelection={menuSelection}
            setMenuSelection={setMenuSelection}
          />
          <SelectorShelf
            notes={notes}
            addCard={addCard}
            setHoveredNote={setHoveredNote}
            hoveredNote={hoveredNote}
            staffHovered={staffHovered}
            setStaffHovered={setStaffHovered}
          />
        </TopSection>
        <DragDropContext onDragEnd={onDragEnd}>
          <Board
            cards={cards}
            addRow={addRow}
            removeCard={removeCard}
            activeRow={activeRow}
            setActiveRow={setActiveRow}
            removeRow={removeRow}
            deckName={deckName}
            setDeckName={setDeckName}
            setCards={setCards}
            uuids={uuids}
            setUuids={setUuids}
          />
        </DragDropContext>
      </div>
    </ThemeProvider>
  );
}

export default App;
