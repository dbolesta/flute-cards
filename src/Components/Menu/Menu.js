import React from 'react';
import styled from 'styled-components';
import logoSVG from '../../Images/logo.svg';

const MenuContainer = styled.div`
  /* background-color: ${(props) => props.theme.windowsDark}; */
  background-color: #fff;
  /* background-color: hsl(180, 65.4%, 25.6%); */
  flex: 0 1 25rem;
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 6px;
  box-shadow: 4px 4px 16px #888888;
  & > h2 > span {
    /* border: 1px solid black; */
    border-radius: 0.2rem;
    /* background-color: white; */
    background-color: rgba(211, 211, 211, 1);
    padding: 0.25rem;
    display: inline-flex;
    flex-direction: column;

    & > span {
      /* background-color: red; */
      font-size: 0.1rem;
    }
  }

  div.mobile-hide {
    display: inline-block;
  }
`;

const LogoContainer = styled.div`
  width: 100%;
  padding: 1rem 4rem;

  img {
    width: 100%;
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
    /* color: #e8e8e8; */
    color: #333;

    li {
      margin-bottom: 0.5rem;
    }
  }

  span {
    font-weight: 600;
  }

  span.menu-keyboard {
    color: ${(props) => props.theme.eighties.pink};
  }
  span.menu-staff {
    color: ${(props) => props.theme.eighties.blue};
  }
  span.menu-registers {
    color: ${(props) => props.theme.eighties.yellow};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    .mobile-hide {
      display: none !important;
    }
  }
`;

const AboutContainer = styled.div`
  text-align: left;
  margin: 0 1rem;
  /* color: #e8e8e8; */
  color: #333;
`;

// Sub Components
const HowTo = () => {
  return (
    <HowToContainer>
      <ol>
        <li>
          Select notes from the{' '}
          <div className="mobile-hide">
            <span className="menu-keyboard">Keyboard</span>,{' '}
            <span className="menu-staff">Staff</span>, or{' '}
          </div>
          <span className="menu-registers">Registers</span> to add
          cards to your Deck below.
        </li>
        <li>
          Each Card displays the note, and a Flute Fingering diagram.
        </li>
        <li>
          Drag &amp; drop cards to create melodies and help you learn songs
          easily!
        </li>
        <li>
          Use the Play button to hear what your current Row of Cards
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
        The purpose of this site is to help people learn songs and
        phrases on the flute.
      </p>
      <p>I hope you find it helpful!</p>
      <p>
        Made by Damon Bolesta -{' '}
        <a href="https://damonbolesta.com">Website</a>
      </p>
      <p>
        View this project on <a href="https://github.com/dbolesta/flute-cards">Github</a>
      </p>
      <p>
        Suggestions? Comments? Questions? Contact me:{' '}
        <a href="mailto:dbolesta@gmail.com?subject=Flute Cards">
          dbolesta@gmail.com
        </a>
      </p>
    </AboutContainer>
  );
};

const Menu = ({ menuSelection, setMenuSelection }) => {
  const handleClick = (text) => {
    setMenuSelection(text);
  };

  return (
    <MenuContainer>
      <h2 style={{ display: 'none' }}>
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
      <LogoContainer>
        <img src={logoSVG} alt="Flute Cards" />
      </LogoContainer>
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
