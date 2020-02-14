import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  background-color: ${props => props.theme.windowsDark};
  /* background-color: hsl(180, 65.4%, 25.6%); */
  flex: 0 1 25rem;
  padding: 0.5rem;

  & > h2 > span {
    /* border: 1px solid black; */
    border-radius: 0.2rem;
    background-color: white;
    padding: 0.25rem;
    display: inline-flex;
    flex-direction: column;

    & > span {
      /* background-color: red; */
      font-size: 0.1rem;
    }
  }
`;

const MenuSelectors = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* border: 1px solid red; */

  div {
    background-color: rgba(211, 211, 211, 0.5);
    padding: 0.3rem 0.6rem;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 1rem;

    &.selected {
      background-color: rgba(211, 211, 211, 1);
    }
  }
`;

const HowToContainer = styled.div`
  ol {
    text-align: left;

    li {
      margin-bottom: 0.5rem;
    }
  }

  span {
    font-weight: 600;
  }

  span:nth-of-type(1) {
    color: ${props => props.theme.eighties.pink};
  }
  span:nth-of-type(2) {
    color: ${props => props.theme.eighties.blue};
  }
  span:nth-of-type(3) {
    color: ${props => props.theme.eighties.yellow};
  }
`;

const AboutContainer = styled.div`
  text-align: left;
`;

// Sub Components
const HowTo = () => {
  return (
    <HowToContainer>
      <ol>
        <li>
          Select notes from the <span>Keyboard</span>,{' '}
          <span>Staff</span>, or <span>Registers</span> to add cards
          to your Deck below.
        </li>
        <li>
          Each Card displays the note, and a Flute Fingering diagram.
        </li>
        <li>
          Arrange cards to create melodies and help you learn songs
          easily!
        </li>
        <li>
          Use the Play button to hear when your current Row of Cards
          sounds like.
        </li>
        <li>Save and load Decks to easily learn many songs!</li>
      </ol>
    </HowToContainer>
  );
};
const About = () => {
  return (
    <AboutContainer>
      <p>
        I was learning a song on the flute, and found scanning flute
        fingering charts to be not good enough.
      </p>
      <p>
        I made this site to help myself and others learn songs on the
        flute more easily.
      </p>
      <p>I hope you find it helpful!</p>
      <p>
        <a href="https://github.com/dbolesta/flute-cards">Github</a>
      </p>
    </AboutContainer>
  );
};

const Menu = ({ menuSelection, setMenuSelection }) => {
  const handleClick = text => {
    setMenuSelection(text);
  };

  return (
    <MenuContainer>
      <h2>
        <span>
          F<br />
          <span>...'...,</span>
        </span>
        lute{' '}
        <span>
          C<br />
          <span>...'...,</span>
        </span>
        ards
      </h2>
      <MenuSelectors menuSelection={menuSelection}>
        <div
          onClick={() => handleClick('how')}
          className={menuSelection === 'how' ? 'selected' : null}
        >
          How To
        </div>
        <div
          onClick={() => handleClick('about')}
          className={menuSelection === 'about' ? 'selected' : null}
        >
          About
        </div>
      </MenuSelectors>
      {menuSelection === 'how' ? <HowTo /> : <About />}
    </MenuContainer>
  );
};

export default Menu;
