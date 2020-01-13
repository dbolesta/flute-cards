import React, { useState } from 'react';
import styled from 'styled-components';

<<<<<<< HEAD
const DeckControls = ({ deckName, setDeckName, cards, setCards }) => {
  const [toLoad, setToLoad] = useState('');

  // stringify and save state in localStorage
||||||| merged common ancestors
const DeckControls = ({ deckName, setDeckName, cards }) => {
=======
const DeckControls = ({ deckName, setDeckName, cards, setCards }) => {
  const [toLoad, setToLoad] = useState('');

>>>>>>> cc85dcf5ff8879837917147462007990a26ce0ea
  const saveDeck = () => {
    localStorage.setItem(deckName, JSON.stringify(cards));
  };

<<<<<<< HEAD
  // update the select dropdown
  const handleChange = e => {
    setToLoad(e.target.value);
  };

  // take currently selected select option and load it to state, along with deck name
  const loadDeck = () => {
    let deckToLoad = localStorage.getItem(toLoad);
    deckToLoad = JSON.parse(deckToLoad); // need to parse string
    setCards(deckToLoad);
    setDeckName(toLoad);
  };

||||||| merged common ancestors
=======
  const handleChange = e => {
    console.log(e.target.value);
    setToLoad(e.target.value);
  };
  const loadDeck = () => {
    console.log(`loading deck ${toLoad}...`);
    let deckToLoad = localStorage.getItem(toLoad);
    console.log(deckToLoad);
    deckToLoad = JSON.parse(deckToLoad);
    console.log(deckToLoad);
    setCards(deckToLoad);
    setDeckName(toLoad);
  };

>>>>>>> cc85dcf5ff8879837917147462007990a26ce0ea
  return (
    <div>
      <h3>
        <input
          type="text"
          value={deckName}
          onChange={e => setDeckName(e.target.value)}
        />
      </h3>

      <div onClick={() => saveDeck()}>Save da deck!</div>

      <form>
        <select value={toLoad} onChange={e => handleChange(e)}>
          {Object.keys(localStorage).map((key, i) => (
            <option key={i} value={key}>
              {key}
            </option>
          ))}
        </select>
        <h4 onClick={() => loadDeck()}>Load</h4>
      </form>
    </div>
  );
};

export default DeckControls;
