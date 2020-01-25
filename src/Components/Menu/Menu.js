import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  background-color: hsl(180, 65.4%, 25.6%);
  flex: 0 1 16rem;
`;

const Menu = () => {
  return (
    <MenuContainer>
      <h2>Flute Cards</h2>
      <p>Heres all the info youll ever need</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Repellendus laudantium hic velit non eos blanditiis eaque
        libero obcaecati autem at? Iusto laboriosam provident deleniti
        reiciendis ipsa? Voluptatem provident expedita maxime.
      </p>
    </MenuContainer>
  );
};

export default Menu;
