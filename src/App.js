import React, { useState } from 'react';
import CardShelf from './Components/CardShelf';
import Board from './Components/Board';
import './App.css';
import allNotes from './notes';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { globalStyles } from './Styles/global';

const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`;

function App() {
  const [notes, setNotes] = useState(allNotes); // all note objects (probably shoudnt be state, since never changed?)
  const [cards, setCards] = useState([[]]); // all cards and rows
  const [activeRow, setActiveRow] = useState(0); // the currently selected row (which array index new cards will be added)

  const [hoveredNote, setHoveredNote] = useState('');

  const addCard = note => {
    // 1. copy current cards
    let cardsCopy = cards.slice();

    // 2. push new note into the currently active rows array
    cardsCopy[activeRow].push(note);

    // 3. set new cardsCopy as card state
    setCards(cardsCopy);
  };
  const removeCard = (rowIndex, cardIndex) => {
    // 1. copy current cards
    let cardsCopy = cards.slice();

    // 2. splice out selected card in selected row
    cardsCopy[rowIndex].splice(cardIndex, 1);

    // 3. set new cardsCopy as card state
    setCards(cardsCopy);
  };

  const addRow = () => {
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
    // 1. copy current cards
    let cardsCopy = cards.slice();

    // 2. splice out selected row
    cardsCopy.splice(rowIndex, 1);

    console.log('%c Whats it look like', 'font-size: 16px');

    console.log(cardsCopy);

    // 3. if active row no longer exists, set it to last row
    if (cardsCopy[activeRow] === undefined) {
      setActiveRow(cardsCopy.length - 1);
    }

    // 4. set new cardsCopy as card state
    setCards(cardsCopy);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <CardShelf
        notes={notes}
        addCard={addCard}
        setHoveredNote={setHoveredNote}
        hoveredNote={hoveredNote}
      />
      <Board
        cards={cards}
        addRow={addRow}
        removeCard={removeCard}
        activeRow={activeRow}
        setActiveRow={setActiveRow}
        removeRow={removeRow}
      />
    </div>
  );
}

export default App;
