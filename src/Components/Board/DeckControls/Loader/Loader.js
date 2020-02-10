import React from 'react';
import styled from 'styled-components';
import sampleSongs from '../sampleSongs';

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

const Loader = ({ loadDeck, deleteDeck }) => {
  return (
    <LoadContain>
      <span>My Saved Decks</span>

      {/* if no saved Decks, show a message */}
      {localStorage.length <= 0 ? (
        <p>Save a Deck with the green Save button!</p>
      ) : (
        Object.keys(localStorage).map((key, i) => (
          <DeckContain key={i}>
            <p>{key}</p>
            <LoadDeleteContain>
              <LoadButton onClick={() => loadDeck(key)}>
                Load
              </LoadButton>
              <DeleteButton onClick={() => deleteDeck(key)}>
                Delete
              </DeleteButton>
            </LoadDeleteContain>
          </DeckContain>
        ))
      )}

      <span>Load a Sample Deck</span>

      {Object.keys(sampleSongs).map((key, i) => (
        <DeckContain key={i}>
          <p>{key}</p>
          <LoadDeleteContain>
            <LoadButton onClick={() => loadDeck(key)}>
              Load
            </LoadButton>
          </LoadDeleteContain>
        </DeckContain>
      ))}
    </LoadContain>
  );
};

export default Loader;
