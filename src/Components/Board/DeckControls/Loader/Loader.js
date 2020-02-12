import React, { useRef } from 'react';
import styled from 'styled-components';
import sampleSongs from '../sampleSongs';
import trashSVG from '../../../../Images/trash_white.svg';

const LoadContain = styled.div`
  border-radius: 4px;
  padding: 0.25rem;
  background-color: hsl(219, 20%, 36%);
  color: white;
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
  box-shadow: 0 2px 4px rgba(50, 50, 93, 0.1);

  div.loader-label {
    background-color: hsl(219, 20%, 26%);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    font-weight: 700;
    font-size: 1.2rem;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover {
    min-height: 15rem;
    overflow-y: scroll;

    div.loader-label {
      opacity: 0;
      z-index: -1; /* if we dont alter z-index, the hidden div will block clicks */
    }
  }

  .fake-save {
    background-color: hsl(134, 70%, 43%);
    display: inline-flex;
    align-items: center;
    border-radius: 0.2rem;
    justify-content: center;
    padding: 0.5rem;
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
  display: inline-flex;
  align-items: center;
  justify-content: center;

  span {
    border-radius: 3px;
    padding: 0.5rem;
    cursor: pointer;
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease-in-out;
  }
`;

const LoadButton = styled.span`
  background-color: hsl(206, 73%, 47%);

  &:hover {
    background-color: hsl(206, 73%, 57%);
  }
`;
const DeleteButton = styled.span`
  background-color: hsl(0, 71%, 51%);
  margin-left: 7px;
  width: auto;

  &:hover {
    background-color: hsl(0, 71%, 61%);
  }

  img {
    width: 1rem;
  }
`;

const LoaderTitle = styled.h4`
  margin: 0.2rem 0;
  text-align: left;
  font-size: 1.2rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid #f1f7fb;
`;

const Loader = ({ loadDeck, deleteDeck }) => {
  const loaderRef = useRef(null); // create ref for loader so we can manipulate scroll position

  // reset scroll position
  const handleMouseLeave = () => {
    loaderRef.current.scrollTop = 0;
  };

  return (
    <LoadContain
      ref={loaderRef}
      onMouseLeave={() => handleMouseLeave()}
    >
      <div className="loader-label">Load a Deck</div>
      <LoaderTitle>My Saved Decks</LoaderTitle>
      {/* if no saved Decks, show a message */}
      {localStorage.length <= 0 ? (
        <p>
          Save a Deck with the green{' '}
          <span className="fake-save">Save</span> button!
        </p>
      ) : (
        Object.keys(localStorage).map((key, i) => (
          <DeckContain key={i}>
            <p>{key}</p>
            <LoadDeleteContain>
              <LoadButton onClick={() => loadDeck(key)}>
                Load
              </LoadButton>
              <DeleteButton onClick={() => deleteDeck(key)}>
                <img src={trashSVG} alt="Delete Deck" />
              </DeleteButton>
            </LoadDeleteContain>
          </DeckContain>
        ))
      )}

      <LoaderTitle>Sample Decks</LoaderTitle>

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
