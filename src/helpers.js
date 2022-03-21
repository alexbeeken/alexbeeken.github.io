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

const midiNumberToFret = function(number, string) {
  console.log('number: ' + number);
  if (number === null || number === undefined || number === -1) {
    return null;
  } 

  switch(string) {
    case 1:
      return number - 64;
    case 2:
      return number - 59;
    case 3:
      return number - 55;
    case 4:
      return number - 50;
    case 5:
      return number - 45;
    case 6:
      return number - 40;
  }
}

const fretToMidiNumber = function(fret, string) {
  console.log('fret: ' + fret);
  // assume standard tuning (for now)
  if (fret === null || fret === undefined || fret === -1) {
    return null;
  }

  switch(string) {
    case 1:
      return 64 + fret;
    case 2:
      return 59 + fret;
    case 3:
      return 55 + fret;
    case 4:
      return 50 + fret;
    case 5:
      return 45 + fret;
    case 6:
      return 40 + fret;
  }
}

exports.numToNoteName = numToNoteName;
exports.numToIntervalName = numToIntervalName;
exports.fretToMidiNumber = fretToMidiNumber;
exports.midiNumberToFret = midiNumberToFret;
