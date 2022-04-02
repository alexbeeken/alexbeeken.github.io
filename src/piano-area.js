import React from 'react';
import { Piano, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';

class PianoArea extends React.Component {
  constructor(props) {
    super(props);

    this.updateNotes = props.updateNotes.bind(this);
  }

  toggleActiveNote(newNote) {
    this.setState((state, props) => ({ activeNotes: [...this.props.activeNotes, newNote]}));
  }

  fooToggleActiveNote(newNote) {
    let notes = this.props.activeNotes;
    let index = notes.indexOf(newNote);

    if (index === -1) {
      this.updateNotes([...notes, newNote])
    } else {
      notes.splice(index, 1);
      this.updateNotes([...notes])
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
