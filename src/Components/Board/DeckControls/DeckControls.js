import React, { useState } from 'react';
import styled from 'styled-components';
import sampleSongs from './sampleSongs';

const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;
const InnerContainerLeft = styled.div`
  display: flex;
  width: 40%;

  input {
    font-size: 1.5rem;
    width: 100%;
  }

  div {
    background-color: green;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    margin-left: 0.5rem;
    color: white;
    cursor: pointer;
  }
`;
const InnerContainerRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    background-color: blue;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    margin-left: 0.5rem;
    cursor: pointer;
  }
`;

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
    let deckToLoad; // establish var

    // first attempt to load from localStorage
    deckToLoad = localStorage.getItem(toLoad);
    // if we cant, check for it in sample songs
    if (deckToLoad === null) {
      deckToLoad = sampleSongs[`${toLoad}`];
    }
    if (deckToLoad === null) return; // if still nothing, abandon function

    deckToLoad = JSON.parse(deckToLoad); // need to parse string
    setCards(deckToLoad); // load state
    setDeckName(toLoad); // load name as well
  };

  return (
    <ControlsContainer>
      <InnerContainerLeft>
        <input
          type="text"
          value={deckName}
          onChange={e => setDeckName(e.target.value)}
        />

        <div onClick={() => saveDeck()}>Save</div>
      </InnerContainerLeft>

      <InnerContainerRight>
        <select value={toLoad} onChange={e => handleChange(e)}>
          {/* we first loop through localStorage */}
          <option key={12093102} value={'load'}>
            --load deck--
          </option>
          {Object.keys(localStorage).map((key, i) => (
            <option key={i} value={key}>
              {key}
            </option>
          ))}

          {/* then we loop through sample songs */}
          <option key={123841123} value={'sample'}>
            --sample songs--
          </option>
          {Object.keys(sampleSongs).map((key, i) => (
            <option key={i + 69} value={key}>
              {key}
            </option>
          ))}
        </select>

        <div onClick={() => loadDeck()}>Load</div>
      </InnerContainerRight>
    </ControlsContainer>
  );
};

export default DeckControls;
