import React, { useState } from 'react';
import CardShelf from './Components/CardShelf';
import Board from './Components/Board';
import './App.css';
import allNotes from './notes2';

function App() {
  const [notes, setNotes] = useState(allNotes);
  const [cards, setCards] = useState([]);

  console.log('loggin the notes');
  console.log(allNotes);

  const addCard = note => {
    let cardsCopy = cards.slice();
    console.log('card copt us');
    console.log(cardsCopy);
    console.log('tyina push');
    console.log(note);

    cardsCopy.push(note);
    console.log('now, card copt iss');
    console.log(cardsCopy);
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
