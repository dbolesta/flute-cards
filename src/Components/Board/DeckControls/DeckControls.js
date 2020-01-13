import React, { useState } from 'react';
import styled from 'styled-components';

const DeckControls = ({ deckName, setDeckName, cards, setCards }) => {
  const [toLoad, setToLoad] = useState('');

  // stringify and save state in localStorage
  const saveDeck = () => {
    localStorage.setItem(deckName, JSON.stringify(cards));
  };

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
