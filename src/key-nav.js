import React from 'react';
import NavButton from './nav-button.js';

class KeyNav extends React.Component {
  render() {
    return [...Array(12).keys()].map((number) => {
      return <NavButton mkey={number} />            
    })
  }
}

export default KeyNav;
