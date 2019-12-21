const notes = [
  {
    index: 0,
    letters: ['C'],
    black: false,
    register: 'low',
    imgRef: 'lowC',
    abcCode: 'C',
    midiCode: 'C'
  },
  {
    index: 1,
    letters: ['C♯', 'D♭'],
    black: true,
    register: 'low',
    imgRef: 'lowCs',
    abcCode: '^C_D',
    midiCode: '^C'
  },
  {
    index: 2,
    letters: ['D'],
    black: false,
    register: 'low',
    imgRef: 'lowD',
    abcCode: 'D',
    midiCode: 'D'
  },
  {
    index: 3,
    letters: ['D♯', 'E♭'],
    black: true,
    register: 'low',
    imgRef: 'lowDs',
    abcCode: '^D',
    midiCode: '^D'
  },
  {
    index: 4,
    letters: ['E', 'F♭'],
    black: false,
    register: 'low',
    imgRef: 'lowMidE',
    abcCode: 'E_F',
    midiCode: 'E'
  },
  {
    index: 5,
    letters: ['E♯', 'F'],
    black: false,
    register: 'low',
    imgRef: 'lowMidEs',
    abcCode: '^EF',
    midiCode: 'F'
  },
  {
    index: 6,
    letters: ['F♯', 'G♭'],
    black: true,
    register: 'low',
    imgRef: 'lowMidFs',
    abcCode: '^F_G',
    midiCode: '^F'
  },
  {
    index: 7,
    letters: ['G'],
    black: false,
    register: 'low',
    imgRef: 'lowMidG',
    abcCode: 'G',
    midiCode: 'G'
  },
  {
    index: 8,
    letters: ['G♯', 'A♭'],
    black: true,
    register: 'low',
    imgRef: 'lowMidGs',
    abcCode: '^G_A',
    midiCode: '^G'
  },
  {
    index: 9,
    letters: ['A'],
    black: false,
    register: 'low',
    imgRef: 'lowMidA',
    abcCode: 'A',
    midiCode: 'A'
  },
  {
    index: 10,
    letters: ['A♯', 'B♭'],
    black: true,
    register: 'low',
    imgRef: 'lowMidAs',
    abcCode: '^A_B',
    midiCode: '^A'
  },
  {
    index: 11,
    letters: ['B', 'C♭'],
    black: false,
    register: 'low',
    imgRef: 'lowMidB',
    abcCode: 'B_c',
    midiCode: 'B'
  },
  {
    index: 12,
    letters: ['C'],
    black: false,
    register: 'low',
    imgRef: 'lowMidBs',
    abcCode: '^Bc',
    midiCode: 'c'
  },
  {
    index: 13,
    letters: ['C♯', 'D♭'],
    black: true,
    register: 'mid',
    imgRef: 'midHiCs',
    abcCode: '^c_d',
    midiCode: '^c'
  },
  {
    index: 14,
    letters: ['D'],
    black: false,
    register: 'mid',
    imgRef: 'midD',
    abcCode: 'd',
    midiCode: 'd'
  },
  {
    index: 15,
    letters: ['D♯', 'E♭'],
    black: true,
    register: 'mid',
    imgRef: 'midDs',
    abcCode: '^d_e',
    midiCode: '^d'
  },
  {
    index: 16,
    letters: ['E', 'F♭'],
    black: false,
    register: 'mid',
    imgRef: 'lowMidE',
    abcCode: 'e_f',
    midiCode: 'e'
  },
  {
    index: 17,
    letters: ['E♯', 'F'],
    black: false,
    register: 'mid',
    imgRef: 'lowMidEs',
    abcCode: '^ef',
    midiCode: 'f'
  },
  {
    index: 18,
    letters: ['F♯', 'G♭'],
    black: true,
    register: 'mid',
    imgRef: 'lowMidFs',
    abcCode: '^f_g',
    midiCode: '^f'
  },
  {
    index: 19,
    letters: ['G'],
    black: false,
    register: 'mid',
    imgRef: 'lowMidG',
    abcCode: 'g',
    midiCode: 'g'
  },
  {
    index: 20,
    letters: ['G♯', 'A♭'],
    black: true,
    register: 'mid',
    imgRef: 'lowMidGs',
    abcCode: '^g_a',
    midiCode: '^g'
  },
  {
    index: 21,
    letters: ['A'],
    black: false,
    register: 'mid',
    imgRef: 'lowMidA',
    abcCode: 'a',
    midiCode: 'a'
  },
  {
    index: 22,
    letters: ['A♯', 'B♭'],
    black: true,
    register: 'mid',
    imgRef: 'lowMidAs',
    abcCode: '^a_b',
    midiCode: '^a'
  },
  {
    index: 23,
    letters: ['B', 'C♭'],
    black: false,
    register: 'mid',
    imgRef: 'lowMidB',
    abcCode: "b_c'",
    midiCode: 'b'
  },
  {
    index: 24,
    letters: ['B♯', 'C'],
    black: false,
    register: 'mid',
    imgRef: 'lowMidBs',
    abcCode: "^bc'",
    midiCode: "c'"
  },
  {
    index: 25,
    letters: ['C♯', 'D♭'],
    black: true,
    register: 'mid',
    imgRef: 'midHiCs',
    abcCode: "^c'_d'",
    midiCode: "^c'"
  },
  {
    index: 26,
    letters: ['D'],
    black: false,
    register: 'hi',
    imgRef: 'hiD',
    abcCode: "d'",
    midiCode: "d'"
  },
  {
    index: 27,
    letters: ['D♯', 'E♭'],
    black: true,
    register: 'hi',
    imgRef: 'hiDs',
    abcCode: "^d'_e'",
    midiCode: "^d'"
  },
  {
    index: 28,
    letters: ['E', 'F♭'],
    black: false,
    register: 'hi',
    imgRef: 'hiE',
    abcCode: "e'_f'",
    midiCode: "e'"
  },
  {
    index: 29,
    letters: ['E♯', 'F'],
    black: false,
    register: 'hi',
    imgRef: 'hiEs',
    abcCode: "^e'f'",
    midiCode: "f'"
  },
  {
    index: 30,
    letters: ['F♯', 'G♭'],
    black: true,
    register: 'hi',
    imgRef: 'hiFs',
    abcCode: "^f'_g'",
    midiCode: "^f'"
  },
  {
    index: 31,
    letters: ['G'],
    black: false,
    register: 'hi',
    imgRef: 'hiG',
    abcCode: "g'",
    midiCode: "g'"
  },
  {
    index: 32,
    letters: ['G♯', 'A♭'],
    black: true,
    register: 'hi',
    imgRef: 'hiGs',
    abcCode: "^g'_a'",
    midiCode: "^g'"
  },
  {
    index: 33,
    letters: ['A'],
    black: false,
    register: 'hi',
    imgRef: 'hiA',
    abcCode: "a'",
    midiCode: "a'"
  },
  {
    index: 34,
    letters: ['A♯', 'B♭'],
    black: true,
    register: 'hi',
    imgRef: 'hiAs',
    abcCode: "^a'_b'",
    midiCode: "^a'"
  },
  {
    index: 35,
    letters: ['B', 'C♭'],
    black: false,
    register: 'hi',
    imgRef: 'hiB',
    abcCode: "b'_c''",
    midiCode: "b'"
  },
  {
    index: 36,
    letters: ['C'],
    black: false,
    register: 'hi',
    imgRef: 'hiC',
    abcCode: "c''",
    midiCode: "c''"
  }
];

export default notes;
