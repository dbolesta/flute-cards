import React, { useState } from 'react';
import CardShelf from './Components/CardShelf';
import Board from './Components/Board';
import './App.css';
import allNotes from './notes';

function App() {
  const [notes, setNotes] = useState(allNotes);
  const [cards, setCards] = useState([[]]);
  const [activeRow, setActiveRow] = useState(0);

  console.log('loggin the notes');
  console.log(allNotes);

  const addCard = note => {
    let cardsCopy = cards.slice();

    cardsCopy[activeRow].push(note);
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
