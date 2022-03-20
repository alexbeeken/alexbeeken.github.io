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
      guitarStrings: [null, null, null, null, null, null]
    }
  }

  updateNotesFromGuitar(newNotes) {
    let convertedNotes = newNotes.map((note) => {
      if (note === null) { continue; };
      return helpers.fretToMidiNumber(newNotes);
    });
    this.updateNotes(convertedNotes);
  }

  updateNotes(newNotes) {
    console.log(newNotes);
  }

  render() {
    return(
      <div className="container">
        <ul className="navbar-nav mr-auto">
          <KeyNav />
        </ul>
        <PianoArea updateNotes={this.updateNotes}/>
        <GuitarArea updateNotes={this.updateNotesFromGuitar} strings={this.state.guitarStrings}/>
      </div>
    )
  }
}

export default InputAreas;
