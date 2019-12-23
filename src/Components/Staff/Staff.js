import React from 'react';
import styled from 'styled-components';

const StaffContainer = styled.div`
  background-color: white;
  width: 244px;
  display: inline-flex;
  position: absolute;
  top: 0;
  left: 0;
`;

const NoteContainer = styled.div`
  position: relative;
`;

const LineSpaceContainer = styled.div`
  border: 1px solid red;
  width: 100%;
  margin: 3rem;
  position: relative;
`;

const Line = styled.div`
  border-bottom: 1px solid black;
  margin: 3px 0;
  display: block;
  width: 100%;
`;
const Space = styled.div`
  height: 7px;
  display: block;
  width: 100%;
`;

const SVGContainer = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  top: 0;
`;

const Staff = () => {
  return (
    <StaffContainer>
      <LineSpaceContainer>
        <SVGContainer>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
          >
            <path
              d="m 29.689999999999998 20.025000000000006c 0.09 -0.09 0.24 -0.06 0.36 0c 0.12 0.09 0.57 0.6 0.96 1.11c 1.77 2.34 3.21 5.85 3.57 8.73c 0.21 1.56 0.03 3.27 -0.45 4.86c -0.69 2.31 -1.92 4.47 -4.23 7.44c -0.3 0.39 -0.57 0.72 -0.6 0.75c -0.03 0.06 0 0.15 0.18 0.78c 0.54 1.68 1.38 4.44 1.68 5.49l 0.09 0.42l 0.39 0c 1.47 0.09 2.76 0.51 3.96 1.29c 1.83 1.23 3.06 3.21 3.39 5.52c 0.09 0.45 0.12 1.29 0.06 1.74c -0.09 1.02 -0.33 1.83 -0.75 2.73c -0.84 1.71 -2.28 3.06 -4.02 3.72l -0.33 0.12l 0.03 1.26c 0 1.74 -0.06 3.63 -0.21 4.62c -0.45 3.06 -2.19 5.49 -4.47 6.21c -0.57 0.18 -0.9 0.21 -1.59 0.21c -0.69 0 -1.02 -0.03 -1.65 -0.21c -1.14 -0.27 -2.13 -0.84 -2.94 -1.65c -0.99 -0.99 -1.56 -2.16 -1.71 -3.54c -0.09 -0.81 0.06 -1.53 0.45 -2.13c 0.63 -0.99 1.83 -1.56 3 -1.53c 1.5 0.09 2.64 1.32 2.73 2.94c 0.06 1.47 -0.93 2.7 -2.37 2.97c -0.45 0.06 -0.84 0.03 -1.29 -0.09l -0.21 -0.09l 0.09 0.12c 0.39 0.54 0.78 0.93 1.32 1.26c 1.35 0.87 3.06 1.02 4.35 0.36c 1.44 -0.72 2.52 -2.28 2.97 -4.35c 0.15 -0.66 0.24 -1.5 0.3 -3.03c 0.03 -0.84 0.03 -2.94 0 -3c -0.03 0 -0.18 0 -0.36 0.03c -0.66 0.12 -0.99 0.12 -1.83 0.12c -1.05 0 -1.71 -0.06 -2.61 -0.3c -4.02 -0.99 -7.11 -4.35 -7.8 -8.46c -0.12 -0.66 -0.12 -0.99 -0.12 -1.83c 0 -0.84 0 -1.14 0.15 -1.92c 0.36 -2.28 1.41 -4.62 3.3 -7.29l 2.79 -3.6c 0.54 -0.66 0.96 -1.2 0.96 -1.23c 0 -0.03 -0.09 -0.33 -0.18 -0.69c -0.96 -3.21 -1.41 -5.28 -1.59 -7.68c -0.12 -1.38 -0.15 -3.09 -0.06 -3.96c 0.33 -2.67 1.38 -5.07 3.12 -7.08c 0.36 -0.42 0.99 -1.05 1.17 -1.14zm 2.01 4.71c -0.15 -0.3 -0.3 -0.54 -0.3 -0.54c -0.03 0 -0.18 0.09 -0.3 0.21c -2.4 1.74 -3.87 4.2 -4.26 7.11c -0.06 0.54 -0.06 1.41 -0.03 1.89c 0.09 1.29 0.48 3.12 1.08 5.22c 0.15 0.42 0.24 0.78 0.24 0.81c 0 0.03 0.84 -1.11 1.23 -1.68c 1.89 -2.73 2.88 -5.07 3.15 -7.53c 0.09 -0.57 0.12 -1.74 0.06 -2.37c -0.09 -1.23 -0.27 -1.92 -0.87 -3.12zm -2.94 20.7c -0.21 -0.72 -0.39 -1.32 -0.42 -1.32c 0 0 -1.2 1.47 -1.86 2.37c -2.79 3.63 -4.02 6.3 -4.35 9.3c -0.03 0.21 -0.03 0.69 -0.03 1.08c 0 0.69 0 0.75 0.06 1.11c 0.12 0.54 0.27 0.99 0.51 1.47c 0.69 1.38 1.83 2.55 3.42 3.42c 0.96 0.54 2.07 0.9 3.21 1.08c 0.78 0.12 2.04 0.12 2.94 -0.03c 0.51 -0.06 0.45 -0.03 0.42 -0.3c -0.24 -3.33 -0.72 -6.33 -1.62 -10.08c -0.09 -0.39 -0.18 -0.75 -0.18 -0.78c -0.03 -0.03 -0.42 0 -0.81 0.09c -0.9 0.18 -1.65 0.57 -2.22 1.14c -0.72 0.72 -1.08 1.65 -1.05 2.64c 0.06 0.96 0.48 1.83 1.23 2.58c 0.36 0.36 0.72 0.63 1.17 0.9c 0.33 0.18 0.36 0.21 0.42 0.33c 0.18 0.42 -0.18 0.9 -0.6 0.87c -0.18 -0.03 -0.84 -0.36 -1.26 -0.63c -0.78 -0.51 -1.38 -1.11 -1.86 -1.83c -1.77 -2.7 -0.99 -6.42 1.71 -8.19c 0.3 -0.21 0.81 -0.48 1.17 -0.63c 0.3 -0.09 1.02 -0.3 1.14 -0.3c 0.06 0 0.09 0 0.09 -0.03c 0.03 -0.03 -0.51 -1.92 -1.23 -4.26zm 3.78 7.41c -0.18 -0.03 -0.36 -0.06 -0.39 -0.06c -0.03 0 0 0.21 0.18 1.02c 0.75 3.18 1.26 6.3 1.5 9.09c 0.06 0.72 0 0.69 0.51 0.42c 0.78 -0.36 1.44 -0.96 1.98 -1.77c 1.08 -1.62 1.2 -3.69 0.3 -5.55c -0.81 -1.62 -2.31 -2.79 -4.08 -3.15z"
              stroke="none"
              fill="#000000"
              class=""
            ></path>
          </svg>
        </SVGContainer>

        <Line />
        <Space />
        <Line />
        <Space />
        <Line />
        <Space />
        <Line />
        <Space />
        <Line />
      </LineSpaceContainer>

      {/* <svg
        role="img"
        viewBox="0 0 130 115.81"
        preserveAspectRatio="xMinYMin meet"
        style={{
          width: '100%'
        }}
      >
        <title>Sheet Music</title>
        <g>
          <path
            d="M 15 33.835 L 115.00000000000001 33.835 L 115.00000000000001 34.535000000000004 L 15 34.535000000000004 z"
            stroke="none"
            fill="#000000"
            class=""
          ></path>
          <path
            d="M 15 41.585 L 115.00000000000001 41.585 L 115.00000000000001 42.285000000000004 L 15 42.285000000000004 z"
            stroke="none"
            fill="#000000"
            class=""
          ></path>
          <path
            d="M 15 49.335 L 115.00000000000001 49.335 L 115.00000000000001 50.035000000000004 L 15 50.035000000000004 z"
            stroke="none"
            fill="#000000"
            class=""
          ></path>
          <path
            d="M 15 57.085 L 115.00000000000001 57.085 L 115.00000000000001 57.785000000000004 L 15 57.785000000000004 z"
            stroke="none"
            fill="#000000"
            class=""
          ></path>
          <path
            d="M 15 64.83500000000001 L 115.00000000000001 64.83500000000001 L 115.00000000000001 65.535 L 15 65.535 z"
            stroke="none"
            fill="#000000"
            class=""
          ></path>
        </g>
        <path
          d="M 0 22.65 L 100 22.65 L 100 23.35 L 0 23.35 z"
          stroke="none"
          fill="rgba(0,0,0,0)"
          fill-opacity="0"
          class=""
          data-vertical="23"
        ></path>
        <path
          d="m 29.689999999999998 20.025000000000006c 0.09 -0.09 0.24 -0.06 0.36 0c 0.12 0.09 0.57 0.6 0.96 1.11c 1.77 2.34 3.21 5.85 3.57 8.73c 0.21 1.56 0.03 3.27 -0.45 4.86c -0.69 2.31 -1.92 4.47 -4.23 7.44c -0.3 0.39 -0.57 0.72 -0.6 0.75c -0.03 0.06 0 0.15 0.18 0.78c 0.54 1.68 1.38 4.44 1.68 5.49l 0.09 0.42l 0.39 0c 1.47 0.09 2.76 0.51 3.96 1.29c 1.83 1.23 3.06 3.21 3.39 5.52c 0.09 0.45 0.12 1.29 0.06 1.74c -0.09 1.02 -0.33 1.83 -0.75 2.73c -0.84 1.71 -2.28 3.06 -4.02 3.72l -0.33 0.12l 0.03 1.26c 0 1.74 -0.06 3.63 -0.21 4.62c -0.45 3.06 -2.19 5.49 -4.47 6.21c -0.57 0.18 -0.9 0.21 -1.59 0.21c -0.69 0 -1.02 -0.03 -1.65 -0.21c -1.14 -0.27 -2.13 -0.84 -2.94 -1.65c -0.99 -0.99 -1.56 -2.16 -1.71 -3.54c -0.09 -0.81 0.06 -1.53 0.45 -2.13c 0.63 -0.99 1.83 -1.56 3 -1.53c 1.5 0.09 2.64 1.32 2.73 2.94c 0.06 1.47 -0.93 2.7 -2.37 2.97c -0.45 0.06 -0.84 0.03 -1.29 -0.09l -0.21 -0.09l 0.09 0.12c 0.39 0.54 0.78 0.93 1.32 1.26c 1.35 0.87 3.06 1.02 4.35 0.36c 1.44 -0.72 2.52 -2.28 2.97 -4.35c 0.15 -0.66 0.24 -1.5 0.3 -3.03c 0.03 -0.84 0.03 -2.94 0 -3c -0.03 0 -0.18 0 -0.36 0.03c -0.66 0.12 -0.99 0.12 -1.83 0.12c -1.05 0 -1.71 -0.06 -2.61 -0.3c -4.02 -0.99 -7.11 -4.35 -7.8 -8.46c -0.12 -0.66 -0.12 -0.99 -0.12 -1.83c 0 -0.84 0 -1.14 0.15 -1.92c 0.36 -2.28 1.41 -4.62 3.3 -7.29l 2.79 -3.6c 0.54 -0.66 0.96 -1.2 0.96 -1.23c 0 -0.03 -0.09 -0.33 -0.18 -0.69c -0.96 -3.21 -1.41 -5.28 -1.59 -7.68c -0.12 -1.38 -0.15 -3.09 -0.06 -3.96c 0.33 -2.67 1.38 -5.07 3.12 -7.08c 0.36 -0.42 0.99 -1.05 1.17 -1.14zm 2.01 4.71c -0.15 -0.3 -0.3 -0.54 -0.3 -0.54c -0.03 0 -0.18 0.09 -0.3 0.21c -2.4 1.74 -3.87 4.2 -4.26 7.11c -0.06 0.54 -0.06 1.41 -0.03 1.89c 0.09 1.29 0.48 3.12 1.08 5.22c 0.15 0.42 0.24 0.78 0.24 0.81c 0 0.03 0.84 -1.11 1.23 -1.68c 1.89 -2.73 2.88 -5.07 3.15 -7.53c 0.09 -0.57 0.12 -1.74 0.06 -2.37c -0.09 -1.23 -0.27 -1.92 -0.87 -3.12zm -2.94 20.7c -0.21 -0.72 -0.39 -1.32 -0.42 -1.32c 0 0 -1.2 1.47 -1.86 2.37c -2.79 3.63 -4.02 6.3 -4.35 9.3c -0.03 0.21 -0.03 0.69 -0.03 1.08c 0 0.69 0 0.75 0.06 1.11c 0.12 0.54 0.27 0.99 0.51 1.47c 0.69 1.38 1.83 2.55 3.42 3.42c 0.96 0.54 2.07 0.9 3.21 1.08c 0.78 0.12 2.04 0.12 2.94 -0.03c 0.51 -0.06 0.45 -0.03 0.42 -0.3c -0.24 -3.33 -0.72 -6.33 -1.62 -10.08c -0.09 -0.39 -0.18 -0.75 -0.18 -0.78c -0.03 -0.03 -0.42 0 -0.81 0.09c -0.9 0.18 -1.65 0.57 -2.22 1.14c -0.72 0.72 -1.08 1.65 -1.05 2.64c 0.06 0.96 0.48 1.83 1.23 2.58c 0.36 0.36 0.72 0.63 1.17 0.9c 0.33 0.18 0.36 0.21 0.42 0.33c 0.18 0.42 -0.18 0.9 -0.6 0.87c -0.18 -0.03 -0.84 -0.36 -1.26 -0.63c -0.78 -0.51 -1.38 -1.11 -1.86 -1.83c -1.77 -2.7 -0.99 -6.42 1.71 -8.19c 0.3 -0.21 0.81 -0.48 1.17 -0.63c 0.3 -0.09 1.02 -0.3 1.14 -0.3c 0.06 0 0.09 0 0.09 -0.03c 0.03 -0.03 -0.51 -1.92 -1.23 -4.26zm 3.78 7.41c -0.18 -0.03 -0.36 -0.06 -0.39 -0.06c -0.03 0 0 0.21 0.18 1.02c 0.75 3.18 1.26 6.3 1.5 9.09c 0.06 0.72 0 0.69 0.51 0.42c 0.78 -0.36 1.44 -0.96 1.98 -1.77c 1.08 -1.62 1.2 -3.69 0.3 -5.55c -0.81 -1.62 -2.31 -2.79 -4.08 -3.15z"
          stroke="none"
          fill="#000000"
          class=""
        ></path>
        <rect
          x="15"
          y="22.560000000000002"
          width="24.051"
          height="54.25"
          fill="#000000"
          stroke="#000000"
          fill-opacity="0"
          stroke-opacity="0"
        ></rect>
        <path
          d="m 55.561 65.01c 0.51 -0.03 2.01 0 2.52 0.03c 1.41 0.18 2.64 0.51 3.72 1.08c 1.2 0.63 1.95 1.41 2.19 2.31c 0.09 0.33 0.09 0.9 0 1.23c -0.24 0.9 -0.99 1.68 -2.19 2.31c -1.08 0.57 -2.28 0.9 -3.75 1.08c -0.66 0.06 -2.31 0.06 -2.97 0c -1.47 -0.18 -2.67 -0.51 -3.75 -1.08c -1.2 -0.63 -1.95 -1.41 -2.19 -2.31c -0.09 -0.33 -0.09 -0.9 0 -1.23c 0.24 -0.9 0.99 -1.68 2.19 -2.31c 1.2 -0.63 2.61 -0.99 4.23 -1.11zm 0.57 0.66c -0.87 -0.15 -1.53 0 -2.04 0.51c -0.15 0.15 -0.24 0.27 -0.33 0.48c -0.24 0.51 -0.36 1.08 -0.33 1.77c 0.03 0.69 0.18 1.26 0.42 1.77c 0.6 1.17 1.74 1.98 3.18 2.22c 1.11 0.21 1.95 -0.15 2.34 -0.99c 0.24 -0.51 0.36 -1.08 0.33 -1.8c -0.06 -1.11 -0.45 -2.04 -1.17 -2.76c -0.63 -0.63 -1.47 -1.05 -2.4 -1.2z"
          stroke="none"
          fill="#000000"
          class=""
        ></path>
        <NoteContainer>
          <rect
            x="49.051"
            y="65.0115"
            width="14.985"
            height="8.097000000000008"
            fill="#000000"
            stroke="#000000"
            fill-opacity="0"
            stroke-opacity="0"
          ></rect>
        </NoteContainer>
      </svg> */}
    </StaffContainer>
  );
};

export default Staff;