// Object info
/*
index:        unique number, sequential order from lowest to highest note
letters:      array of notes by letters. 
              some notes have 2 (sharp/flat and regular)
black:        boolean if note is black or white
nextIsSharp:  if the note could be "sharped" (the following note is a black key)
              used for detemining if we should allow sharp selection on Staff components
register:     what register (~octave) the flute note is: low, mid, or high
imgRef:       variable link to svg image, as defined in svgs.js
abcCode:      abcNotation used to render staff
              abc documentation:
              https://paulrosen.github.io/abcjs/
              https://github.com/paulrosen/abcjs
midiCode:     same as above, but used to play Midi, so only contains single note
noteClass:    class used in Keyboard.js, to render scss properly
spn:          Scientific Pitch Notation, note + number to indicate octave
              https://en.wikipedia.org/wiki/Scientific_pitch_notation
*/

const notes = [
  {
    index: 0,
    letters: ['C'],
    black: false,
    nextIsSharp: true,
    register: 'low',
    imgRef: 'lowC',
    abcCode: 'C',
    midiCode: 'C',
    noteClass: 'c',
    spn: 'C3'
  },
  {
    index: 1,
    letters: ['C♯', 'D♭'],
    black: true,
    nextIsSharp: false,
    register: 'low',
    imgRef: 'lowCs',
    abcCode: '^C_D',
    midiCode: '^C',
    noteClass: 'c_sharp',
    spn: 'Cs3'
  },
  {
    index: 2,
    letters: ['D'],
    black: false,
    nextIsSharp: true,
    register: 'low',
    imgRef: 'lowD',
    abcCode: 'D',
    midiCode: 'D',
    noteClass: 'd',
    spn: 'D3'
  },
  {
    index: 3,
    letters: ['D♯', 'E♭'],
    black: true,
    nextIsSharp: false,
    register: 'low',
    imgRef: 'lowDs',
    abcCode: '^D',
    midiCode: '^D',
    noteClass: 'd_sharp',
    spn: 'Ds3'
  },
  {
    index: 4,
    letters: ['E'],
    black: false,
    nextIsSharp: false,
    register: 'low',
    imgRef: 'lowMidE',
    abcCode: 'E_F',
    midiCode: 'E',
    noteClass: 'e',
    spn: 'E3'
  },
  {
    index: 5,
    letters: ['F'],
    black: false,
    nextIsSharp: true,
    register: 'low',
    imgRef: 'lowMidEs',
    abcCode: '^EF',
    midiCode: 'F',
    noteClass: 'f',
    spn: 'F3'
  },
  {
    index: 6,
    letters: ['F♯', 'G♭'],
    black: true,
    nextIsSharp: false,
    register: 'low',
    imgRef: 'lowMidFs',
    abcCode: '^F_G',
    midiCode: '^F',
    noteClass: 'f_sharp',
    spn: 'Fs3'
  },
  {
    index: 7,
    letters: ['G'],
    black: false,
    nextIsSharp: true,
    register: 'low',
    imgRef: 'lowMidG',
    abcCode: 'G',
    midiCode: 'G',
    noteClass: 'g',
    spn: 'G3'
  },
  {
    index: 8,
    letters: ['G♯', 'A♭'],
    black: true,
    nextIsSharp: false,
    register: 'low',
    imgRef: 'lowMidGs',
    abcCode: '^G_A',
    midiCode: '^G',
    noteClass: 'g_sharp',
    spn: 'Gs3'
  },
  {
    index: 9,
    letters: ['A'],
    black: false,
    nextIsSharp: true,
    register: 'low',
    imgRef: 'lowMidA',
    abcCode: 'A',
    midiCode: 'A',
    noteClass: 'a',
    spn: 'A3'
  },
  {
    index: 10,
    letters: ['A♯', 'B♭'],
    black: true,
    nextIsSharp: false,
    register: 'low',
    imgRef: 'lowMidAs',
    abcCode: '^A_B',
    midiCode: '^A',
    noteClass: 'a_sharp',
    spn: 'As3'
  },
  {
    index: 11,
    letters: ['B'],
    black: false,
    nextIsSharp: false,
    register: 'low',
    imgRef: 'lowMidB',
    abcCode: 'B_c',
    midiCode: 'B',
    noteClass: 'b',
    spn: 'B3'
  },
  {
    index: 12,
    letters: ['C'],
    black: false,
    nextIsSharp: true,
    register: 'low',
    imgRef: 'lowMidBs',
    abcCode: '^Bc',
    midiCode: 'c',
    noteClass: 'c',
    spn: 'C4'
  },
  {
    index: 13,
    letters: ['C♯', 'D♭'],
    black: true,
    nextIsSharp: false,
    register: 'mid',
    imgRef: 'midHiCs',
    abcCode: '^c_d',
    midiCode: '^c',
    noteClass: 'c_sharp',
    spn: 'Cs4'
  },
  {
    index: 14,
    letters: ['D'],
    black: false,
    nextIsSharp: true,
    register: 'mid',
    imgRef: 'midD',
    abcCode: 'd',
    midiCode: 'd',
    noteClass: 'd',
    spn: 'D4'
  },
  {
    index: 15,
    letters: ['D♯', 'E♭'],
    black: true,
    nextIsSharp: false,
    register: 'mid',
    imgRef: 'midDs',
    abcCode: '^d_e',
    midiCode: '^d',
    noteClass: 'd_sharp',
    spn: 'Ds4'
  },
  {
    index: 16,
    letters: ['E'],
    black: false,
    nextIsSharp: false,
    register: 'mid',
    imgRef: 'lowMidE',
    abcCode: 'e_f',
    midiCode: 'e',
    noteClass: 'e',
    spn: 'E4'
  },
  {
    index: 17,
    letters: ['F'],
    black: false,
    nextIsSharp: true,
    register: 'mid',
    imgRef: 'lowMidEs',
    abcCode: '^ef',
    midiCode: 'f',
    noteClass: 'f',
    spn: 'F4'
  },
  {
    index: 18,
    letters: ['F♯', 'G♭'],
    black: true,
    nextIsSharp: false,
    register: 'mid',
    imgRef: 'lowMidFs',
    abcCode: '^f_g',
    midiCode: '^f',
    noteClass: 'f_sharp',
    spn: 'Fs4'
  },
  {
    index: 19,
    letters: ['G'],
    black: false,
    nextIsSharp: true,
    register: 'mid',
    imgRef: 'lowMidG',
    abcCode: 'g',
    midiCode: 'g',
    noteClass: 'g',
    spn: 'G4'
  },
  {
    index: 20,
    letters: ['G♯', 'A♭'],
    black: true,
    nextIsSharp: false,
    register: 'mid',
    imgRef: 'lowMidGs',
    abcCode: '^g_a',
    midiCode: '^g',
    noteClass: 'g_sharp',
    spn: 'Gs4'
  },
  {
    index: 21,
    letters: ['A'],
    black: false,
    nextIsSharp: true,
    register: 'mid',
    imgRef: 'lowMidA',
    abcCode: 'a',
    midiCode: 'a',
    noteClass: 'a',
    spn: 'A4'
  },
  {
    index: 22,
    letters: ['A♯', 'B♭'],
    black: true,
    nextIsSharp: false,
    register: 'mid',
    imgRef: 'lowMidAs',
    abcCode: '^a_b',
    midiCode: '^a',
    noteClass: 'a_sharp',
    spn: 'As4'
  },
  {
    index: 23,
    letters: ['B'],
    black: false,
    nextIsSharp: false,
    register: 'mid',
    imgRef: 'lowMidB',
    abcCode: "b_c'",
    midiCode: 'b',
    noteClass: 'b',
    spn: 'B4'
  },
  {
    index: 24,
    letters: ['C'],
    black: false,
    nextIsSharp: true,
    register: 'mid',
    imgRef: 'lowMidBs',
    abcCode: "^bc'",
    midiCode: "c'",
    noteClass: 'c',
    spn: 'C5'
  },
  {
    index: 25,
    letters: ['C♯', 'D♭'],
    black: true,
    nextIsSharp: false,
    register: 'mid',
    imgRef: 'midHiCs',
    abcCode: "^c'_d'",
    midiCode: "^c'",
    noteClass: 'c_sharp',
    spn: 'Cs5'
  },
  {
    index: 26,
    letters: ['D'],
    black: false,
    nextIsSharp: true,
    register: 'high',
    imgRef: 'hiD',
    abcCode: "d'",
    midiCode: "d'",
    noteClass: 'd',
    spn: 'D5'
  },
  {
    index: 27,
    letters: ['D♯', 'E♭'],
    black: true,
    nextIsSharp: false,
    register: 'high',
    imgRef: 'hiDs',
    abcCode: "^d'_e'",
    midiCode: "^d'",
    noteClass: 'd_sharp',
    spn: 'Ds5'
  },
  {
    index: 28,
    letters: ['E'],
    black: false,
    nextIsSharp: false,
    register: 'high',
    imgRef: 'hiE',
    abcCode: "e'_f'",
    midiCode: "e'",
    noteClass: 'e',
    spn: 'E5'
  },
  {
    index: 29,
    letters: ['F'],
    black: false,
    nextIsSharp: true,
    register: 'high',
    imgRef: 'hiEs',
    abcCode: "^e'f'",
    midiCode: "f'",
    noteClass: 'f',
    spn: 'F5'
  },
  {
    index: 30,
    letters: ['F♯', 'G♭'],
    black: true,
    nextIsSharp: false,
    register: 'high',
    imgRef: 'hiFs',
    abcCode: "^f'_g'",
    midiCode: "^f'",
    noteClass: 'f_sharp',
    spn: 'Fs5'
  },
  {
    index: 31,
    letters: ['G'],
    black: false,
    nextIsSharp: true,
    register: 'high',
    imgRef: 'hiG',
    abcCode: "g'",
    midiCode: "g'",
    noteClass: 'g',
    spn: 'G5'
  },
  {
    index: 32,
    letters: ['G♯', 'A♭'],
    black: true,
    nextIsSharp: false,
    register: 'high',
    imgRef: 'hiGs',
    abcCode: "^g'_a'",
    midiCode: "^g'",
    noteClass: 'g_sharp',
    spn: 'Gs5'
  },
  {
    index: 33,
    letters: ['A'],
    black: false,
    nextIsSharp: true,
    register: 'high',
    imgRef: 'hiA',
    abcCode: "a'",
    midiCode: "a'",
    noteClass: 'a',
    spn: 'A5'
  },
  {
    index: 34,
    letters: ['A♯', 'B♭'],
    black: true,
    nextIsSharp: false,
    register: 'high',
    imgRef: 'hiAs',
    abcCode: "^a'_b'",
    midiCode: "^a'",
    noteClass: 'a_sharp',
    spn: 'As5'
  },
  {
    index: 35,
    letters: ['B'],
    black: false,
    nextIsSharp: false,
    register: 'high',
    imgRef: 'hiB',
    abcCode: "b'_c''",
    midiCode: "b'",
    noteClass: 'b',
    spn: 'B5'
  },
  {
    index: 36,
    letters: ['C'],
    black: false,
    nextIsSharp: false,
    register: 'high',
    imgRef: 'hiC',
    abcCode: "c''",
    midiCode: "c''",
    noteClass: 'c',
    spn: 'C6'
  }
];

export default notes;
