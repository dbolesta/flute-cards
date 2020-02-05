import React from 'react';
import styled from 'styled-components';

const LoadContain = styled.div`
  border: 2px solid purple;
  background-color: blue;
  display: flex;
  flex-direction: column;
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
