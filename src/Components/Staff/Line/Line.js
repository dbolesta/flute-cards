import React from 'react';
import styled from 'styled-components';

const StyledLine = styled.div`
  border-bottom: 1px solid black;
  margin: 2px 0;
  display: block;
  width: 100%;
  position: relative;
`;

const Line = () => {
  return <StyledLine></StyledLine>;
};

export default Line;
