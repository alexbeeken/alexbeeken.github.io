const NOTE_NAMES = [
'C',
'Db',
'D',
'Eb',
'E',
'F',
'F#',
'G',
'Ab',
'A',
'Bb',
'B',
]

const INTERVAL_NAMES = [
'U',
'm2',
'M2',
'm3',
'M3',
'P4',
'TT',
'P5',
'm6',
'M6',
'm7',
'M7',
]

const numToNoteName = function(number) {
  return NOTE_NAMES[number]; 
}

const numToIntervalName = function(number) {
  return INTERVAL_NAMES[number]; 
}

const fretToMidiNumber = function(fret, string) {
  // assume standard tuning (for now)
  let castFret = fret === null ? 0 : fret;

  switch(string) {
    case: 1
      return 64 + castFret;
    case: 2
      return 59 + castFret;
    case: 3
      return 55 + castFret;
    case: 4
      return 50 + castFret;
    case: 5
      return 45 + castFret;
    case: 6 
      return 40 + castFret;
  }
}

exports.numToNoteName = numToNoteName;
exports.numToIntervalName = numToIntervalName;
