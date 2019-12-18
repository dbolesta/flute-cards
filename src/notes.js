const notes = [
  {
    index: 0,
    letters: ['C'],
    black: false,
    register: 'low',
    imgRef: 'lowC',
    abcCode: 'C|'
  },
  {
    index: 1,
    letters: ['C♯', 'D♭'],
    black: true,
    register: 'low',
    imgRef: 'lowCs',
    abcCode: '^C_D'
  },
  {
    index: 2,
    letters: ['D'],
    black: false,
    register: 'low',
    imgRef: 'lowD',
    abcCode: 'D'
  },
  {
    index: 3,
    letters: ['D♯', 'E♭'],
    black: true,
    register: 'low',
    imgRef: 'lowDs',
    abcCode: '^D'
  },
  {
    index: 4,
    letters: ['E', 'F♭'],
    black: false,
    register: 'low',
    imgRef: 'lowMidE',
    abcCode: 'E_F'
  },
  {
    index: 5,
    letters: ['E♯', 'F'],
    black: false,
    register: 'low',
    imgRef: 'lowMidEs',
    abcCode: '^EF'
  },
  {
    index: 6,
    letters: ['F♯', 'G♭'],
    black: true,
    register: 'low',
    imgRef: 'lowMidFs',
    abcCode: '^F_G'
  },
  {
    index: 7,
    letters: ['G'],
    black: false,
    register: 'low',
    imgRef: 'lowMidG',
    abcCode: 'G'
  },
  {
    index: 8,
    letters: ['G♯', 'A♭'],
    black: true,
    register: 'low',
    imgRef: 'lowMidGs',
    abcCode: '^G_A'
  },
  {
    index: 9,
    letters: ['A'],
    black: false,
    register: 'low',
    imgRef: 'lowMidA',
    abcCode: 'A'
  },
  {
    index: 10,
    letters: ['A♯', 'B♭'],
    black: true,
    register: 'low',
    imgRef: 'lowMidAs',
    abcCode: '^A_B'
  },
  {
    index: 11,
    letters: ['B', 'C♭'],
    black: false,
    register: 'low',
    imgRef: 'lowMidB',
    abcCode: 'B_c'
  },
  {
    index: 12,
    letters: ['B♯', 'C'],
    black: false,
    register: 'low',
    imgRef: 'lowMidBs',
    abcCode: '^Bc'
  },
  {
    index: 13,
    letters: ['C♯', 'D♭'],
    black: true,
    register: 'mid',
    imgRef: 'midHiCs',
    abcCode: '^c_d'
  },
  {
    index: 14,
    letters: ['D'],
    black: false,
    register: 'mid',
    imgRef: 'midD',
    abcCode: 'd'
  },
  {
    index: 15,
    letters: ['D♯', 'E♭'],
    black: true,
    register: 'mid',
    imgRef: 'midDs',
    abcCode: '^d_e'
  },
  {
    index: 16,
    letters: ['E', 'F♭'],
    black: false,
    register: 'mid',
    imgRef: 'lowMidE',
    abcCode: 'e_f'
  },
  {
    index: 17,
    letters: ['E♯', 'F'],
    black: false,
    register: 'mid',
    imgRef: 'lowMidEs',
    abcCode: '^ef'
  },
  {
    index: 18,
    letters: ['F♯', 'G♭'],
    black: true,
    register: 'mid',
    imgRef: 'lowMidFs',
    abcCode: '^f_g'
  },
  {
    index: 19,
    letters: ['G'],
    black: false,
    register: 'mid',
    imgRef: 'lowMidG',
    abcCode: 'g'
  },
  {
    index: 20,
    letters: ['G♯', 'A♭'],
    black: true,
    register: 'mid',
    imgRef: 'lowMidGs',
    abcCode: '^g_a'
  },
  {
    index: 21,
    letters: ['A'],
    black: false,
    register: 'mid',
    imgRef: 'lowMidA',
    abcCode: 'a'
  },
  {
    index: 22,
    letters: ['A♯', 'B♭'],
    black: true,
    register: 'mid',
    imgRef: 'lowMidAs',
    abcCode: '^a_b'
  },
  {
    index: 23,
    letters: ['B', 'C♭'],
    black: false,
    register: 'mid',
    imgRef: 'lowMidB',
    abcCode: "b_c'"
  },
  {
    index: 24,
    letters: ['B♯', 'C'],
    black: false,
    register: 'mid',
    imgRef: 'lowMidBs',
    abcCode: "^bc'"
  },
  {
    index: 25,
    letters: ['C♯', 'D♭'],
    black: true,
    register: 'mid',
    imgRef: 'midHiCs',
    abcCode: "^c'_d'"
  },
  {
    index: 26,
    letters: ['D'],
    black: false,
    register: 'hi',
    imgRef: 'hiD',
    abcCode: "d'"
  },
  {
    index: 27,
    letters: ['D♯', 'E♭'],
    black: true,
    register: 'hi',
    imgRef: 'hiDs',
    abcCode: "^d'_e'"
  },
  {
    index: 28,
    letters: ['E', 'F♭'],
    black: false,
    register: 'hi',
    imgRef: 'hiE',
    abcCode: "e'_f'"
  },
  {
    index: 29,
    letters: ['E♯', 'F'],
    black: false,
    register: 'hi',
    imgRef: 'hiEs',
    abcCode: "^e'f'"
  },
  {
    index: 30,
    letters: ['F♯', 'G♭'],
    black: true,
    register: 'hi',
    imgRef: 'hiFs',
    abcCode: "^f'_g'"
  },
  {
    index: 31,
    letters: ['G'],
    black: false,
    register: 'hi',
    imgRef: 'hiG',
    abcCode: "g'"
  },
  {
    index: 32,
    letters: ['G♯', 'A♭'],
    black: true,
    register: 'hi',
    imgRef: 'hiGs',
    abcCode: "^g'_a'"
  },
  {
    index: 33,
    letters: ['A'],
    black: false,
    register: 'hi',
    imgRef: 'hiA',
    abcCode: "a'"
  },
  {
    index: 34,
    letters: ['A♯', 'B♭'],
    black: true,
    register: 'hi',
    imgRef: 'hiAs',
    abcCode: "^a'_b'"
  },
  {
    index: 35,
    letters: ['B', 'C♭'],
    black: false,
    register: 'hi',
    imgRef: 'hiB',
    abcCode: "b'_c''"
  },
  {
    index: 36,
    letters: ['C'],
    black: false,
    register: 'hi',
    imgRef: 'hiC',
    abcCode: "c''"
  }
];

export default notes;
