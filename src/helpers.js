const NOTE_NAMES = [
'C',
'Db',
'D',
'Eb',
'E',
'F',
'F#/Gb',
'G',
'Ab',
'A',
'Bb',
'B',
]

const numToName = function(number) {
  return NOTE_NAMES[number]; 
}

exports.numToName = numToName;
