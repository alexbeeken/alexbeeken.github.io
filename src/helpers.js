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

exports.numToNoteName = numToNoteName;
exports.numToIntervalName = numToIntervalName;
