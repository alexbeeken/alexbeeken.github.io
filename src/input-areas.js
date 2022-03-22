import React from 'react';
import KeyNav from './key-nav.js';
import PianoArea from './piano-area.js';
import GuitarArea from './guitar-area.js';
import Exercizes from './exercizes.js';
import helpers from './helpers.js';

const LYDIAN = [
 1,
 3,
 5,
 7,
 8,
 10,
 12
]

class InputAreas extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeNotes: [],
      guitarStrings: [null, null, null, null, null, null],
      guitarStrings: [null, null, null, null, null, null]
    }
  }

  updateNotesFromGuitar = (newNotes) => {
    console.log('newNotes');
    console.log(newNotes);

    let convertedNotes = newNotes.map((note, index) => {
      return helpers.fretToMidiNumber(note, index + 1);
    });
    let convertedFrets = convertedNotes.map((note, index) => {
      return helpers.midiNumberToFret(note, index + 1);
    });

    this.setState({
      activeNotes: convertedNotes,
      guitarStrings: convertedFrets
    })
  }

  setLydian(newNotes) {
    console.log('change notes');
    console.log(newNotes);
    this.setState({
      activeNotes: LYDIAN,
    })
  }

  render() {
    console.log(this.state.guitarStrings);
    return(
      <div>
        <ul className="navbar-nav mr-auto">
          <KeyNav />
        </ul>
        <div className="row">
          <div className="col-1">
            <Exercizes setLydian={this.setLydian} />
          </div>
          <div className="col-11">
            <PianoArea activeNotes={this.state.activeNotes} updateNotes={this.updateNotes}/>
            <GuitarArea updateNotes={this.updateNotesFromGuitar} strings={this.state.guitarStrings}/>
          </div>
        </div>
      </div>
    )
  }
}

export default InputAreas;
