import React, { useState } from 'react';
import Loader from './Loader';
import SimpleLoader from './SimpleLoader';
import { notify } from 'react-notify-toast';
import styled from 'styled-components';
import sampleSongs from './sampleSongs';
import uuid from 'react-uuid';

const ControlsContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;
  /* border: 2px solid red; */

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;
const InnerContainerLeft = styled.div`
  display: flex;
  width: 40%;

  input {
    font-size: 1.5rem;
    width: 100%;
    /* border-radius: 0.2rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0; */
  }

  div {
    background-color: hsl(134, 70%, 43%);
    display: flex;
    align-items: center;
    border-radius: 0.2rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    justify-content: center;
    padding: 0.75rem 1rem;
    /* margin-left: 0.5rem; */
    color: white;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: hsl(134, 70%, 53%);
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

const InnerContainerMiddle = styled.div`
  display: flex;
  align-items: center;
`;

const InnerContainerRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 40%;

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

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
    height: 3rem;
    margin-top: 0.5rem;
  }
`;

// custom force render hook
// thanks: https://stackoverflow.com/questions/46240647/react-how-can-i-force-render-a-function-component
const useForceUpdate = () => {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => ++value); // update the state to force render
};

const DeckControls = ({
  deckName,
  setDeckName,
  cards,
  setCards,
  uuids,
  setUuids,
  compactView,
  setCompactView,
}) => {
  // create accessable forceRender function
  const forceUpdate = useForceUpdate();

  // save, load, delete deck functions
  // Save function - also checks for duplicates
  const saveDeck = () => {
    let deckToSave = JSON.stringify(cards); // stringify so state can be compared / saved to localStorage

    let goodToSave = true; // var to keep track if we are good to save. Will turn false under conditions below

    // loop through localStorage to see if key (name) already exists. If so, confirm with user user
    Object.keys(localStorage).forEach((key) => {
      if (goodToSave && deckName === key) {
        goodToSave = window.confirm(
          `A Deck with the name of "${key}" already exists.\nDo you want to save over this Deck?`
        );
      }
    });

    // same as above, but check the value (state). To help prevent saving duplicates
    Object.entries(localStorage).forEach(([key, value]) => {
      if (goodToSave && deckToSave === value) {
        goodToSave = window.confirm(
          `This Deck is exactly the same as "${key}".\nDo you want to save anyway?`
        );
      }
    });

    // if user declined, cancel function
    if (!goodToSave) return;

    // only save if `goodToSave` wasnt flipped above
    localStorage.setItem(deckName, deckToSave);
    forceUpdate(); // force render so we can see saved deck immediately
    notify.show(`${deckName} was saved!`, 'success', 800);
  };

  // take currently selected select option and load it to state, along with deck name
  const loadDeck = (loadValue) => {
    // first, check if the current deck has been saved. if not, confirm with user that they are
    // cool with loading a deck and losing current deck
    let currentDeck = JSON.stringify(cards); // get current state as string

    // deckExists is false by default, meaning the deck does not exists, and if we load a deck,
    // we will lose what we currently have. This prompts a confirm dialogue
    // we also use a shortcut to check if the deck is empty ([[]] or []), so we dont prompt when deck is empty
    let deckExists =
      currentDeck === '[[]]' || currentDeck === '[]' ? true : false;

    // check for sample songs. If the current state matches a sample song, we dont want to bother asking
    // if they really want to get rid of it, since sample songs cant be deleted anyway
    Object.values(sampleSongs).forEach((value) => {
      if (!deckExists && currentDeck === value) {
        deckExists = true;
      }
    });

    // check all values in local storage to see if the deck is already there
    Object.values(localStorage).forEach((value) => {
      if (!deckExists && currentDeck === value) {
        deckExists = true;
      }
    });

    // initial variable to keep track in next confirm if use wants to load
    let okayToLoad = true;

    // if none of the checks above were caught, we should prompt the user to let them know
    // this current state is not saved, and will be lost if a new song is loaded
    if (!deckExists) {
      okayToLoad = window.confirm(
        `Current deck is not saved. Loading will lose your current Deck.\nAre you sure you want to load a new Deck?`
      );
    }

    // if user declined, cancel function
    if (!okayToLoad) return;

    // if user didn't decline, resume as usual
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

  const deleteDeck = (deleteValue) => {
    // delete deck, then force render so we can see it removed
    localStorage.removeItem(deleteValue);
    forceUpdate();
  };

  return (
    <ControlsContainer>
      <InnerContainerLeft>
        <input
          type="text"
          value={deckName}
          onChange={(e) => setDeckName(e.target.value)}
        />

        <div onClick={() => saveDeck()}>Save</div>
      </InnerContainerLeft>

      {/* <InnerContainerMiddle>
        
      </InnerContainerMiddle> */}

      <InnerContainerRight>
        <div>
          <input
            type="checkbox"
            id="compactToggle"
            name="compactToggle"
            checked={compactView}
            onChange={() => setCompactView(!compactView)}
          />
          <label htmlFor="compactToggle">Compact View</label>
        </div>

        <Loader loadDeck={loadDeck} deleteDeck={deleteDeck} />
        {/* <SimpleLoader loadDeck={loadDeck} deleteDeck={deleteDeck} /> */}
      </InnerContainerRight>
    </ControlsContainer>
  );
};

export default DeckControls;
