import React, { useState } from 'react';
import CardShelf from './Components/CardShelf';
import Board from './Components/Board';
import './App.css';
import allNotes from './notes';

function App() {
  const [notes, setNotes] = useState(allNotes);
  const [cards, setCards] = useState([]);

  console.log('loggin the notes');
  console.log(allNotes);

  const addCard = note => {
    let cardsCopy = cards.slice();
    cardsCopy.push(note);
    setCards(cardsCopy);
  };

  return (
    <div className="App">
      <CardShelf notes={notes} addCard={addCard} />
      <Board cards={cards} />
    </div>
  );
}

export default App;
