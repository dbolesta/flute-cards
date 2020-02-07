import React, { useState } from 'react';
import styled from 'styled-components';
import sampleSongs from '../sampleSongs';
import uuid from 'react-uuid';

const LoadContain = styled.div`
  border-radius: 4px;
  padding: 0.25rem;
  /* background-color: #2185d0; */
  background: rgb(33, 183, 251);
  background: linear-gradient(
    135deg,
    rgba(33, 183, 251, 1) 0%,
    rgba(88, 101, 243, 1) 99%
  );
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
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LoadDeleteContain = styled.div`
  span {
    border-radius: 3px;
    padding: 0.25rem;
    cursor: pointer;
  }
`;

const LoadButton = styled.span`
  background-color: #2185d0;
`;
const DeleteButton = styled.span`
  background-color: #db2828;
  margin-left: 2px;
`;

// custom force render hook
// thanks: https://stackoverflow.com/questions/46240647/react-how-can-i-force-render-a-function-component
const useForceUpdate = () => {
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => ++value); // update the state to force render
};

const Loader = ({ setUuids, setCards, setDeckName }) => {
  // create accessable forceRender function
  const forceUpdate = useForceUpdate();

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

  const deleteDeck = deleteValue => {
    // delete deck, then force render so we can see it removed
    localStorage.removeItem(deleteValue);
    forceUpdate();
  };

  return (
    <div>
      <LoadContain>
        <span>My Saved Decks</span>
        {Object.keys(localStorage).map((key, i) => (
          <DeckContain>
            <p key={i}>{key}</p>
            <LoadDeleteContain>
              <LoadButton onClick={() => loadDeck(key)}>
                Load
              </LoadButton>
              <DeleteButton onClick={() => deleteDeck(key)}>
                Delete
              </DeleteButton>
            </LoadDeleteContain>
          </DeckContain>
        ))}

        <span>Load a Sample Deck</span>

        {Object.keys(sampleSongs).map((key, i) => (
          <DeckContain>
            <p key={i}>{key}</p>
            <LoadDeleteContain>
              <LoadButton onClick={() => loadDeck(key)}>
                Load
              </LoadButton>
            </LoadDeleteContain>
          </DeckContain>
        ))}
      </LoadContain>
    </div>
  );
};

export default Loader;
