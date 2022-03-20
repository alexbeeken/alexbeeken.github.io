import React from 'react';
import KeyNav from './key-nav.js';
import PianoArea from './piano-area.js';
import GuitarArea from './guitar-area.js';

class Global extends React.component {
  render() {
    <div className="container">
      <ul className="navbar-nav mr-auto">
        <KeyNav />
      </ul>
      <PianoArea />
      <GuitarArea />
    </div>
  }
}

export default Global;
