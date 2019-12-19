import React, { useState } from 'react';
import CardShelf from './Components/CardShelf';
import Board from './Components/Board';
import './App.css';
import allNotes from './notes';

function App() {
  const [notes, setNotes] = useState(allNotes); // all note objects (probably shoudnt be state, since never changed?)
  const [cards, setCards] = useState([[]]); // all cards and rows
  const [activeRow, setActiveRow] = useState(0); // the currently selected row (which array index new cards will be added)

  const addCard = note => {
    // 1. copy current cards
    let cardsCopy = cards.slice();

    // 2. push new note into the currently active rows array
    cardsCopy[activeRow].push(note);

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

  return (
    <div className="App">
      <CardShelf notes={notes} addCard={addCard} />
      <Board cards={cards} addRow={addRow} />
    </div>
  );
}

export default App;
