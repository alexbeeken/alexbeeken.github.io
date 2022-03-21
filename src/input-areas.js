import React from 'react';
import KeyNav from './key-nav.js';
import PianoArea from './piano-area.js';
import GuitarArea from './guitar-area.js';
import helpers from './helpers.js';

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

  updateNotes(newNotes) {
  }

  render() {
    console.log(this.state.guitarStrings);
    return(
      <div className="container">
        <ul className="navbar-nav mr-auto">
          <KeyNav />
        </ul>
        <PianoArea activeNotes={this.state.activeNotes} updateNotes={this.updateNotes}/>
        <GuitarArea updateNotes={this.updateNotesFromGuitar} strings={this.state.guitarStrings}/>
      </div>
    )
  }
}

export default InputAreas;
