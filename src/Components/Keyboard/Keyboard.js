import React from 'react';
import styled from 'styled-components';
import './keyboard.scss';
import notes from '../../notes';

// bless this beautiful boy:
// https://stackoverflow.com/questions/29656280/how-to-create-a-completely-flexible-piano-keyboard-with-html-and-css

const KeyboardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Keyboard = () => {
  return (
    <KeyboardContainer>
      <div
        className="keyboard"
        onMouseOver={e => console.log(e.target.dataset.note)}
      >
        <div className="key white c" data-note="C3"></div>
        <div className="key black c_sharp" data-note="C#3"></div>
        <div className="key white d" data-note="D3"></div>
        <div className="key black d_sharp" data-note="D#3"></div>
        <div className="key white e" data-note="E3"></div>
        <div className="key white f" data-note="F3"></div>
        <div className="key black f_sharp" data-note="F#3"></div>
        <div className="key white g" data-note="G3"></div>
        <div className="key black g_sharp" data-note="G#3"></div>
        <div className="key white a" data-note="A3"></div>
        <div className="key black a_sharp" data-note="A#3"></div>
        <div className="key white b" data-note="B3"></div>
        <div className="key white c" data-note="C4"></div>
        <div className="key black c_sharp" data-note="C#4"></div>
        <div className="key white d" data-note="D4"></div>
        <div className="key black d_sharp" data-note="D#4"></div>
        <div className="key white e" data-note="E4"></div>
        <div className="key white f" data-note="F4"></div>
        <div className="key black f_sharp" data-note="F#4"></div>
        <div className="key white g" data-note="G4"></div>
        <div className="key black g_sharp" data-note="G#4"></div>
        <div className="key white a" data-note="A4"></div>
        <div className="key black a_sharp" data-note="A#4"></div>
        <div className="key white b" data-note="B4"></div>
        <div className="key white c" data-note="C5"></div>
        <div className="key black c_sharp" data-note="C#5"></div>
        <div className="key white d" data-note="D5"></div>
        <div className="key black d_sharp" data-note="D#5"></div>
        <div className="key white e" data-note="E5"></div>
        <div className="key white f" data-note="F5"></div>
        <div className="key black f_sharp" data-note="F#5"></div>
        <div className="key white g" data-note="G5"></div>
        <div className="key black g_sharp" data-note="G#5"></div>
        <div className="key white a" data-note="A5"></div>
        <div className="key black a_sharp" data-note="A#5"></div>
        <div className="key white b" data-note="B5"></div>
        <div className="key white c" data-note="C6"></div>
      </div>
    </KeyboardContainer>
  );
};

export default Keyboard;
