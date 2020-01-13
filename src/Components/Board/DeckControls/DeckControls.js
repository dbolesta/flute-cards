import React, { useState } from 'react';
import styled from 'styled-components';

const DeckControls = ({ deckName, setDeckName, cards, setCards }) => {
  const [toLoad, setToLoad] = useState('');

  const saveDeck = () => {
    console.log('saving deck...');
    localStorage.setItem(deckName, JSON.stringify(cards));
  };

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
