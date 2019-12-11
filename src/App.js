import React, { useState } from 'react';
import CardShelf from './Components/CardShelf';
import './App.css';
import allNotes from './notes';

function App() {
  const [notes, setNotes] = useState(allNotes);

  console.log('loggin the notes');
  console.log(allNotes);

  return (
    <div className="App">
      <CardShelf notes={notes} />
    </div>
  );
}

export default App;
