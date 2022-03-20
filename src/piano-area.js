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
    const firstNote = MidiNumbers.fromNote('c3');
    const lastNote = MidiNumbers.fromNote('c5');
    const keyboardShortcuts = KeyboardShortcuts.create({
      firstNote: firstNote,
      lastNote: lastNote,
      keyboardConfig: KeyboardShortcuts.HOME_ROW,
    });

    return (
      <div className="container-xxl">
        <Piano
          activeNotes={this.state.activeNotes}
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
          keyboardShortcuts={keyboardShortcuts}
        />
      </div>
    );
  }
}

export default PianoArea;
