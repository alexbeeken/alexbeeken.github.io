import React from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';

class PianoArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      updateNotes: props.updateNotes,
      activeNotes: []
    }
  }

  toggleActiveNote(newNote) {
    this.setState((state, props) => ({ activeNotes: [...this.state.activeNotes, newNote]}));
  }

  fooToggleActiveNote(newNote) {
    let notes = this.state.activeNotes;
    let index = notes.indexOf(newNote);

    if (index === -1) {
      this.setState((state, props) => ({ activeNotes: [...notes, newNote]}));
    } else {
      notes.splice(index, 1);
      this.setState((state, props) => ({ activeNotes: notes }));
    }
  }

  render() {
    const firstNote = MidiNumbers.fromNote('e2');
    const lastNote = MidiNumbers.fromNote('b4');

    return (
      <div className="container-xxl">
        <Piano
          activeNotes={this.props.activeNotes}
          noteRange={{ first: firstNote, last: lastNote }}
          useTouchEvents={false}
          onPlayNoteInput={(midiNumber) => {
          }}
          onStopNoteInput={(midiNumber) => {
          }}
          stopNote={(midiNumber) => {
            this.fooToggleActiveNote(midiNumber); 
          }}
          playNote={(midiNumber) => {
          }}
          width={1000}
        />
      </div>
    );
  }
}

export default PianoArea;
