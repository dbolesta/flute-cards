import React, { useState } from 'react';
import styled from 'styled-components';
import sampleSongs from '../sampleSongs';

const SimpleLoadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .loadButton {
    background-color: #2185d0;
    border-radius: 0.2rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    /* margin-left: 0.5rem; */
    cursor: pointer;
  }
`;

const SimpleLoader = ({ loadDeck, deleteDeck }) => {
  const [toLoad, setToLoad] = useState(''); // do we still need? Maybe for simple Loader?

  // update the select dropdown
  const handleChange = e => {
    setToLoad(e.target.value);
  };

  return (
    <SimpleLoadContainer>
      <select value={toLoad} onChange={e => handleChange(e)}>
        {/* we first loop through localStorage */}
        <option key={12093102} value={'load'}>
          --Load a Deck--
        </option>
        {Object.keys(localStorage).map((key, i) => (
          <option key={i} value={key}>
            {key}
          </option>
        ))}

        {/* then we loop through sample songs */}
        <option key={123841123} value={'sample'}>
          --Sample Decks--
        </option>
        {Object.keys(sampleSongs).map((key, i) => (
          <option key={i + 69} value={key}>
            {key}
          </option>
        ))}
      </select>

      <div className="loadButton" onClick={() => loadDeck(toLoad)}>
        Load
      </div>
    </SimpleLoadContainer>
  );
};

export default SimpleLoader;
