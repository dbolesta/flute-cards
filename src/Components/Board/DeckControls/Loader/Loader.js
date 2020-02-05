import React from 'react';
import styled from 'styled-components';

const LoadContain = styled.div`
  border: 2px solid purple;
  background-color: blue;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 1rem;
  transition: height 0.3s ease-in-out;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  z-index: 99;

  &:hover {
    height: 15rem;
    overflow-y: scroll;
  }
`;

const Loader = () => {
  return (
    <div>
      <LoadContain>
        {Object.keys(localStorage).map((key, i) => (
          <p key={i}>{key}</p>
        ))}
      </LoadContain>
    </div>
  );
};

export default Loader;
