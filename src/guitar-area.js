import React from "react";
import Guitar from 'react-guitar';
import { standard } from 'react-guitar-tunings';

function GuitarArea(props) {
  return <Guitar strings={props.strings} onChange={props.updateNotes} />
}

export default GuitarArea;
