import React from 'react';
import styled from 'styled-components';

const StyledLedgerLine = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: center;

  & span {
    margin: 3px 0;
  }

  & span:nth-of-type(1) {
    border-bottom: 1px solid transparent;
    flex: 3 0 auto;
  }
  & span:nth-of-type(2) {
    border-bottom: 1px solid black;
    flex: 1 0 auto;
  }
  & span:nth-of-type(3) {
    border-bottom: 1px solid transparent;
    flex: 1 0 auto;
  }
`;

const LedgerLine = () => {
  return (
    <StyledLedgerLine>
      <span></span>
      <span></span>
      <span></span>
    </StyledLedgerLine>
  );
};

export default LedgerLine;
