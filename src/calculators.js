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

const SEVENTHS = [
  'fully diminished',
  'half diminished',
  'minor 7th',
  'dominant 7th',
  'major 7th'
]

const ROOT_SEVENTHS = [
  // root to 3rd: minor
  [
    // 3rd to fifth: minor
    [
      SEVENTHS[0],
      SEVENTHS[1],
    ],
    // 3rd to fifth: major
    [
      SEVENTHS[2]
    ],
  ],
  // root to 3rd: major
  [
    // 3rd to fifth: minor
    [
      SEVENTHS[3],
      SEVENTHS[4]
    ]
  ]
]

const FIRST_INVERSION_SEVENTHS = [
  // root to 7th: M6
  [
    // root to 3rd: minor
    [
      SEVENTHS[0],
      null
    ],
    []
  ],
  // root to 7th: m7
  [
    // root to 3rd: minor
    [
      SEVENTHS[1],
      SEVENTHS[2]
    ],
    // root to 3rd: major
    [
      SEVENTHS[3],
      null
    ]
  ],
  // root to 7th: M7
  [
    // root to 3rd: minor
    [],
    // root to 3rd: major
    [
      SEVENTHS[4],
      null
    ]
  ]
]

const SECOND_INVERSION_SEVENTHS = [
  // 5th to 7th: m3
  [
    // 7th to root (inverted): m6
    [
      // root to 3rd: m3
      SEVENTHS[0]
    ],
    // 7th to root (inverted): m7
    [
      // root to 3rd: m3
      SEVENTHS[2],
      // root to 3rd: M3
      SEVENTHS[3],
    ],
  ],
  // 5th to 7th: M3
  [
    // 7th to root (inverted): M6
    [],
    // 7th to root (inverted): m7
    [
      // root to 3rd: m3
      SEVENTHS[1],
    ],
    // 7th to root (inverted): M7
    [
      // root to 3rd: m3
      null,
      // root to 3rd: M3
      SEVENTHS[4]
    ],
  ]
]

const THIRD_INVERSION_SEVENTHS = [
  // 3rd to 5th: m3
  [
    // 5th to 7th: m3
    [
      // 7th to root (inverted): M6
      SEVENTHS[0], 
      // 7th to root (inverted): m7
      SEVENTHS[3],
      null
    ],
    // 5th to 7th: M3
    [
      // 7th to root (inverted): M6
      null,
      // 7th to root (inverted): m7
      SEVENTHS[1],
      // 7th to root (inverted): M7
      SEVENTHS[4]
    ],
  ],
  // 3rd to 5th: M3
  [
    // 5th to 7th: m3
    [
      // 7th to root (inverted): M6
      null,
      // 7th to root (inverted): m7
      SEVENTHS[2],
      null
    ]
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

const rootPositionSeventh = function(notes) {
  if (notes.length === 4) {
    let int1 = intervalNum(notes[0], notes[1]);
    let int2 = intervalNum(notes[1], notes[2]);
    let int3 = intervalNum(notes[2], notes[3]);

    if (int1 >= 3 && int1 <= 4 && int2 >= 3 && int2 <= 4 && int3 >= 3 && int3 <= 4) {
      return ROOT_SEVENTHS[int1 - 3][int2 - 3][int3 - 3];
    } else {
      return null;
    }
  } else {
    return null;
  };
}

const firstInversionSeventh = function(notes) {
  if (notes.length === 4) {
    let int1 = invertedIntervalNum(notes[0], notes[1]);
    let int2 = intervalNum(notes[1], notes[2]);
    let int3 = intervalNum(notes[2], notes[3]);

    if (int1 >= 10 && int1 <= 12 && int2 >= 3 && int2 <= 4 && int3 >= 3 && int3 <= 4) {
      return FIRST_INVERSION_SEVENTHS[int1 - 10][int2 - 3][int3 - 3];
    } else {
      return null;
    }
  } else {
    return null;
  };
}

const secondInversionSeventh = function(notes) {
  if (notes.length === 4) {
    let int1 = intervalNum(notes[0], notes[1]);
    let int2 = invertedIntervalNum(notes[1], notes[2]);
    let int3 = intervalNum(notes[2], notes[3]);
 
    if (int1 >= 3 && int1 <= 4 && int2 >= 10 && int2 <= 12 && int3 >= 3 && int3 <= 4) {
      return SECOND_INVERSION_SEVENTHS[int1 - 3][int2 - 10][int3 - 3];
    } else {
      return null;
    }
  } else {
    return null;
  };
}

const thirdInversionSeventh = function(notes) {
  if (notes.length === 4) {
    let int1 = intervalNum(notes[0], notes[1]);
    let int2 = intervalNum(notes[1], notes[2]);
    let int3 = invertedIntervalNum(notes[2], notes[3]);

    if (int1 >= 3 && int1 <= 4 && int2 >= 3 && int2 <= 4 && int3 >= 10 && int3 <= 12) {
      return THIRD_INVERSION_SEVENTHS[int1 - 3][int2 - 3][int3 - 10];
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
exports.rootPositionSeventh = rootPositionSeventh;
exports.firstInversionSeventh = firstInversionSeventh;
exports.secondInversionSeventh = secondInversionSeventh;
exports.thirdInversionSeventh = thirdInversionSeventh;
