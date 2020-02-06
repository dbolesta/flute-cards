import React from 'react';
import styled from 'styled-components';
import sampleSongs from '../sampleSongs';
import uuid from 'react-uuid';

const LoadContain = styled.div`
  border: 2px solid purple;
  background-color: #2185d0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 1px;
  height: auto;
  transition: min-height 0.15s ease-in-out;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  z-index: 99;

  &:hover {
    min-height: 15rem;
    overflow-y: scroll;
  }
`;

const DeckContain = styled.div`
  border: 1px solid red;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SaveLoadContain = styled.div`
  border: 1px solid green;
`;

const Loader = ({ setUuids, setCards, setDeckName }) => {
  // take currently selected select option and load it to state, along with deck name
  const loadDeck = loadValue => {
    console.log('loadDeck was reachted with a value of ');
    console.log(loadValue);

    let deckToLoad; // establish var

    // first attempt to load from localStorage
    deckToLoad = localStorage.getItem(loadValue);
    // if we cant, check for it in sample songs
    if (deckToLoad === null) {
      deckToLoad = sampleSongs[`${loadValue}`];
    }
    if (deckToLoad === null) return; // if still nothing, abandon function

    deckToLoad = JSON.parse(deckToLoad); // need to parse string

    // create Uuids before we set the cards
    let sampleUuids = [];
    deckToLoad.forEach((arr, i) => {
      sampleUuids.push([]);
      deckToLoad[i].forEach((data, x) => {
        sampleUuids[i].push(uuid());
      });
    });

    setUuids(sampleUuids);

    setCards(deckToLoad); // load state
    setDeckName(loadValue); // load name as well
  };

  return (
    <div>
      <LoadContain>
        {Object.keys(localStorage).map((key, i) => (
          <DeckContain>
            <p key={i}>{key}</p>
            <SaveLoadContain>
              <span onClick={() => loadDeck(key)}>Load</span>
              <span>Delete</span>
            </SaveLoadContain>
          </DeckContain>
        ))}

        <span>----</span>

        {Object.keys(sampleSongs).map((key, i) => (
          <DeckContain>
            <p key={i}>{key}</p>
            <SaveLoadContain>
              <span onClick={() => loadDeck(key)}>Load</span>
              <span>Delete</span>
            </SaveLoadContain>
          </DeckContain>
        ))}
      </LoadContain>
    </div>
  );
};

export default Loader;
