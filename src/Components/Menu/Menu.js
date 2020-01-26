import React, { useState } from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  background-color: hsl(180, 65.4%, 25.6%);
  flex: 0 1 16rem;
  padding: 0.5rem;

  & > h2 > span {
    border: 1px solid black;
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
  justify-content: space-around;
  width: 100%;
  /* border: 1px solid red; */

  div {
    background-color: rgba(211, 211, 211, 0.5);
    padding: 0.3rem 0.6rem;
    border-radius: 5px;
    cursor: pointer;

    &.selected {
      background-color: rgba(211, 211, 211, 1);
    }
  }
`;

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState('how');

  const handleClick = text => {
    setSelectedMenu(text);
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
      <MenuSelectors selectedMenu={selectedMenu}>
        <div
          onClick={() => handleClick('how')}
          className={selectedMenu === 'how' ? 'selected' : null}
        >
          How To
        </div>
        <div
          onClick={() => handleClick('about')}
          className={selectedMenu === 'about' ? 'selected' : null}
        >
          About
        </div>
      </MenuSelectors>
      {selectedMenu === 'how' ? (
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Repellendus laudantium hic velit non eos blanditiis eaque
          libero obcaecati autem at? Iusto laboriosam provident
          deleniti reiciendis ipsa? Voluptatem provident expedita
          maxime.
        </p>
      ) : (
        <h1>I made this (:</h1>
      )}
    </MenuContainer>
  );
};

export default Menu;
