import React from 'react';
import styled from 'styled-components';

const DeckControls = ({ deckName, setDeckName }) => {
  return (
    <div>
      <h3>
        <input
          type="text"
          value={deckName}
          onChange={e => setDeckName(e.target.value)}
        />
      </h3>
    </div>
  );
};

export default DeckControls;
