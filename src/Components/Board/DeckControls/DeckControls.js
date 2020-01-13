import React from 'react';
import styled from 'styled-components';

const DeckControls = ({ deckName, setDeckName, cards }) => {
  const saveDeck = () => {
    console.log('saving deck...');
    localStorage.setItem(deckName, JSON.stringify(cards));
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
    </div>
  );
};

export default DeckControls;
