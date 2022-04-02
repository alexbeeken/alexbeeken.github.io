const INTERVALS = [
  'unison',
  'minor 2nd',
  'major 2nd',
  'minor 3rd',
  'major 3rd',
  'perfect 4th',
  'tritone',
  'perfect 5th',
  'minor 6th',
  'major 6th',
  'minor 7th',
  'major 7th',
  'octave',
  'minor 9th',
  'major 9th',
  'minor 10th',
  'major 10th',
  '11th',
  'sharp 11th',
  '12th',
  'minor 13th',
  'major 13th',
  'minor 14th',
  'major 14th',
]

const TRIADS = [
  'diminished',
  'minor',
  'major',
  'augmented'
]

const ROOT_TRIADS = [
  [
    TRIADS[0],
    TRIADS[1]
  ],
  [
    TRIADS[2],
    TRIADS[3]
  ]
]

const FIRST_INVERSION_TRIADS= [
  [
    TRIADS[0]
  ],
  [
    TRIADS[1],
    TRIADS[2]
  ],
  [
    null,
    TRIADS[3]
  ]
]

const SECOND_INVERSION_TRIADS= [
  // minor 3rd on bottom: example E to G
  [
    TRIADS[0],
    TRIADS[2]
  ],
  // major 3rd on bottom: example Eb to G
  [
    null,
    TRIADS[1],
    TRIADS[3],
  ]
]

const intervalNum = function(low, high) {
  return high - low; 
}

const invertedIntervalNum = function(low, high) {
  return 13 - intervalNum(low, high); 
}

const getIntervalNum = function(notes) {
  if (notes.length === 2) {
    return intervalNum(notes[0], notes[1]);;
  } else {
    return null;
  };
}

const getInvertedIntervalNum = function(notes) {
  if (notes.length === 2) {
    return invertedIntervalNum(notes[0], notes[1]);;
  } else {
    return null;
  };
}

const getInterval = function(notes) {
  if (notes.length === 2) {
    return INTERVALS[intervalNum(notes[0], notes[1])];
  } else {
    return null;
  };
}

const getIntervalInversion = function(notes) {
  if (notes.length === 2) {
    return INTERVALS[invertedIntervalNum(notes[0], notes[1])];
  } else {
    return null;
  };
}

const rootPositionTriad = function(notes) {
  if (notes.length === 3) {
    let int1 = intervalNum(notes[0], notes[1]);
    let int2 = intervalNum(notes[1], notes[2]);

    if (int1 >= 3 && int1 <= 4 && int2 >= 3 && int2 <= 4) {
      return ROOT_TRIADS[int1 - 3][int2 - 3];
    } else {
      return null;
    }
  } else {
    return null;
  };
}

const firstInversionTriad = function(notes) {
  if (notes.length === 3) {
    let int1 = invertedIntervalNum(notes[0], notes[1]);
    let int2 = intervalNum(notes[1], notes[2]);

    if (int1 >= 7 && int1 <= 9 && int2 >= 3 && int2 <= 4) {
      return FIRST_INVERSION_TRIADS[int1 - 7][int2 - 3];
    } else {
      return null;
    }
  } else {
    return null;
  };
}

const secondInversionTriad = function(notes) {
  if (notes.length === 3) {
    let int1 = intervalNum(notes[0], notes[1]);
    let int2 = invertedIntervalNum(notes[1], notes[2]);

    if (int1 >= 3 && int1 <= 4 && int2 >= 7 && int2 <= 9) {
      return SECOND_INVERSION_TRIADS[int1 - 3][int2 - 7];
    } else {
      return null;
    }
  } else {
    return null;
  };
}

exports.getIntervalNum = getIntervalNum;
exports.getInvertedIntervalNum = getInvertedIntervalNum;
exports.getInterval = getInterval;
exports.getIntervalInversion = getIntervalInversion;
exports.rootPositionTriad = rootPositionTriad;
exports.firstInversionTriad = firstInversionTriad;
exports.secondInversionTriad = secondInversionTriad;
